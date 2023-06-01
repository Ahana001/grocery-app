import { useEffect } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { createContext, useReducer, useState, useContext } from "react";
import {
  getAllMainCategoriesRequest,
  getAllMenuItemRequest,
  getAllSubCategoriesRequest,
  getCartRequest,
} from "../service/Service";
import { ActionTypes } from "../reducer/types";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();
export function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function DataContextProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [loader, setLoader] = useState(true);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [FilterPriceRatingDisplay, setFilterPriceRatingDisplay] =
    useState(false);
  useEffect(() => {
    if (screenSize.width <= 798) {
      setFilterPriceRatingDisplay(false);
    } else {
      setFilterPriceRatingDisplay(true);
    }
  }, [screenSize]);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

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
        const menuItemResponse = await getAllMenuItemRequest();
        if (menuItemResponse.status === 200) {
          const updatedMenuItems = menuItemResponse.data.menuItems.map(
            (menuItem) => {
              const findMenuItemInCart = getCart.data.cart.find(
                (cartMenuItem) => cartMenuItem._id === menuItem._id
              );
              if (findMenuItemInCart) {
                return findMenuItemInCart;
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
                return menuItem;
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
      console.log(error);
    }
  }

  useEffect(() => {
    FetchInitialData();
  }, [currentUser.token]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        loader,
        setLoader,
        screenSize,
        FilterPriceRatingDisplay,
        setFilterPriceRatingDisplay,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
