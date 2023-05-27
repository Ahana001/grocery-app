import "./MenuItemListPage.css";

import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

import { Loader } from "../../component/Loader/Loader";
import { Navbar } from "../../component/Navbar/Navbar";
import { MainCategoryTabBar } from "./Component/MainCategoryTabBar/MainCategoryTabBar";
import { MenuItemListWithFilters } from "./Component/MenuItemListWithFilters/MenuItemListWithFilters";

export function MenuItemListPage() {
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
        <div className="MenuItemListPageContainer">
          <MainCategoryTabBar />
          <MenuItemListWithFilters />
        </div>
      )}
    </>
  );
}
