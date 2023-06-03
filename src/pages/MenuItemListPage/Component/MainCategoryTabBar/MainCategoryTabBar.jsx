import "./MainCategoryTabBar.css";

import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { DataContext } from "../../../../context/DataContext";

export function MainCategoryTabBar() {
  const { state } = useContext(DataContext);
  const { mainCategoryId } = useParams();

  return (
    <>
      <div className="MainCategoryTabContainer">
        {state.mainCategories.map(({ name, id }) => {
          return (
            <Link
              className="MainCategoryTab"
              key={id}
              style={{ background: mainCategoryId === id ? " #f4f4f4" : "" }}
              to={`/main_category/${id}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
