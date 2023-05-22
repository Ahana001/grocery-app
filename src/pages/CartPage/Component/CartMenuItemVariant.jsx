import { QuantityButton } from "../../../component/QuantityButton/QuantityButton";

export function CartMenuItemVariant({ menuItem, variant }) {
  return (
    <div className="CartMenuItemVariant">
      <div className="VariantQuantityAndUnitContainer">
        <div className="VariantUnit">{variant.unit}</div>
        <div className="VariantPrice">Rs. {variant.price}</div>
      </div>
      <QuantityButton menuItem={menuItem} variant={variant} />
    </div>
  );
}
