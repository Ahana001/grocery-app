import "./MenuItemList.css";

import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../../../../context/DataContext";

import { Loader } from "../../../../../../component/Loader/Loader";
import { MenuItemCard } from "../../../../../../component/MenuItemCard/MenuItemCard";
import { PriceFilterName } from "./constant";
import { useFilterDataHook } from "../../../../../../Hook/FilterDataHook";
import { PriceFilter } from "../../../../../../reducer/types";
import { Filters } from "../../../../../../reducer/types";
import { ActionTypes } from "../../../../../../reducer/types";

export function MenuItemList() {
  const { state, dispatch } = useContext(DataContext);
  const [menuListLoader, setMenuListLoader] = useState(false);
  const filteredMenuItems = useFilterDataHook();

  useEffect(() => {
    setMenuListLoader(() => true);
    setTimeout(() => {
      setMenuListLoader(() => false);
    }, 1000);
  }, [state.filter]);

  function getCurrentSubCategoryName() {
    return (
      state.subCategories.find(
        ({ _id }) => _id === state.filter.currentSubCategory
      )?.name ?? ""
    );
  }
  function sortMenuItemByPriceHandler(e) {
    const type = e.target.value;
    let dispatchType;
    switch (type) {
      case "Price ( High to low )": {
        dispatchType = PriceFilter.HighToLow;
        break;
      }
      case "Price ( Low to high )": {
        dispatchType = PriceFilter.LowToHight;
        break;
      }
      default:
        dispatchType = "Relevance";
        break;
    }
    dispatch({
      type: ActionTypes.ChangeFilter,
      payload: {
        filterType: Filters.SortByPrice,
        filterValue: dispatchType,
      },
    });
  }
  function getSelectedValue(stateType) {
    let displayType;
    switch (stateType) {
      case PriceFilter.HighToLow: {
        displayType = "Price ( High to low )";
        break;
      }
      case PriceFilter.LowToHight: {
        displayType = "Price ( Low to high )";
        break;
      }
      default:
        displayType = "Relevance";
        break;
    }
    return displayType;
  }

  if (menuListLoader) {
    return <Loader height="100%" size="60px" />;
  }
  return (
    <>
      <div className="MenuItemMiddleListContainer">
        <div className="MenuItemListNavBar">
          <div className="CurrentCategoryName">
            Buy {getCurrentSubCategoryName()} Online
          </div>
          <div className="MenuItemFilterContainer">
            <div className="SortName">Sort By</div>
            <select
              className="MenuItemSortByPriceFilter"
              onChange={sortMenuItemByPriceHandler}
              defaultValue={getSelectedValue(state.filter.sortByPrice)}
            >
              {PriceFilterName.map((name) => {
                return (
                  <option key={name} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="MenuItemListContainer">
          {filteredMenuItems.map((menuItem) => {
            return <MenuItemCard menuItem={menuItem} key={menuItem._id} />;
          })}
        </div>
      </div>
    </>
  );
}
