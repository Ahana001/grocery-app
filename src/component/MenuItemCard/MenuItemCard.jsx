import "./MenuItemCard.css";

import { useState } from "react";
import { FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function MenuItemCard({
  menuItem: {
    _id,
    image,
    name,
    delivery_time_in_mins,
    item_variant,
    veg_egg_non,
    rating,
  },
}) {
  const filterDefaultMenuItemVariant = item_variant?.find(
    (variant) => variant.default
  );
  const [menuItemPriceAndUnit, setMenuItemPriceAndUnit] = useState(
    filterDefaultMenuItemVariant
  );
  const navigate = useNavigate();
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
  function getSelectedVariant(e) {
    const variantId = e.target.value;
    const filterMenuItemVariant = item_variant.filter(
      (variant) => variant._id === variantId
    )[0];
    setMenuItemPriceAndUnit(() => filterMenuItemVariant);
  }
  function selectMenuItemHandler(id) {
    navigate(`/menu_item/${id}`);
  }
  const itemAvailability = menuItemPriceAndUnit?.in_stock ? "" : "OutOfStock";
  return (
    <div
      className={`MenuItemContainer ${itemAvailability}`}
      onClick={() => {
        selectMenuItemHandler(_id);
      }}
    >
      <div className="LikeIconContainer"></div>
      <div className="MenuItemImageTop">
        <img src={image} alt={name} />
      </div>
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
              onChange={getSelectedVariant}
              defaultValue={menuItemPriceAndUnit._id}
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
          <div className="MenuItemPrice">Rs. {menuItemPriceAndUnit.price}</div>
          <div className="AddToCartButton">Add</div>
        </div>
      </div>
    </div>
  );
}
