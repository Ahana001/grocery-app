import "./MainCategoryTabBar.css";

import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { DataContext } from "../../../../context/DataContext";

export function MainCategoryTabBar() {
  const { state } = useContext(DataContext);
  const { mainCategoryId } = useParams();
  const navigate = useNavigate();

  function ChangeMainCategoryHandler(id) {
    navigate(`/main_category/${id}`);
  }

  return (
    <>
      <div className="MainCategoryTabContainer">
        {state.mainCategories.map(({ name, id }) => {
          return (
            <div
              className="MainCategoryTab"
              key={id}
              style={{ background: mainCategoryId === id ? " #f4f4f4" : "" }}
              onClick={() => ChangeMainCategoryHandler(id)}
            >
              {name}
            </div>
          );
        })}
      </div>
    </>
  );
}
