import { useContext } from "react";
import { Link } from "react-router-dom";

import { RxCrossCircled } from "react-icons/rx";

import { CartMenuItemVariant } from "./CartMenuItemVariant";
import { DataContext } from "../../../context/DataContext";

export function CartMenuItem({ menuItem }) {
  const { removeItemFromCartHandler } = useContext(DataContext);

  return (
    <li>
      <div className="CartMenuItemContainer">
        <Link className="CartMenuItemImage" to={`/menu_item/${menuItem._id}`}>
          <img src={menuItem.image} alt={menuItem.name} />
        </Link>
        <div className="CartMenuItemDetails">
          <div
            className="RemoveItemFromCartIconContainer"
            onClick={() => removeItemFromCartHandler(menuItem)}
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
