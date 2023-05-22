import "./Navbar.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

export function Navbar() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, LogOutHandler } = useContext(AuthContext);

  function userProfileOnClickHandler() {
    navigate("/user/login", { state: { from: location } });
  }
  function userCartOnClickHandler() {
    if (currentUser.token) {
      navigate("/user/cart");
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
        <div className="LocationContainer">
          <div>Delivery in 19 minutes</div>
          <div className="LocationDetail">Ahmedabad, Gujarat, India</div>
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
                style={{ display: dropdownVisibility ? "block" : "none" }}
              >
                <div className="UserProfileName">
                  {currentUser.user.firstName}
                </div>
                <ul className="UserProfileDropDownList">
                  <li onClick={() => navigate("/user/account/orders")}>
                    My Orders
                  </li>
                  <li onClick={() => navigate("/user/account/addresses")}>
                    Saved Address
                  </li>
                  <li
                    onClick={() => {
                      LogOutHandler();
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
            Cart
          </div>
        </div>
      </div>
    </header>
  );
}
