import "./CartPage.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { CartMenuItem } from "./Component/CartMenuItem";
import { Navbar } from "../../component/Navbar/Navbar";

export function CartPage() {
  const { state } = useContext(DataContext);
  const cart = state.cartlist;

  const cartLength = cart.length;

  if (cartLength === 0) {
    return <h2>Empty Cart</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="CartPageContainer">
        <div className="LeftCartItemListContainer">
          <div className="FinalDeliveryTime">
            <div className="DeliveryTimeIcon"></div>
            <div className="DeliveryTimeText">
              <div className="DeliveryTimeTextHeader">
                Free delivery in 22 minutes
              </div>
              <div className="DeliveryTimeTextSubTitle">{cartLength} items</div>
            </div>
          </div>
          <div className="CartItemList">
            {cart.map((menuItem) => {
              return <CartMenuItem key={menuItem._id} menuItem={menuItem} />;
            })}
          </div>
        </div>
        <div className="RightCartBillContainer"></div>
      </div>
    </>
  );
}
