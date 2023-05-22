import "./MenuItemListWithFilters.css";

import { MenuItemList } from "./Component/MenuItemList/MenuItemList";
import { SubCategoryStack } from "./Component/SubCategoryStack/SubCategoryStack";
import { FilterStack } from "./Component/FilterStack/FilterStack";

export function MenuItemListWithFilters() {
  return (
    <div className="MenuItemListWithFiltersContainer">
      <SubCategoryStack />
      <MenuItemList />
      <FilterStack />
    </div>
  );
}
