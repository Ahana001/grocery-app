import "./MainCategoryList.css";

import { useContext } from "react";

import { DataContext } from "../../../../context/DataContext";

import { MainCategoryCard } from "../MainCategoryCard/MainCategoryCard";
import { MainCategoriesCardColor } from "./Constants";

export function MainCategoryList() {
  const { state } = useContext(DataContext);

  return (
    <>
      <div className="MainCategoryHeading">Shop by category</div>
      <div className="MainCategoryContainer">
        {state.mainCategories.map((mainCategory, i) => {
          return (
            <MainCategoryCard
              key={mainCategory._id}
              CardData={mainCategory}
              BGColor={MainCategoriesCardColor[i]}
            />
          );
        })}
      </div>
    </>
  );
}
