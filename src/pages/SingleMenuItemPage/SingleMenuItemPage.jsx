import "./SingleMenuItemPage.css";

import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Navbar } from "../../component/Navbar/Navbar";
import { Loader } from "../../component/Loader/Loader";
import { MenuItemDetails } from "./Component/MenuItemDetails/MenuItemDetails";
import { MenuItemSliderList } from "../../component/MenuItemSliderList/MenuItemSliderList";
import { DataContext } from "../../context/DataContext";

export function SingleMenuItemPage() {
  const { state } = useContext(DataContext);
  const { menuItemId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [menuItemId]);

  const menuItem = state.menuItems.find(
    (menuItem) => menuItem._id === menuItemId
  );

  const subCategory = state.subCategories.find(
    (subCategory) => subCategory._id === menuItem?.sub_category_id
  );

  const mainCategory = state.mainCategories.find(
    (mainCategory) => mainCategory._id === subCategory?.main_category_id
  );
  if (!menuItem || !subCategory || !mainCategory) {
    return <Loader height="100vh" size="8rem" />;
  }
  const filterSubCategoriesIds = state.subCategories.reduce(
    (accumulator, subCategory) => {
      if (subCategory.main_category_id === mainCategory._id) {
        return [...accumulator, subCategory._id];
      }
      return accumulator;
    },
    []
  );

  const filterMenuItems = state.menuItems.filter((menuItem) =>
    filterSubCategoriesIds.includes(menuItem.sub_category_id)
  );

  const filteredInStockedMenuItems = filterMenuItems.filter((menuItem) => {
    const defaultVarint = menuItem.item_variant.find(
      (variant) => variant.default
    );
    return defaultVarint.in_stock;
  });
  const removeSingleViewMenuItem = filteredInStockedMenuItems.filter(
    (menuItem) => menuItem._id !== menuItemId
  );
  return (
    <>
      <div className="SingleMenuItemPageContainer">
        <Navbar />
        <MenuItemDetails menuItem={menuItem} />
        <div className="HorizontalLine"></div>
        <MenuItemSliderList
          mainCategory={mainCategory}
          SliderList={removeSingleViewMenuItem}
          sliderlistHeader="Similar Products"
          MenuListClassName={`SliderList${mainCategory._id}`}
        />
      </div>
    </>
  );
}
