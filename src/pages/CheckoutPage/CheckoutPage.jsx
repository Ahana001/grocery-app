import "./CheckoutPage.css";

import { useContext, useState } from "react";
import { Helmet } from "react-helmet";

import { DataContext } from "../../context/DataContext";
import { AddressChild } from "../UserProfilePage/Component/AddressPage/AddressChild";
import { DisplayContext } from "../../context/DisplayContext";

export function CheckoutPage() {
  const { state } = useContext(DataContext);
  const { showToast } = useContext(DisplayContext);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const cart = state.cartlist;

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
      showToast("warning", "", "You have not selected any address");
    }
  }
  return (
    <>
      <Helmet>
        <title>Grossy</title>
        <meta
          name="description"
          content="Shop on the go and get anything delivered in minutes. Buy everything
      from groceries to fresh fruits & vegetable"
        />
        <meta name="author" content="Ankita" />
        <meta name="keyword" content=" grocery app" />
      </Helmet>

      <div className="CheckoutPageContainer">
        <div className="LeftAddressListContainer">
          <div className="CheckoutAddressListContainer">
            <AddressChild
              isOpenForm={isOpenForm}
              setIsOpenForm={setIsOpenForm}
            />
          </div>
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
    </>
  );
}
