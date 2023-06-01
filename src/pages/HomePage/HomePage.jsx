import "./HomePage.css";

import { useContext, useEffect } from "react";

import { DataContext } from "../../context/DataContext";
import { Loader } from "../../component/Loader/Loader";
import { Navbar } from "../../component/Navbar/Navbar";
import { Banner } from "../../component/Banner/Banner";
import { MainCategoryList } from "./Component/MainCategoryList/MainCategoryList";
import { MenuItemSliderList } from "../../component/MenuItemSliderList/MenuItemSliderList";
import { home_main_categories } from "./constant";

export function HomePage() {
  const { loader } = useContext(DataContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
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
                MenuListClassName={`SliderList${mainCategory._id}`}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
