import "./MenuItemSliderList.css";

import { useContext, useEffect, useState } from "react";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { DataContext } from "../../context/DataContext";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard";

export function MenuItemSliderList({ mainCategory, MenuListClassName }) {
  const { state, screenSize } = useContext(DataContext);
  const [cardWidth, setCardWidth] = useState("17.9rem");

  useEffect(() => {
    if (screenSize.width <= 395) {
      setCardWidth(() => "14.8rem");
    } else if (screenSize.width <= 640) {
      setCardWidth(() => "16rem");
    } else {
      setCardWidth(() => "17.9rem");
    }
  }, []);
  useEffect(() => {
    if (screenSize.width <= 395) {
      setCardWidth(() => "14.8rem");
    } else if (screenSize.width <= 640) {
      setCardWidth(() => "16rem");
    } else {
      setCardWidth(() => "17.9rem");
    }
  }, [screenSize]);

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
    const card = document.querySelector(".MenuItemContainer");

    let boxWidth = box.clientWidth;
    let NoOfCardInFrame = Math.floor(boxWidth / card.clientWidth);
    box.scrollLeft = box.scrollLeft - NoOfCardInFrame * card.clientWidth;
  }
  function slideNextHandler() {
    const box = document.querySelector(`.SliderList${mainCategory._id}`);
    const card = document.querySelector(".MenuItemContainer");
    let boxWidth = box.clientWidth;
    let NoOfCardInFrame = Math.floor(boxWidth / card.clientWidth);
    box.scrollLeft = box.scrollLeft + NoOfCardInFrame * card.clientWidth;
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
                width={cardWidth}
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
