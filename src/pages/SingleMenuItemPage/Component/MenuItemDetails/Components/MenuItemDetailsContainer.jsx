import { BsTruck } from "react-icons/bs";

import { MenuItemVariantList } from "../../MenuItemVariantList/MenuItemVariantList";

export function MenuItemDetailsContainer({ menuItem, selectedVariant }) {
  return (
    <div className="MenuItemRightDetailContainer">
      <div className="MenuItemPathContainer">
        Home / subCategory / Menu Item
      </div>
      <div className="MenuItemDetailsName">
        {menuItem.name} - {selectedVariant.unit}
      </div>
      <div className="MenuItemSelectedPrice">
        <div>RS. {selectedVariant.price}</div>
        <div className="MenuItemNoteForTax">
          <em>(Inclusive of all taxes)</em>
        </div>
      </div>
      <div className="MenuItemSelectedUnit">{selectedVariant.unit}</div>
      <div className="AddToCartAndWishListContainer">
        <div className="MenuItemQuantitySelection">
          <input />
        </div>
        <div className="MenuItemDetailsAddToCartButton">Add To Basket</div>
        <div className="MenuItemDetailsAddToWishListButton">Save</div>
      </div>
      <div className="AddedToCartQuantitySelectorContainer">
        <div className="IncreamentQuantityButton">+</div>
        <div className="MenuItemQuantity"></div>
        <div className="DecreamentQuantityButton">-</div>
      </div>
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
                <MenuItemVariantList key={variant._id} variant={variant} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
