import "./HomePage.css";

import { useContext } from "react";

import { home_main_categories } from "./constant";
import { DataContext } from "../../context/DataContext";
import { Loader } from "../../component/Loader/Loader";
import { Banner } from "../../component/Banner/Banner";
import { MainCategoryList } from "./Component/MainCategoryList/MainCategoryList";
import { MenuItemSliderList } from "../../component/MenuItemSliderList/MenuItemSliderList";

export function HomePage() {
  const { loader, state } = useContext(DataContext);

  return (
    <>
      {loader ? (
        <Loader height="100vh" size="8rem" />
      ) : (
        <div className="HomePageContainer">
          <Banner />
          <MainCategoryList />
          {home_main_categories.map((mainCategory) => {
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

            const filteredInStockedMenuItems = filterMenuItems.filter(
              (menuItem) => {
                const defaultVarint = menuItem.item_variant.find(
                  (variant) => variant.default
                );
                return defaultVarint.in_stock;
              }
            );

            return (
              <MenuItemSliderList
                key={mainCategory._id}
                mainCategory={mainCategory}
                SliderList={filteredInStockedMenuItems}
                sliderlistHeader={mainCategory.name}
                MenuListClassName={`SliderList${mainCategory._id}`}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
