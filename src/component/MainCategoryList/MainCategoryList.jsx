import "./MainCategoryList.css";

import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { MainCategoryCard } from "./MainCategoryCard/MainCategoryCard";
import { MainCategoriesCardColor } from "./Constants";

export function MainCategoryList() {
  const { state } = useContext(DataContext);

  if (state.mainCategories.length === 0) {
    return <h2>Loarding.....</h2>;
  }
  return (
    <>
      <div className="MainCategoryHeading">Shop by category</div>
      <div className="MainCategoryContainer">
        {state.mainCategories.map((mainCategory, i) => {
          return (
            <MainCategoryCard
              key={mainCategory.id}
              CardData={mainCategory}
              BGColor={MainCategoriesCardColor[i]}
            />
          );
        })}
      </div>
    </>
  );
}
