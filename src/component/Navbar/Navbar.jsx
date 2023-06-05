import "./Navbar.css";

import { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FaShoppingCart, FaSearch, FaRegUserCircle } from "react-icons/fa";

import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { DisplayContext } from "../../context/DisplayContext";
import { ActionTypes } from "../../reducer/types";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, LogOutHandler } = useContext(AuthContext);
  const { setDropdownVisibility, dropdownVisibility } =
    useContext(DisplayContext);
  const { state, dispatch } = useContext(DataContext);

  const { areaName, city } = state.selectedAddress;
  function userCartOnClickHandler() {
    if (currentUser.token) {
      navigate("/user/cart");
    } else {
      navigate("/user/login");
    }
  }
  function SmallViewUserProfileHandler() {
    if (currentUser.token) {
      navigate("/user/account");
    } else {
      navigate("/user/login");
    }
  }
  function userWishlistOnClickHandler() {
    if (currentUser.token) {
      navigate("/user/wishlist");
    } else {
      navigate("/user/login");
    }
  }

  return (
    <header className="NavContainer">
      <div className="NavLeftContainer">
        <div className="LogoContainer" onClick={() => navigate("/")}>
          <div className="Logo">
            <span>G</span>rocery
          </div>
        </div>
        <div className="VerticleDivider"></div>
      </div>
      <div className="LocationAndSearchContainer">
        <div className="LocationAndProfileContainer">
          <div className="BackArrowAndLocationContainer">
            {location.pathname === "/" ? (
              <></>
            ) : (
              <div className="BackButtonContainer">
                <BiArrowBack onClick={() => navigate(-1)} />
              </div>
            )}
            <div className="LocationContainer">
              <div>Delivery in 19 minutes</div>
              <div className="LocationDetail">
                {state.selectedAddress?._id
                  ? `${areaName}, ${city}, ${state.selectedAddress.state}`
                  : "No Address Selected"}
              </div>
            </div>
          </div>
          <div className="SmallNavRightContainer">
            {location.pathname === "/" ? (
              <FaRegUserCircle onClick={SmallViewUserProfileHandler} />
            ) : (
              <FaSearch />
            )}
          </div>
        </div>
        <div className="SearchContainer">
          <div className="SearchBox">
            <div className="SearchIcon">
              <FaSearch />
            </div>
            <div className="SearchAnimatedContainer">
              <div className="AnimatedSearchText">Search</div>
            </div>
          </div>
        </div>
      </div>
      <div className="NavRightContainer">
        {currentUser.token ? (
          <>
            <div className="UserProfile">
              <div className="UserProfileDropDown">
                <button
                  className="UserProfileDropDownBtn"
                  onClick={() => setDropdownVisibility(true)}
                >
                  Account
                  <div className="UserProfileArrow"></div>
                </button>
              </div>
              <div
                className="UserProfileDropDownContent"
                style={{
                  display: dropdownVisibility ? "block" : "none",
                  top: location.pathname.includes("main_category")
                    ? "5.5rem"
                    : "5rem",
                }}
              >
                <div className="UserProfileName">
                  {currentUser.user.firstName}
                </div>
                <ul className="UserProfileDropDownList">
                  <li
                    onClick={() => {
                      setDropdownVisibility(false);
                      navigate("/user/account/orders");
                    }}
                  >
                    My Orders
                  </li>
                  <li
                    onClick={() => {
                      setDropdownVisibility(false);
                      navigate("/user/account/address");
                    }}
                  >
                    Saved Address
                  </li>
                  <li
                    onClick={() => {
                      LogOutHandler();
                      dispatch({
                        type: ActionTypes.SetCartList,
                        payload: {
                          cart: [],
                        },
                      });
                      setDropdownVisibility(false);
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="UserProfileDropDownShadow"
              style={{ display: dropdownVisibility ? "block" : "none" }}
              onClick={() => setDropdownVisibility(false)}
            ></div>
          </>
        ) : (
          <Link to="/user/login" className="UserProfile">
            Login
          </Link>
        )}
        <div
          className="WishlistIconContainer"
          onClick={userWishlistOnClickHandler}
        >
          {state.wishlist.length > 0 && currentUser.token ? (
            <div className="WishlistItemCountConstainer">
              {state.wishlist.length > 9 ? "9+" : state.wishlist.length}
            </div>
          ) : undefined}
          <AiOutlineHeart className="WishlistIcon" />
        </div>
        <div className="CartContainer">
          <div className="CartIcon">
            <FaShoppingCart />
          </div>
          <div className="CartText" onClick={userCartOnClickHandler}>
            {state.cartlist.length === 0
              ? "My Cart"
              : `${state.cartlist.length} items`}
          </div>
        </div>
      </div>
    </header>
  );
}
