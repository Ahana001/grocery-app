import { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { BsTruck } from "react-icons/bs";

import { ActionTypes } from "../../../../../reducer/types";
import { MenuItemVariantList } from "../../MenuItemVariantList/MenuItemVariantList";
import { AuthContext } from "../../../../../context/AuthContext";
import {
  addToCartRequest,
  changeCartQuantityRequest,
  removeMenuItemFromCartRequest,
} from "../../../../../service/Service";
import { DataContext } from "../../../../../context/DataContext";
import { DisplayContext } from "../../../../../context/DisplayContext";

export function MenuItemDetailsContainer({ menuItem }) {
  const { dispatch, state, AddToWishListHandler } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const { showToast } = useContext(DisplayContext);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedVariant = menuItem.item_variant.find(
    (variant) => variant.selected
  );
  const defaultVarint = menuItem.item_variant.find(
    (variant) => variant.default
  );

  let findMainCategory = {
    _id: "",
    name: "",
  };
  const currentSubCategoryId = menuItem.sub_category_id;
  const findSubCategory = state.subCategories.find(
    (subCategory) => subCategory._id === currentSubCategoryId
  );
  if (findSubCategory) {
    findMainCategory = state.mainCategories.find(
      (mainCategory) => mainCategory._id === findSubCategory.main_category_id
    );
  }

  async function AddToCartHandler() {
    if (selectedVariant.quantity > 0 && selectedVariant.quantity <= 5) {
      if (currentUser.token) {
        const isMenuItemIsCarted = menuItem.item_variant.find(
          (variant) => variant.carted
        );
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
        let cartResponse;
        if (isMenuItemIsCarted) {
          cartResponse = await changeCartQuantityRequest(
            menuItem,
            currentUser.token
          );
        } else {
          cartResponse = await addToCartRequest(menuItem, currentUser.token);
          showToast("info", menuItem.name, "successfully added in wishlist");
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
  }

  return (
    <div className="MenuItemRightDetailContainer">
      <div className="MenuItemPathContainer">
        <Link to="/" className="PathLink">
          Home /{" "}
        </Link>
        <Link
          to={`/main_category/${findMainCategory._id.slice(3)}`}
          className="PathLink"
        >
          {findMainCategory.name} /
        </Link>
        <Link className="PathLink">{menuItem.name}</Link>
      </div>
      <div className="MenuItemDetailsName">
        {menuItem.name} - {selectedVariant.unit}
      </div>
      <div className="MenuItemSelectedUnit">{selectedVariant.unit}</div>
      {defaultVarint.in_stock ? (
        <>
          <div className="MenuItemSelectedPrice">
            <div>RS. {selectedVariant.price}</div>
            <div className="MenuItemNoteForTax">
              <em>(Inclusive of all taxes)</em>
            </div>
          </div>
          {selectedVariant.quantity > 0 && selectedVariant.carted ? (
            <div className="AddedToCartQuantitySelectorContainer">
              <div
                className="DecreamentQuantityButton"
                onClick={async () => {
                  (menuItem.item_variant = menuItem.item_variant.map(
                    (variant) =>
                      variant.selected && variant.quantity > 0
                        ? {
                            ...variant,
                            quantity: variant.quantity - 1,
                            ...(variant.quantity - 1 === 0
                              ? { carted: false }
                              : {}),
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
              <div className="MenuItemQuantity">{selectedVariant.quantity}</div>
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
              {menuItem.wished ? (
                <div className="MenuItemDetailsAddToWishListButton">Saved</div>
              ) : (
                <div
                  className="MenuItemDetailsAddToWishListButton"
                  onClick={() => AddToWishListHandler(menuItem)}
                >
                  Save
                </div>
              )}
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
        </>
      ) : (
        <div className="SingleMenuItemOutOfStock">out of stock</div>
      )}
    </div>
  );
}
