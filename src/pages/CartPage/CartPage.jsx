import "./CartPage.css";

import { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { DataContext } from "../../context/DataContext";
import { CartMenuItem } from "./Component/CartMenuItem";
import { Helmet } from "react-helmet";

export function CartPage() {
  const { state } = useContext(DataContext);

  const location = useLocation();
  const navigate = useNavigate();

  const cart = state.cartlist;

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
        <Helmet>
          <title>Cart</title>
          <meta
            name="description"
            content="Shop on the go and get anything delivered in minutes. Buy everything
      from groceries to fresh fruits & vegetable"
          />
          <meta name="author" content="Ankita" />
          <meta name="keyword" content=" grocery app" />
        </Helmet>
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
              navigate(
                location?.state?.from?.pathname?.includes("/user/account")
                  ? "/"
                  : location?.state?.from.pathname || "/",
                { replace: true }
              )
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
      <Helmet>
        <title>Cart</title>
        <meta
          name="description"
          content="Shop on the go and get anything delivered in minutes. Buy everything
      from groceries to fresh fruits & vegetable"
        />
        <meta name="author" content="Ankita" />
        <meta name="keyword" content=" grocery app" />
      </Helmet>
      <div className="CartPageContainer">
        <div className="LeftCartItemListContainer">
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
            <div className="BillHeader">Cart Summery Details</div>
            <div className="HorizontaLine"></div>
            <ul className="CartBillMenuItems">
              {cart.map((cartMenuItem) => {
                return (
                  <li className="CartBillListItem" key={cartMenuItem._id}>
                    <div className="CartBillMenuItemName">
                      {cartMenuItem.name}
                    </div>
                    <ul className="CartBillVariantList">
                      {cartMenuItem.item_variant.map((cartItemVariant) => {
                        return (
                          cartItemVariant.carted && (
                            <li
                              className="CartMenuItemBillVariantDetails"
                              key={cartItemVariant._id}
                            >
                              <div className="CartMenuItemBillVariant">
                                <em>{cartItemVariant.unit}</em> x
                                {cartItemVariant.quantity}
                              </div>
                              <div className="CartBillMenuItemPrice">
                                Rs.
                                {parseFloat(
                                  cartItemVariant.price *
                                    cartItemVariant.quantity
                                ).toFixed(2)}
                              </div>
                            </li>
                          )
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <div className="HorizontaLine"></div>
            <div className="GrandTotalContainer">
              <div className="GrandTotalHeader">Grand total</div>
              <div className="GrandTotal">
                Rs. {parseFloat(getCartTotal().grandTotal).toFixed(2)}
              </div>
            </div>
          </div>
          <Link to="/user/checkout" className="CheckOutButton">
            CHECK OUT
          </Link>
        </div>
      </div>
    </>
  );
}
