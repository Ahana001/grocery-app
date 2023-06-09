import "./MenuItemListPage.css";

import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { DataContext } from "../../context/DataContext";
import { Loader } from "../../component/Loader/Loader";
import { MainCategoryTabBar } from "./Component/MainCategoryTabBar/MainCategoryTabBar";
import { MenuItemListWithFilters } from "./Component/MenuItemListWithFilters/MenuItemListWithFilters";
import { ActionTypes } from "../../reducer/types";

export function MenuItemListPage() {
  const { state, loader, dispatch } = useContext(DataContext);
  const { mainCategoryId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch({
      type: ActionTypes.ReserFilters,
      payload: {
        filter: {
          sortByPrice: "Relevance",
          rating: 1,
          search: "",
          priceRange: [],
        },
      },
    });
  }, []);
  if (
    !state.mainCategories.find(
      (mainCategory) => mainCategory._id === "MC_" + mainCategoryId
    )
  ) {
    navigate("/404");
  }
  return (
    <>
      <Helmet>
        <title>Grossy</title>
        <meta
          name="description"
          content="Shop on the go and get anything delivered in minutes. Buy everything
      from groceries to fresh fruits & vegetable"
        />
        <meta name="author" content="Ankita" />
        <meta name="keyword" content=" grocery app" />
      </Helmet>
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
