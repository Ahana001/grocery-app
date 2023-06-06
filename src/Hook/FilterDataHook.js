import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PriceFilter } from "../reducer/types";

export const useFilterDataHook = () => {
  const { state } = useContext(DataContext);
  const { filter, menuItems } = state;
  const { sortByPrice, currentSubCategory, rating, priceRange } = filter;

  let filteredMenuItems = menuItems;
  if (currentSubCategory !== "") {
    filteredMenuItems = filteredMenuItems.filter(
      (menuItem) => menuItem.sub_category_id === currentSubCategory
    );
  }

  if (rating > 1) {
    filteredMenuItems = filteredMenuItems.filter(
      (menuItem) => menuItem.rating >= rating
    );
  }

  if (priceRange.length > 0) {
    filteredMenuItems = priceRange.reduce((accumulator, { lower, upper }) => {
      const menuItemInSideParticularRange = filteredMenuItems.filter(
        (menu_item) => {
          const itemVariantInsideRange = menu_item.item_variant.find(
            ({ price }) => price >= lower && price <= upper
          );
          if (itemVariantInsideRange) {
            return true;
          } else {
            return false;
          }
        }
      );
      return [...accumulator, ...menuItemInSideParticularRange];
    }, []);
  }

  if (sortByPrice !== "Relevance") {
    switch (sortByPrice) {
      case PriceFilter.HighToLow: {
        filteredMenuItems = filteredMenuItems.sort((a, b) => {
          const findADefaultPrice = a.item_variant.find(
            (variant) => variant.default
          ).price;
          const findBDefaultPrice = b.item_variant.find(
            (variant) => variant.default
          ).price;
          return findADefaultPrice > findBDefaultPrice ? -1 : 1;
        });
        break;
      }
      case PriceFilter.LowToHight: {
        filteredMenuItems = filteredMenuItems.sort((a, b) => {
          const findADefaultPrice = a.item_variant.find(
            (variant) => variant.default
          ).price;
          const findBDefaultPrice = b.item_variant.find(
            (variant) => variant.default
          ).price;
          return findADefaultPrice > findBDefaultPrice ? 1 : -1;
        });
        break;
      }
    }
  }

  const sortFilteredMenuItemByInStock = filteredMenuItems.sort((a, b) => {
    const findStatusOfStockOfMenuItemA = a.item_variant.find(
      (variant) => variant.default
    );
    const findStatusOfStockOfMenuItemB = b.item_variant.find(
      (variant) => variant.default
    );
    if (
      findStatusOfStockOfMenuItemA.in_stock &&
      !findStatusOfStockOfMenuItemB.in_stock
    ) {
      return -1;
    }
    if (
      !findStatusOfStockOfMenuItemA.in_stock &&
      findStatusOfStockOfMenuItemB.in_stock
    ) {
      return 1;
    }
    return 0;
  });

  return sortFilteredMenuItemByInStock;
};
