import { useContext } from "react";

import { RxCrossCircled } from "react-icons/rx";

import { CartMenuItemVariant } from "./CartMenuItemVariant";
import { DataContext } from "../../../context/DataContext";

export function CartMenuItem({ menuItem }) {
  const { removeItemFromCartHandler } = useContext(DataContext);

  return (
    <li>
      <div className="CartMenuItemContainer">
        <div className="CartMenuItemImage">
          <img src={menuItem.image} alt={menuItem.name} />
        </div>
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
