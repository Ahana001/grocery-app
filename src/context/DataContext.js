import {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import {
  addToCartRequest,
  addToWishlistRequest,
  changeCartQuantityRequest,
  getAllMainCategoriesRequest,
  getAllMenuItemRequest,
  getAllSubCategoriesRequest,
  getCartRequest,
  getWishlistRequest,
  removeFromWishlistRequest,
  removeMenuItemFromCartRequest,
} from "../service/Service";
import { AuthContext } from "./AuthContext";
import { ActionTypes } from "../reducer/types";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { DisplayContext } from "./DisplayContext";

export const DataContext = createContext();
export function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function DataContextProvider({ children }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [loader, setLoader] = useState(true);
  const { showToast } = useContext(DisplayContext);

  useEffect(() => {
    FetchInitialData();
  }, [currentUser.token]);

  async function FetchInitialData() {
    try {
      if (!currentUser.token) {
        const menuItemResponse = await getAllMenuItemRequest();
        if (menuItemResponse.status === 200) {
          dispatch({
            type: ActionTypes.InitialFetch,
            payload: { menuItems: menuItemResponse.data.menuItems },
          });
        }
      }
      const mainCategoriesResponse = await getAllMainCategoriesRequest();
      if (mainCategoriesResponse.status === 200) {
        dispatch({
          type: ActionTypes.InitialFetch,
          payload: {
            mainCategories: mainCategoriesResponse.data.mainCategories,
          },
        });
      }
      const subCategoriesResponse = await getAllSubCategoriesRequest();
      if (subCategoriesResponse.status === 200) {
        dispatch({
          type: ActionTypes.InitialFetch,
          payload: {
            subCategories: subCategoriesResponse.data.subCategories,
          },
        });
      }
      if (currentUser.token) {
        const getCart = await getCartRequest(currentUser.token);
        if (getCart.status === 200) {
          dispatch({
            type: ActionTypes.SetCartList,
            payload: {
              cart: getCart.data.cart,
            },
          });
        }
        const getWishlist = await getWishlistRequest(currentUser.token);
        if (getWishlist.status === 200) {
          dispatch({
            type: ActionTypes.SetWishlist,
            payload: {
              wishlist: getWishlist.data.wishlist,
            },
          });
        }
        const menuItemResponse = await getAllMenuItemRequest();
        if (menuItemResponse.status === 200) {
          const updatedMenuItems = menuItemResponse.data.menuItems.map(
            (menuItem) => {
              const findMenuItemInCart = getCart.data.cart.find(
                (cartMenuItem) => cartMenuItem._id === menuItem._id
              );
              const findMenuItemInWishlist = getWishlist.data.wishlist.find(
                (wishlistMenuItem) => wishlistMenuItem._id === menuItem._id
              );
              if (findMenuItemInCart && findMenuItemInWishlist) {
                return { ...findMenuItemInCart, wished: true };
              } else if (findMenuItemInCart && !findMenuItemInWishlist) {
                return { ...findMenuItemInCart, wished: false };
              } else {
                menuItem.item_variant = menuItem.item_variant.map((variant) =>
                  variant.default
                    ? {
                        ...variant,
                        carted: false,
                        selected: true,
                        quantity: 0,
                      }
                    : {
                        ...variant,
                        carted: false,
                        selected: false,
                        quantity: 0,
                      }
                );
                return { ...menuItem, wished: false };
              }
            }
          );
          dispatch({
            type: ActionTypes.SetMenuItems,
            payload: { menuItems: updatedMenuItems },
          });
        }
      }
      setLoader(() => false);
    } catch (error) {
      console.error(error);
    }
  }

  async function AddToCartHandler(menuItem) {
    const filterDefaultSelectedMenuItemVariant = menuItem.item_variant?.find(
      (variant) => variant.selected
    );
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
        showToast("info", menuItem.name, " successfully added in cart");
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
      navigate("/user/login");
    }
  }

  async function removeItemFromCartHandler(menuItem) {
    const response = await removeMenuItemFromCartRequest(
      menuItem._id,
      currentUser.token
    );
    if (response.status === 200) {
      const updatedMenuItems = state.menuItems.map((menuItemInState) =>
        menuItemInState._id === menuItem._id
          ? {
              ...menuItemInState,
              item_variant: menuItemInState.item_variant.map((varinat) => ({
                ...varinat,
                carted: false,
                quantity: 0,
              })),
            }
          : menuItemInState
      );
      dispatch({
        type: ActionTypes.SetCartList,
        payload: {
          cart: response.data.cart,
        },
      });
      dispatch({
        type: ActionTypes.SetMenuItems,
        payload: {
          menuItems: updatedMenuItems,
        },
      });
      showToast("info", menuItem.name, "successfully removed from cart");
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
          showToast(
            "info",
            menuItem.name,
            " successfully removed from wishlist"
          );
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
          showToast("info", menuItem.name, "successfully added in wishlist");
        }
      }
    } else {
      navigate("/user/login");
    }
  }

  async function removeItemFromWishlist(menuItem) {
    const response = await removeFromWishlistRequest(
      menuItem._id,
      currentUser.token
    );
    if (response.status === 200) {
      const updatedMenuItems = state.menuItems.map((menuItemInState) =>
        menuItemInState._id === menuItem._id
          ? {
              ...menuItemInState,
              wished: false,
            }
          : menuItemInState
      );
      dispatch({
        type: ActionTypes.SetWishlist,
        payload: {
          wishlist: response.data.wishlist,
        },
      });
      dispatch({
        type: ActionTypes.SetMenuItems,
        payload: {
          menuItems: updatedMenuItems,
        },
      });
      showToast("info", menuItem.name, "successfully removed from wishlist");
    }
  }

  function getSelectedVariant(e, menuItem) {
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

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        loader,
        setLoader,
        AddToCartHandler,
        removeItemFromCartHandler,
        AddToWishListHandler,
        removeItemFromWishlist,
        getSelectedVariant,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
