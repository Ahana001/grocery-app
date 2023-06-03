import "./MenuItemCard.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { DataContext } from "../../context/DataContext";
import { LikeButton } from "../LikeButton/LikeButton";
// import { QuantityButton } from "../QuantityButton/QuantityButton";

export function MenuItemCard({ menuItem, width }) {
  const {
    _id,
    image,
    name,
    delivery_time_in_mins,
    item_variant,
    veg_egg_non,
    rating,
  } = menuItem;

  const { getSelectedVariant, AddToCartHandler } = useContext(DataContext);

  const filterDefaultSelectedMenuItemVariant = item_variant?.find(
    (variant) => variant.selected
  );
  const defaultVariant = item_variant.find((variant) => variant.default);

  function getImageByMenuType(veg_egg_non) {
    let resultUrl = "";
    switch (veg_egg_non) {
      case "veg": {
        resultUrl = "vegicon.png";
        break;
      }
      case "non-veg": {
        resultUrl = "nonvegicon.png";
        break;
      }
      case "egg": {
        resultUrl = "eggicon.png";
        break;
      }
    }
    return "../images/" + resultUrl;
  }
  function getStars(rating) {
    let stars = [];
    let count = rating;
    for (let i = 1; i <= rating; i++) {
      count = count - 1;
      stars.push(i);
    }
    if (count > 0.5) {
      stars.push(0.5);
    }
    return stars;
  }

  return (
    <div
      className="MenuItemContainer"
      style={{
        position: defaultVariant.in_stock ? "" : "relative",
        minWidth: width,
        maxWidth: width,
      }}
    >
      <LikeButton menuItem={menuItem} />
      <Link className="MenuItemImageTop" to={`/menu_item/${_id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="MenuItemDetailsBottom">
        <div>
          {getStars(rating).map((ratingStar) => {
            if (ratingStar === 0.5) {
              return <FaStarHalfAlt className="checked" key={ratingStar} />;
            }
            return <FaStar className="checked" key={ratingStar} />;
          })}
        </div>
        <div className="MenuItemTypeAndTime">
          <div className="MenuItemType">
            <img src={getImageByMenuType(veg_egg_non)} />
          </div>
          <div className="DeliveryTimeContainer">
            <div className="ClockIconContainer">
              <FaRegClock />
            </div>
            <div className="DeliveryTime">{delivery_time_in_mins} MINS</div>
          </div>
        </div>
        <div className="MenuItemName">{name}</div>
        <div className="MenuItemNameVericleLine"></div>
        {item_variant.length > 1 ? (
          <>
            <select
              className="MenuItemVarinats"
              onChange={(e) => getSelectedVariant(e, menuItem)}
              defaultValue={filterDefaultSelectedMenuItemVariant._id}
            >
              {item_variant.map(({ unit, price, _id, in_stock }) => {
                return (
                  <option key={_id} value={_id} disabled={!in_stock}>
                    {unit} - Rs. {price}
                  </option>
                );
              })}
            </select>
          </>
        ) : (
          <div className="MenuItemVarinat">{item_variant[0].unit}</div>
        )}
        <div className="PriceAndButtonContaine">
          <div className="MenuItemPrice">
            Rs. {filterDefaultSelectedMenuItemVariant.price}
          </div>
          {filterDefaultSelectedMenuItemVariant.carted ? (
            <Link className="GoToCartButton" to="/user/cart">
              Go To Cart
            </Link>
          ) : // <QuantityButton
          //   menuItem={menuItem}
          //   variant={filterDefaultSelectedMenuItemVariant}
          // />
          defaultVariant.in_stock ? (
            <div
              className="AddToCartButton"
              onClick={() => AddToCartHandler(menuItem)}
            >
              Add
            </div>
          ) : (
            <Link className="OutOfStockContainer" to={`/menu_item/${_id}`}>
              <div className="OutOfStock">Out Of Stock</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
