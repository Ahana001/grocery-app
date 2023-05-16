import { useContext } from "react";
import "./MainCategoryCard.css";
import { DataContext } from "../../../context/DataContext";
import { ActionTypes, Filters } from "../../../reducer/types";
import { useNavigate } from "react-router-dom";

export function MainCategoryCard({ CardData: { name, image, id }, BGColor }) {
  const { dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  function selectMainCategoryHandler(mainCategoryId) {
    dispatch({
      type: ActionTypes.ChangeFilter,
      payload: {
        filterType: Filters.CurrentMainCategory,
        filterValue: mainCategoryId,
      },
    });
    navigate(`/main_category/${mainCategoryId}`);
  }
  return (
    <div
      className="MainCategoryCardContainer"
      style={{ background: BGColor }}
      onClick={() => selectMainCategoryHandler(id)}
    >
      <div>{name}</div>
      <img src={image}></img>
    </div>
  );
}
