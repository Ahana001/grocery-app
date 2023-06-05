import "./MenuItemListCard.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { MdDelete } from "react-icons/md";

import { DataContext } from "../../context/DataContext";

export function MenuItemListCard({ menuItem: { _id } }) {
  const {
    dispatch,
    state,
    AddToCartHandler,
    removeItemFromWishlist,
    getSelectedVariant,
  } = useContext(DataContext);

  const menuItem = state.menuItems.find(
    (stateMenuItem) => stateMenuItem._id === _id
  );
  const filterDefaultSelectedMenuItemVariant = menuItem.item_variant?.find(
    (variant) => variant.selected
  );
  const defaultVariant = menuItem.item_variant.find(
    (variant) => variant.default
  );

  return (
    <div
      className="MenuItemListViewListContainer"
      style={{
        pointerEvents: filterDefaultSelectedMenuItemVariant.in_stock
          ? ""
          : "none",
      }}
    >
      <div
        className="PaginationRemoveMenuItemIconContainer"
        onClick={() => removeItemFromWishlist(menuItem)}
      >
        <MdDelete />
      </div>
      <Link
        className="PaginationMenuItemImage"
        to={`/menu_item/${menuItem._id}`}
      >
        <img src={menuItem.image} alt={menuItem.name} />
      </Link>
      <div className="PaginationMenuItemDetails">
        <div className="PaginationMenuItemName">{menuItem.name}</div>
        <div className="PaginationVariantPriceBtn">
          <div className="PaginationMenuItemVariantContainer">
            {menuItem.item_variant.length > 1 ? (
              <>
                <select
                  className="PaginationMenuItemVarinats"
                  onChange={(e) => getSelectedVariant(e, menuItem, dispatch)}
                  defaultValue={filterDefaultSelectedMenuItemVariant._id}
                >
                  {menuItem.item_variant.map(
                    ({ unit, price, _id, in_stock }) => {
                      return (
                        <option key={_id} value={_id} disabled={!in_stock}>
                          {unit} - Rs. {price}
                        </option>
                      );
                    }
                  )}
                </select>
              </>
            ) : (
              <div>{menuItem.item_variant[0].unit}</div>
            )}
            <div className="PaginationPriceContainer">
              Rs. {filterDefaultSelectedMenuItemVariant.price}
            </div>
          </div>
          <div className="PaginationMenuItemAddToCartButtonContainer">
            {filterDefaultSelectedMenuItemVariant.carted ? (
              <Link
                className="PaginationMenuItemGoToCartButton"
                to="/user/cart"
              >
                Go To Cart
              </Link>
            ) : defaultVariant.in_stock ? (
              <div
                className="PaginationMenuItemAddToCartButton"
                onClick={() => AddToCartHandler(menuItem)}
              >
                Add
              </div>
            ) : (
              <div className="PaginationMenuItemOutOfStock">Out Of Stock</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
