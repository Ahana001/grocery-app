import { useContext } from "react";
import "./MenuItemVariantList.css";
import { TiTick } from "react-icons/ti";
import { DataContext } from "../../../../context/DataContext";
import { ActionTypes } from "../../../../reducer/types";

export function MenuItemVariantList({ menuItem, variant, selectedVariant }) {
  const { _id, unit, price } = variant;
  const { dispatch } = useContext(DataContext);
  return (
    <div
      className="MenuItemVariantList"
      onClick={() => {
        dispatch({
          type: ActionTypes.ChangeItem,
          payload: {
            menuItem: {
              ...menuItem,
              item_variant: menuItem.item_variant.map((variant) =>
                variant._id === _id
                  ? { ...variant, selected: true }
                  : { ...variant, selected: false }
              ),
            },
          },
        });
      }}
      style={{
        backgroundColor: selectedVariant._id === _id ? "#86cb86" : "white",
      }}
    >
      <div className="MenuItemUnit">{unit}</div>
      <div className="MenuItemPrice">Rs. {price}</div>
      <div
        className="RightTickIcon"
        style={{
          backgroundColor:
            selectedVariant._id === _id ? "rgb(12, 131, 31)" : "white",
          color: selectedVariant._id === _id ? " white" : "black",
        }}
      >
        <TiTick />
      </div>
    </div>
  );
}
