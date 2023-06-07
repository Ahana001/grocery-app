import "./CheckoutPage.css";

import { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { DataContext } from "../../context/DataContext";
import { AddressChild } from "../UserProfilePage/Component/AddressPage/AddressChild";
import { DisplayContext } from "../../context/DisplayContext";
import { AuthContext } from "../../context/AuthContext";
import { AddOrderToOrderLsit, clearCartRequest } from "../../service/Service";
import { ActionTypes } from "../../reducer/types";
import { useNavigate } from "react-router-dom";

export function CheckoutPage() {
  const { state, dispatch } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const { showToast } = useContext(DisplayContext);

  const { name, email } = currentUser;
  const cart = state.cartlist;
  const navigate = useNavigate();

  const [responseSummary, setResponseSummary] = useState({
    msg: false,
    id: null,
  });
  const [isOpenForm, setIsOpenForm] = useState(false);

  async function updateOrderList() {
    showToast("success", "order placed successfully");
    const response = await AddOrderToOrderLsit(
      {
        id: responseSummary.id,
        cart: responseSummary.cart,
        address: state.selectedAddress,
        amount: getCartTotal(),
      },
      currentUser.token
    );
    if (response.status === 201) {
      dispatch({
        type: ActionTypes.SetOrder,
        payload: {
          orderlist: response.data.orderlist,
        },
      });
    }
    navigate("/");
  }

  useEffect(() => {
    if (responseSummary.msg) {
      updateOrderList();
    }
  }, [responseSummary]);

  async function clearCart() {
    const response = await clearCartRequest(currentUser.token);
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.SetCartList,
        payload: {
          cart: response.data.cart,
        },
      });
      const updatedMenuItems = state.menuItems.map((menuItem) => ({
        ...menuItem,
        item_variant: menuItem.item_variant.map((variant) =>
          variant.default
            ? {
                ...variant,
                carted: false,
                selected: true,
                quantity: 0,
              }
            : {
                ...variant,
                carted: false,
                selected: false,
                quantity: 0,
              }
        ),
      }));
      dispatch({
        type: ActionTypes.SetMenuItems,
        payload: {
          menuItems: updatedMenuItems,
        },
      });
    }
  }

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

  function razorpayHandler() {
    if (!state.selectedAddress?._id) {
      showToast("warning", "", "You have not selected any address");
    } else {
      displayRazorpay();
    }
  }

  async function loadScript(url) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      showToast("Warnig", "Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_SR2urKhQGjFxHb",
      amount: getCartTotal().grandTotal * 100,
      currency: "INR",
      name: "Grossy",
      description: "Thank you for shopping with us",
      image:
        "https://res.cloudinary.com/dcu6sympq/image/upload/v1686072612/grocery/faviconIcon_mih4s3.png",
      handler: function (response) {
        setResponseSummary({
          msg: true,
          cart: state.cartlist,
          id: response.razorpay_payment_id,
        });
        clearCart();
      },
      prefill: {
        name: name,
        email: email,
        contact: "9876543210",
      },
      theme: {
        color: "#6ec06e",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
      {cart.length > 0 ? (
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
            <div className="PlaceOrderButton" onClick={razorpayHandler}>
              PLACE ORDER
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}
