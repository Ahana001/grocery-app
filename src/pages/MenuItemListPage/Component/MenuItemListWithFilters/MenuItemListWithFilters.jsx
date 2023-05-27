import "./MenuItemListWithFilters.css";

import { MenuItemList } from "./Component/MenuItemList/MenuItemList";
import { SubCategoryStack } from "./Component/SubCategoryStack/SubCategoryStack";
import { FilterStack } from "./Component/FilterStack/FilterStack";
import { useState, useEffect } from "react";
export function MenuItemListWithFilters() {
  const [FilterPriceRatingDisplay, setFilterPriceRatingDisplay] =
    useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    if (window.innerWidth <= 798) {
      setFilterPriceRatingDisplay(() => false);
    } else {
      setFilterPriceRatingDisplay(() => true);
    }
  }, []);
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    if (screenSize.width <= 798) {
      setFilterPriceRatingDisplay(false);
    } else {
      setFilterPriceRatingDisplay(true);
    }
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      <div className="MenuItemGridFilterContainer">
        <div className="MenuItemListWithFiltersContainer">
          <SubCategoryStack />
          <MenuItemList
            setFilterPriceRatingDisplay={setFilterPriceRatingDisplay}
          />
        </div>
        <FilterStack
          FilterPriceRatingDisplay={FilterPriceRatingDisplay}
          setFilterPriceRatingDisplay={setFilterPriceRatingDisplay}
          screenSize={screenSize}
        />
      </div>
    </>
  );
}
