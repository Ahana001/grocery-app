import "./MenuItemListCard.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { ActionTypes } from "../../reducer/types";
import { AuthContext } from "../../context/AuthContext";
import {
  addToCartRequest,
  changeCartQuantityRequest,
} from "../../service/Service";

export function MenuItemListCard({ menuItem: { _id } }) {
  const { dispatch, state } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);

  const menuItem = state.menuItems.find(
    (stateMenuItem) => stateMenuItem._id === _id
  );
  const filterDefaultSelectedMenuItemVariant = menuItem.item_variant?.find(
    (variant) => variant.selected
  );
  const defaultVariant = menuItem.item_variant.find(
    (variant) => variant.default
  );

  async function AddToCartHandler() {
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
  return (
    <div
      className="MenuItemListViewListContainer"
      style={{
        pointerEvents: filterDefaultSelectedMenuItemVariant.in_stock
          ? ""
          : "none",
      }}
    >
      <div className="PaginationRemoveMenuItemIconContainer">
        <MdDelete />
      </div>
      <div className="PaginationMenuItemImage">
        <img src={menuItem.image} alt={menuItem.name} />
      </div>
      <div className="PaginationMenuItemDetails">
        <div className="PaginationMenuItemName">{menuItem.name}</div>
        <div className="PaginationMenuItemVariantContainer">
          {menuItem.item_variant.length > 1 ? (
            <>
              <select
                className="PaginationMenuItemVarinats"
                onChange={getSelectedVariant}
                defaultValue={filterDefaultSelectedMenuItemVariant._id}
              >
                {menuItem.item_variant.map(({ unit, price, _id, in_stock }) => {
                  return (
                    <option key={_id} value={_id} disabled={!in_stock}>
                      {unit} - Rs. {price}
                    </option>
                  );
                })}
              </select>
            </>
          ) : (
            <div>{menuItem.item_variant[0].unit}</div>
          )}
          <div>Rs. {filterDefaultSelectedMenuItemVariant.price}</div>
        </div>
        <div className="PaginationMenuItemAddToCartButtonContainer">
          {filterDefaultSelectedMenuItemVariant.carted ? (
            <Link className="PaginationMenuItemGoToCartButton" to="/user/cart">
              Go To Cart
            </Link>
          ) : defaultVariant.in_stock ? (
            <div
              className="PaginationMenuItemAddToCartButton"
              onClick={AddToCartHandler}
            >
              Add
            </div>
          ) : (
            <div className="PaginationMenuItemOutOfStock">Out Of Stock</div>
          )}
        </div>
      </div>
    </div>
  );
}
