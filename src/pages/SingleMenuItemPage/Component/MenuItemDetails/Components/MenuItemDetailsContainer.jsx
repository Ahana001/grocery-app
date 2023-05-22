import { BsTruck } from "react-icons/bs";

import { MenuItemVariantList } from "../../MenuItemVariantList/MenuItemVariantList";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addToCartRequest,
  changeCartQuantityRequest,
  removeMenuItemFromCartRequest,
} from "../../../../../service/Service";
import { DataContext } from "../../../../../context/DataContext";
import { ActionTypes } from "../../../../../reducer/types";

export function MenuItemDetailsContainer({ menuItem }) {
  const { dispatch } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedVariant = menuItem.item_variant.find(
    (variant) => variant.selected
  );

  async function AddToCartHandler() {
    if (selectedVariant.quantity > 0 && selectedVariant.quantity <= 5) {
      if (currentUser.token) {
        menuItem.item_variant = menuItem.item_variant.map((variant) =>
          variant._id === selectedVariant._id
            ? { ...variant, carted: true, quantity: selectedVariant.quantity }
            : { ...variant }
        );
        dispatch({
          type: ActionTypes.ChangeItem,
          payload: {
            menuItem: menuItem,
          },
        });
        const response = await addToCartRequest(menuItem, currentUser.token);
        if (response?.status === 201) {
          dispatch({
            type: ActionTypes.SetCartList,
            payload: {
              cart: response.data.cart,
            },
          });
        }
      } else {
        navigate("/user/login", { state: { from: location } });
      }
    }
  }

  return (
    <div className="MenuItemRightDetailContainer">
      <div className="MenuItemPathContainer">
        Home / subCategory / Menu Item
      </div>
      <div className="MenuItemDetailsName">
        {menuItem.name} - {selectedVariant.unit}
      </div>
      <div className="MenuItemSelectedPrice">
        <div>RS. {selectedVariant.price}</div>
        <div className="MenuItemNoteForTax">
          <em>(Inclusive of all taxes)</em>
        </div>
      </div>
      <div className="MenuItemSelectedUnit">{selectedVariant.unit}</div>
      {selectedVariant.quantity > 0 && selectedVariant.carted ? (
        <div className="AddedToCartQuantitySelectorContainer">
          <div
            className="IncreamentQuantityButton"
            onClick={async () => {
              menuItem.item_variant = menuItem.item_variant.map((variant) =>
                variant.selected && variant.quantity < 5
                  ? { ...variant, quantity: variant.quantity + 1 }
                  : variant
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
          </div>
          <div className="MenuItemQuantity">{selectedVariant.quantity}</div>
          <div
            className="DecreamentQuantityButton"
            onClick={async () => {
              (menuItem.item_variant = menuItem.item_variant.map((variant) =>
                variant.selected && variant.quantity > 0
                  ? {
                      ...variant,
                      quantity: variant.quantity - 1,
                      ...(variant.quantity - 1 === 0 ? { carted: false } : {}),
                    }
                  : variant
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
              }
            }}
          >
            -
          </div>
        </div>
      ) : (
        <div className="AddToCartAndWishListContainer">
          <div className="MenuItemQuantitySelection">
            <input
              type="number"
              min={1}
              max={5}
              value={selectedVariant.quantity}
              onChange={(e) => {
                if (
                  Math.abs(e.target.value) > 0 &&
                  Math.abs(e.target.value) < 5
                ) {
                  dispatch({
                    type: ActionTypes.ChangeItem,
                    payload: {
                      menuItem: {
                        ...menuItem,
                        item_variant: menuItem.item_variant.map((variant) =>
                          variant.selected
                            ? { ...variant, quantity: +e.target.value }
                            : variant
                        ),
                      },
                    },
                  });
                }
              }}
            />
          </div>
          <div
            className="MenuItemDetailsAddToCartButton"
            onClick={AddToCartHandler}
          >
            Add To Basket
          </div>
          <div className="MenuItemDetailsAddToWishListButton">Save</div>
        </div>
      )}

      <div className="MenuDeliveryTimeContainer">
        <div className="DeliveryIcon">
          <BsTruck />
        </div>
        <div className="DeliveryTimeInDay">
          {menuItem.delivery_time_in_mins} MINS
        </div>
      </div>
      <div className="MenuItemVariantSelectionContainer">
        {menuItem.item_variant.length > 1 && (
          <div className="VariantSelectionHeader">Pack Sizes</div>
        )}
        <div className="VariantListContainer">
          {menuItem.item_variant.length > 1 &&
            menuItem.item_variant.map((variant) => {
              return (
                <MenuItemVariantList
                  key={variant._id}
                  variant={variant}
                  menuItem={menuItem}
                  selectedVariant={selectedVariant}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
