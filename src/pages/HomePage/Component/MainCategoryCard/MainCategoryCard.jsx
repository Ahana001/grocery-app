import "./MainCategoryCard.css";
import { useNavigate } from "react-router-dom";

export function MainCategoryCard({ CardData: { name, image, id }, BGColor }) {
  const navigate = useNavigate();

  function selectMainCategoryHandler(mainCategoryId) {
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
