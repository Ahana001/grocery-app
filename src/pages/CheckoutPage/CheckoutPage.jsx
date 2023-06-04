import "./CheckoutPage.css";

import { useContext, useState } from "react";

import { DataContext } from "../../context/DataContext";
import { AddressChild } from "../UserProfilePage/Component/AddressPage/AddressChild";
import { DisplayContext } from "../../context/DisplayContext";

export function CheckoutPage() {
  const { state } = useContext(DataContext);
  const { showToast } = useContext(DisplayContext);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const cart = state.cartlist;
  const addressListLength = state.addresslist.length;

  function getCartTotal() {
    const total = cart.reduce((accumulator, menuItem) => {
      menuItem.item_variant.map((variant) => {
        if (variant.carted) {
          accumulator = accumulator + variant.price * variant.quantity;
        }
      });
      return accumulator;
    }, 0);
    const grandTotal = total - 0.0;
    return { grandTotal, total };
  }
  function placeOrder() {
    if (!state.selectedAddress?._id) {
      showToast("warning", "", "You have no saved address");
    }
  }
  return (
    <div className="CheckoutPageContainer">
      <div
        className="LeftAddressListContainer"
        style={{ marginTop: addressListLength === 0 ? "-10rem" : "0rem" }}
      >
        <AddressChild isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
      </div>
      <div className="RightCheckoutBillContainer">
        <div className="CheckoutBillSummeryContainer">
          <div className="CheckoutBillHeader">Bill Details</div>
          <div className="HorizontaLine"></div>
          <ul>
            <li>
              <div className="CheckoutBillListHeader">MRP</div>
              <div>Rs. {parseFloat(getCartTotal().total).toFixed(2)}</div>
            </li>
            <li>
              <div className="CheckoutBillListHeader">Delivery charge</div>
              <div className="Delivery">
                <span>Rs. 15</span> FREE
              </div>
            </li>
          </ul>
          <div className="HorizontaLine"></div>
          <div className="CheckoutGrandTotalContainer">
            <div className="CheckoutGrandTotalHeader">Grand total</div>
            <div className="CheckoutGrandTotal">
              Rs. {parseFloat(getCartTotal().grandTotal).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="PlaceOrderButton" onClick={placeOrder}>
          PLACE ORDER
        </div>
      </div>
    </div>
  );
}
