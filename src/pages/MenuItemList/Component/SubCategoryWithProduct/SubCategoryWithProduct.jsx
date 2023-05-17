import "./SubCategoryWithProduct.css";

import { ItemList } from "./Component/ItemList/ItemList";
import { SubCategoryStack } from "./Component/SubCategoryStack/SubCategoryStack";

export function SubCategoryWithProduct() {
  return (
    <div className="SubCategoryMenuItemContainer">
      <SubCategoryStack />
      <ItemList />
    </div>
  );
}
