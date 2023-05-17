import "./ItemList.css";

import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../../../../context/DataContext";

import { Loader } from "../../../../../../component/Loader/Loader";

export function ItemList() {
  const { state } = useContext(DataContext);
  const [menuListLoader, setMenuListLoader] = useState(false);
  const filterMenuItemByCurrentSubCategory = state.menuItems.filter(
    (menuItem) => menuItem.sub_category_id === state.filter.currentSubCategory
  );

  useEffect(() => {
    setMenuListLoader(() => true);
    setTimeout(() => {
      setMenuListLoader(() => false);
    }, 1000);
  }, [state.filter]);

  if (menuListLoader) {
    return <Loader height="100%" size="60px" />;
  }

  return (
    <div className="ItemListContainer">
      {filterMenuItemByCurrentSubCategory.map((menuItem) => {
        return <div key={menuItem._id}>{menuItem.name}</div>;
      })}
    </div>
  );
}
