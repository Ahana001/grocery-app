import "./MenuItemCard.css";

import { FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import {
  addToCartRequest,
  addToWishlistRequest,
  changeCartQuantityRequest,
  removeFromWishlistRequest,
} from "../../service/Service";
import { AuthContext } from "../../context/AuthContext";
import { ActionTypes } from "../../reducer/types";
import { DisplayContext } from "../../context/DisplayContext";
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
  const filterDefaultSelectedMenuItemVariant = item_variant?.find(
    (variant) => variant.selected
  );
  const defaultVariant = item_variant.find((variant) => variant.default);
  const { dispatch } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const { dropdownVisibility } = useContext(DisplayContext);

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
    menuItem.item_variant = menuItem.item_variant.map((variant) =>
      variant._id === variantId
        ? { ...variant, selected: true }
        : { ...variant, selected: false }
    );

    dispatch({
      type: ActionTypes.ChangeItem,
      payload: {
        menuItem: menuItem,
      },
    });
  }
  async function AddToCartHandler() {
    if (currentUser.token) {
      const isMenuItemIsCarted = menuItem.item_variant.find(
        (variant) => variant.carted
      );
      menuItem.item_variant = menuItem.item_variant.map((variant) =>
        variant._id === filterDefaultSelectedMenuItemVariant._id
          ? {
              ...variant,
              carted: true,
              quantity: 1,
            }
          : { ...variant }
      );
      dispatch({
        type: ActionTypes.ChangeItem,
        payload: {
          menuItem: menuItem,
        },
      });
      let cartResponse;
      if (isMenuItemIsCarted) {
        cartResponse = await changeCartQuantityRequest(
          menuItem,
          currentUser.token
        );
      } else {
        cartResponse = await addToCartRequest(menuItem, currentUser.token);
      }
      if (cartResponse?.status === 201 || cartResponse?.status === 200) {
        dispatch({
          type: ActionTypes.SetCartList,
          payload: {
            cart: cartResponse.data.cart,
          },
        });
      }
    } else {
      navigate("/user/login", { state: { from: location } });
    }
  }
  async function AddToWishListHandler(menuItem) {
    if (currentUser.token) {
      const menuItemAlreadyWished = menuItem.wished;
      if (menuItemAlreadyWished) {
        const response = await removeFromWishlistRequest(
          menuItem._id,
          currentUser.token
        );
        if (response.status === 200) {
          dispatch({
            type: ActionTypes.SetWishlist,
            payload: {
              wishlist: response.data.wishlist,
            },
          });
          const updatedMenuItem = { ...menuItem, wished: false };
          dispatch({
            type: ActionTypes.ChangeItem,
            payload: {
              menuItem: updatedMenuItem,
            },
          });
        }
      } else {
        const response = await addToWishlistRequest(
          menuItem,
          currentUser.token
        );
        if (response.status === 201) {
          dispatch({
            type: ActionTypes.SetWishlist,
            payload: {
              wishlist: response.data.wishlist,
            },
          });
          const updatedMenuItem = { ...menuItem, wished: true };
          dispatch({
            type: ActionTypes.ChangeItem,
            payload: {
              menuItem: updatedMenuItem,
            },
          });
        }
      }
    } else {
      navigate("/user/login", { state: { from: location } });
    }
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
      <div
        className="LikeIconContainer"
        onClick={() => AddToWishListHandler(menuItem)}
        style={{ zIndex: dropdownVisibility ? "0" : "100" }}
      >
        {menuItem.wished ? (
          <AiFillHeart
            style={{
              color: menuItem.wished ? "#dc2626" : "",
            }}
          />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
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
              onChange={getSelectedVariant}
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
            <div className="AddToCartButton" onClick={AddToCartHandler}>
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
