import "./HomePage.css";

import { useContext, useEffect } from "react";

import { home_main_categories } from "./constant";
import { DataContext } from "../../context/DataContext";
import { Loader } from "../../component/Loader/Loader";
import { Banner } from "../../component/Banner/Banner";
import { MainCategoryList } from "./Component/MainCategoryList/MainCategoryList";
import { MenuItemSliderList } from "../../component/MenuItemSliderList/MenuItemSliderList";

export function HomePage() {
  const { loader } = useContext(DataContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loader ? (
        <Loader height="100vh" size="8rem" />
      ) : (
        <div className="HomePageContainer">
          <Banner />
          <MainCategoryList />
          {home_main_categories.map((mainCategory) => {
            return (
              <MenuItemSliderList
                key={mainCategory._id}
                mainCategory={mainCategory}
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
