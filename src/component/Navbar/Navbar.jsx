import "./Navbar.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { FaShoppingCart, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { ActionTypes } from "../../reducer/types";

export function Navbar() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, LogOutHandler } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);

  function userProfileOnClickHandler() {
    navigate("/user/login", { state: { from: location } });
  }
  function userCartOnClickHandler() {
    if (currentUser.token) {
      navigate("/user/cart", { state: { from: location } });
    } else {
      navigate("/user/login", { state: { from: location } });
    }
  }
  function SmallViewUserProfileHandler() {
    if (currentUser.token) {
      navigate("/user/account", { state: { from: location } });
    } else {
      navigate("/user/login", { state: { from: location } });
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
              <div className="LocationDetail">Ahmedabad, Gujarat, India</div>
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
                <button className="UserProfileDropDownBtn">Account</button>
                <div
                  className="UserProfileArrow"
                  onClick={() => setDropdownVisibility(true)}
                ></div>
              </div>
              <div
                className="UserProfileDropDownContent"
                style={{
                  display: dropdownVisibility ? "block" : "none",
                  top: location.pathname.includes("main_category")
                    ? "10.5rem"
                    : "5rem",
                }}
              >
                <div className="UserProfileName">
                  {currentUser.user.firstName}
                </div>
                <ul className="UserProfileDropDownList">
                  <li onClick={() => navigate("/user/account/orders")}>
                    My Orders
                  </li>
                  <li onClick={() => navigate("/user/account/address")}>
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
          <div className="UserProfile" onClick={userProfileOnClickHandler}>
            Login
          </div>
        )}
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
