import "./MainCategoryCard.css";
import { Link } from "react-router-dom";

export function MainCategoryCard({ CardData: { name, image, id }, BGColor }) {
  return (
    <Link
      className="MainCategoryCardContainer"
      style={{ background: BGColor }}
      to={`/main_category/${id}`}
    >
      <div>{name}</div>
      <img src={image}></img>
    </Link>
  );
}
