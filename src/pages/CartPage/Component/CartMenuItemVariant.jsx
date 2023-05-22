export function CartMenuItemVariant({ variant }) {
  return (
    <div className="CartMenuItemVariant">
      <div className="VariantQuantityAndUnitContainer">
        <div className="VariantUnit">{variant.unit}</div>
        <div className="VariantPrice">{variant.price}</div>
      </div>
      <div className="QuantityContainer">
        <div className="Increament">+</div>
        <div className="Quantity">{variant.quantity}</div>
        <div className="Decrement">-</div>
      </div>
    </div>
  );
}
