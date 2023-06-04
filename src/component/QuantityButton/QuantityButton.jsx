import "./QuantityButton.css";

import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import { ActionTypes } from "../../reducer/types";
import {
  changeCartQuantityRequest,
  removeMenuItemFromCartRequest,
} from "../../service/Service";

export function QuantityButton({ menuItem, variant }) {
  const { dispatch } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const [isAdding, setAdding] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAdding(false);
    }, 1000);
  }, [isAdding]);
  return (
    <div className="QuantityContainer">
      <button
        disabled={isAdding}
        className="Decreament"
        onClick={async () => {
          setAdding(true);
          (menuItem.item_variant = menuItem.item_variant.map(
            (MenuItemVariant) =>
              MenuItemVariant._id === variant._id &&
              MenuItemVariant.quantity > 0
                ? {
                    ...MenuItemVariant,
                    quantity: MenuItemVariant.quantity - 1,
                    ...(MenuItemVariant.quantity - 1 === 0
                      ? { carted: false }
                      : {}),
                  }
                : MenuItemVariant
          )),
            dispatch({
              type: ActionTypes.ChangeItem,
              payload: {
                menuItem: menuItem,
              },
            });
          const itemHaveAtOneCartedVariant = menuItem.item_variant.find(
            (variant) => variant.carted
          );
          if (itemHaveAtOneCartedVariant) {
            const response = await changeCartQuantityRequest(
              menuItem,
              currentUser.token
            );
            if (response?.status === 200) {
              dispatch({
                type: ActionTypes.SetCartList,
                payload: {
                  cart: response.data.cart,
                },
              });
            }
          } else {
            const response = await removeMenuItemFromCartRequest(
              menuItem._id,
              currentUser.token
            );
            if (response?.status === 200) {
              dispatch({
                type: ActionTypes.SetCartList,
                payload: {
                  cart: response.data.cart,
                },
              });
            }
          }
        }}
      >
        -
      </button>
      <div className="Quantity">{variant.quantity}</div>
      <button
        disabled={isAdding}
        className="Increament"
        onClick={async () => {
          setAdding(true);
          menuItem.item_variant = menuItem.item_variant.map((MenuItemVariant) =>
            MenuItemVariant._id === variant._id && MenuItemVariant.quantity < 5
              ? {
                  ...MenuItemVariant,
                  quantity: MenuItemVariant.quantity + 1,
                }
              : MenuItemVariant
          );
          dispatch({
            type: ActionTypes.ChangeItem,
            payload: {
              menuItem: menuItem,
            },
          });
          const response = await changeCartQuantityRequest(
            menuItem,
            currentUser.token
          );
          if (response?.status === 200) {
            dispatch({
              type: ActionTypes.SetCartList,
              payload: {
                cart: response.data.cart,
              },
            });
          }
        }}
      >
        +
      </button>
    </div>
  );
}
