import "./MenuItemSliderList.css";

import { useContext, useEffect, useState } from "react";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { MenuItemCard } from "../MenuItemCard/MenuItemCard";
import { DisplayContext } from "../../context/DisplayContext";

export function MenuItemSliderList({
  mainCategory,
  SliderList,
  sliderlistHeader,
  MenuListClassName,
}) {
  const { screenSize } = useContext(DisplayContext);
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
      <div className="MenuItemSliderListHeader">{sliderlistHeader}</div>
      <div className="MenuItemSliderListWrapper">
        <div className="MenuSliderLeftThumbContainer">
          <div className="MenuSliderLeftThumb" onClick={slidePreviosHandler}>
            <GrFormPrevious />
          </div>
        </div>
        <div className={`MenuItemSliderList  ${MenuListClassName}`}>
          {SliderList.map((menuItem) => {
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
