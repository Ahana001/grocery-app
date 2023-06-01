import "./MenuItemListWithFilters.css";

import { MenuItemList } from "./Component/MenuItemList/MenuItemList";
import { SubCategoryStack } from "./Component/SubCategoryStack/SubCategoryStack";
import { FilterStack } from "./Component/FilterStack/FilterStack";
import { useEffect, useContext } from "react";
import { DisplayContext } from "../../../../context/DisplayContext";
export function MenuItemListWithFilters() {
  const { setFilterPriceRatingDisplay } = useContext(DisplayContext);

  useEffect(() => {
    if (window.innerWidth <= 798) {
      setFilterPriceRatingDisplay(() => false);
    } else {
      setFilterPriceRatingDisplay(() => true);
    }
  }, []);

  return (
    <>
      <div className="MenuItemGridFilterContainer">
        <div className="MenuItemListWithFiltersContainer">
          <SubCategoryStack />
          <MenuItemList />
        </div>
        <FilterStack />
      </div>
    </>
  );
}
