import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PriceFilter } from "../reducer/types";

export const useFilterDataHook = () => {
  const { state } = useContext(DataContext);
  const { filter, menuItems } = state;
  const { sortByPrice, currentSubCategory, rating, priceRange } = filter;

  let filterMenuItems = menuItems;
  if (currentSubCategory !== "") {
    filterMenuItems = filterMenuItems.filter(
      (menuItem) => menuItem.sub_category_id === currentSubCategory
    );
  }

  if (rating > 1) {
    filterMenuItems = filterMenuItems.filter(
      (menuItem) => menuItem.rating >= rating
    );
  }

  if (priceRange.length > 0) {
    filterMenuItems = priceRange.reduce((accumulator, { lower, upper }) => {
      const menuItemInSideParticularRange = filterMenuItems.filter(
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
        filterMenuItems = filterMenuItems.sort((a, b) => {
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
        filterMenuItems = filterMenuItems.sort((a, b) => {
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

  return filterMenuItems;
};
