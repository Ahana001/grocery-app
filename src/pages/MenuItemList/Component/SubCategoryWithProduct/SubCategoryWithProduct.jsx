import "./SubCategoryWithProduct.css";

import { ItemList } from "./Component/ItemList/ItemList";
import { SubCategoryStack } from "./Component/SubCategoryStack/SubCategoryStack";
import { FilterStack } from "./Component/FilterStack/FilterStack";

export function SubCategoryWithProduct() {
  return (
    <div className="SubCategoryMenuItemContainer">
      <SubCategoryStack />
      <ItemList />
      <FilterStack />
    </div>
  );
}
