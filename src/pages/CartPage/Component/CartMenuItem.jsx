import { CartMenuItemVariant } from "./CartMenuItemVariant";

export function CartMenuItem({ menuItem }) {
  return (
    <li>
      <div className="CartMenuItemContainer">
        <div className="CartMenuItemImage">
          <img src={menuItem.image} alt={menuItem.name} />
        </div>
        <div className="CartMenuItemDetails">
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
