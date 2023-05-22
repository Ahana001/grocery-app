import "./SubCategoryStack.css";

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../../../../../../context/DataContext";
import { ActionTypes, Filters } from "../../../../../../reducer/types";

export function SubCategoryStack() {
  const { state, dispatch } = useContext(DataContext);
  const { mainCategoryId } = useParams();

  const filterSubCategies = state.subCategories.filter(
    (subCategory) => subCategory.main_category_id === "MC_" + mainCategoryId
  );
  useEffect(() => {
    dispatch({
      type: ActionTypes.ChangeFilter,
      payload: {
        filterType: Filters.CurrentSubCategory,
        filterValue: filterSubCategies[0]._id,
      },
    });
  }, [mainCategoryId]);

  function onChangeCurrentSubCategoryHandler(id) {
    dispatch({
      type: ActionTypes.ChangeFilter,
      payload: {
        filterType: Filters.CurrentSubCategory,
        filterValue: id,
      },
    });
  }
  return (
    <div className="SubCategoryStackContainer">
      <div className="SubCategoryStackItemContainer">
        {filterSubCategies.map((subCategory) => {
          return (
            <div
              className="SubCategoryDisk"
              key={subCategory._id}
              style={{
                background:
                  state.filter.currentSubCategory === subCategory._id
                    ? "rgb(195, 232, 202)"
                    : "",
              }}
              onClick={() => onChangeCurrentSubCategoryHandler(subCategory._id)}
            >
              <div></div>
              <div>{subCategory.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
