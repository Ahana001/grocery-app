import { CartMenuItemVariant } from "./CartMenuItemVariant";

export function CartMenuItem({ menuItem }) {
  return (
    <div className="CartMenuItemContainer">
      <div className="CartMenuItemImage"></div>
      <div className="CartMenuItemDetails">
        <div className="cartMenuItemName">{menuItem.name}</div>
        <div className="CartMenuItemVariantContainer">
          {menuItem.item_variant.map((variant) => {
            if (variant.carted) {
              return (
                <CartMenuItemVariant key={variant._id} variant={variant} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
