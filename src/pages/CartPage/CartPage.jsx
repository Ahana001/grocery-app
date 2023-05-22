import "./CartPage.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { CartMenuItem } from "./Component/CartMenuItem";
import { Navbar } from "../../component/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function CartPage() {
  const { state } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const cart = state.cartlist;
  useEffect(() => {
    if (!currentUser.token) {
      navigate("/");
    }
  }, [currentUser.token]);

  const cartLength = cart.length;
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

  if (cartLength === 0) {
    return (
      <>
        <Navbar />
        <div className="EmptyCartContainer">
          <div className="EmptyCartImageContainer">
            <img src="../images/empty_cart.webp" alt="empty_cart" />
          </div>
          <div className="EmptyCartDarkText">
            You don&#39;t have any items in your cart
          </div>
          <div className="EmptyCartLightText">
            Your favourite items are just a click away
          </div>
          <div
            className="EmptyCartShoppingBtn"
            onClick={() =>
              navigate(location?.state?.from.pathname || "/", { replace: true })
            }
          >
            Start Shopping
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="CartPageContainer">
        <div className="LeftCartItemListContainer">
          <div>CONTINUE SHOPPING</div>
          <div className="FinalDeliveryTime">
            <div className="DeliveryTimeIcon">
              <img src="../images/clock.png" alt="clock" />
            </div>
            <div className="DeliveryTimeText">
              <div className="DeliveryTimeTextHeader">
                Free delivery in 22 minutes
              </div>
              <div className="DeliveryTimeTextSubTitle">{cartLength} items</div>
            </div>
          </div>
          <ul className="CartItemList">
            {cart.map((menuItem) => {
              return <CartMenuItem key={menuItem._id} menuItem={menuItem} />;
            })}
          </ul>
          {/* <div>Shipping Addresses</div> */}
        </div>
        <div className="RightCartBillContainer">
          {/* <div className="CouponContainer">
            <div> Have A Coupon ?</div>
            <button>Apply</button>
          </div> */}
          <div className="BillSummeryContainer">
            <div className="BillHeader">Bill Details</div>
            <div className="HorizontaLine"></div>
            <ul>
              <li>
                <div className="BillListHeader">MRP</div>
                <div>Rs. {parseFloat(getCartTotal().total).toFixed(2)}</div>
              </li>
              <li>
                <div className="BillListHeader">Coupon Discount</div>
                <div>Rs. 00.00</div>
              </li>
              <li>
                <div className="BillListHeader">Delivery charge</div>
                <div className="Delivery">
                  <span>Rs. 15</span> FREE
                </div>
              </li>
            </ul>
            <div className="GrandTotalContainer">
              <div className="GrandTotalHeader">Grand total</div>
              <div className="GrandTotal">
                Rs. {parseFloat(getCartTotal().grandTotal).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="CheckOutButton">CHECK OUT</div>
        </div>
      </div>
    </>
  );
}
