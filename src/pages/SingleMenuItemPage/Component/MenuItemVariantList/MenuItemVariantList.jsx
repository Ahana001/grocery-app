import "./MenuItemVariantList.css";
import { TiTick } from "react-icons/ti";

export function MenuItemVariantList({ variant: { unit, price } }) {
  return (
    <div className="MenuItemVariantList">
      <div className="MenuItemUnit">{unit}</div>
      <div className="MenuItemPrice">Rs. {price}</div>
      <div className="RightTickIcon">
        <TiTick />
      </div>
    </div>
  );
}
