import { useContext } from "react";
import { removeMenuItemFromCartRequest } from "../../../service/Service";
import { CartMenuItemVariant } from "./CartMenuItemVariant";
import { RxCrossCircled } from "react-icons/rx";
import { AuthContext } from "../../../context/AuthContext";
import { ActionTypes } from "../../../reducer/types";
import { DataContext } from "../../../context/DataContext";

export function CartMenuItem({ menuItem }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch, state } = useContext(DataContext);

  async function removeItemFromCartHandler(id) {
    const response = await removeMenuItemFromCartRequest(id, currentUser.token);
    if (response.status === 200) {
      const updatedMenuItems = state.menuItems.map((menuItemInState) =>
        menuItemInState._id === id
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
    }
  }
  return (
    <li>
      <div className="CartMenuItemContainer">
        <div className="CartMenuItemImage">
          <img src={menuItem.image} alt={menuItem.name} />
        </div>
        <div className="CartMenuItemDetails">
          <div
            className="RemoveItemFromCartIconContainer"
            onClick={() => removeItemFromCartHandler(menuItem._id)}
          >
            <RxCrossCircled />
          </div>
          <div className="cartMenuItemName">{menuItem.name}</div>
          <div className="CartMenuItemVariantContainer">
            {menuItem.item_variant.map((variant) => {
              if (variant.carted) {
                return (
                  <CartMenuItemVariant
                    key={variant._id}
                    variant={variant}
                    menuItem={menuItem}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </li>
  );
}
