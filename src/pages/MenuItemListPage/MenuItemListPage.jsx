import "./MenuItemListPage.css";

import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { Loader } from "../../component/Loader/Loader";
import { MainCategoryTabBar } from "./Component/MainCategoryTabBar/MainCategoryTabBar";
import { MenuItemListWithFilters } from "./Component/MenuItemListWithFilters/MenuItemListWithFilters";

export function MenuItemListPage() {
  const { loader } = useContext(DataContext);

  return (
    <>
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
