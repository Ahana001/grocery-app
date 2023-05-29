import "./MenuItemSliderList.css";

import { useContext } from "react";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard";
import { DataContext } from "../../context/DataContext";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export function MenuItemSliderList({ mainCategory, MenuListClassName }) {
  const { state } = useContext(DataContext);
  let MenuItemCardWidth = 179;

  const filterSubCategoriesIds = state.subCategories.reduce(
    (accumulator, subCategory) => {
      if (subCategory.main_category_id === mainCategory._id) {
        return [...accumulator, subCategory._id];
      }
      return accumulator;
    },
    []
  );

  const filterMenuItems = state.menuItems.filter((menuItem) =>
    filterSubCategoriesIds.includes(menuItem.sub_category_id)
  );

  const filteredInStockedMenuItems = filterMenuItems.filter((menuItem) => {
    const defaultVarint = menuItem.item_variant.find(
      (variant) => variant.default
    );
    return defaultVarint.in_stock;
  });

  function slidePreviosHandler() {
    const box = document.querySelector(`.SliderList${mainCategory._id}`);
    let boxWidth = box.clientWidth;
    let NoOfCardInFrame = Math.floor(boxWidth / MenuItemCardWidth);
    box.scrollLeft = box.scrollLeft - NoOfCardInFrame * MenuItemCardWidth;
  }
  function slideNextHandler() {
    const box = document.querySelector(`.SliderList${mainCategory._id}`);
    let boxWidth = box.clientWidth;
    let NoOfCardInFrame = Math.floor(boxWidth / MenuItemCardWidth);
    box.scrollLeft = box.scrollLeft + NoOfCardInFrame * MenuItemCardWidth;
  }

  return (
    <div className="MenuItemSliderListContainer">
      <div className="MenuItemSliderListHeader">{mainCategory.name}</div>
      <div className="MenuItemSliderListWrapper">
        <div className="MenuSliderLeftThumbContainer">
          <div className="MenuSliderLeftThumb" onClick={slidePreviosHandler}>
            <GrFormPrevious />
          </div>
        </div>
        <div className={`MenuItemSliderList  ${MenuListClassName}`}>
          {filteredInStockedMenuItems.map((menuItem) => {
            return (
              <MenuItemCard
                key={menuItem._id}
                menuItem={menuItem}
                width={`${MenuItemCardWidth}px`}
              />
            );
          })}
        </div>
        <div className="MenuSliderRightThumbContainer">
          <div className="MenuSliderRightThumb" onClick={slideNextHandler}>
            <GrFormNext />
          </div>
        </div>
      </div>
    </div>
  );
}
