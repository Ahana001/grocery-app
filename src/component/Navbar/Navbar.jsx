import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import { FaShoppingCart, FaSearch } from "react-icons/fa";

export function Navbar() {
  const navigate = useNavigate();
  function userProfileOnClickHandler() {
    navigate("/user/login");
  }
  return (
    <header className="NavContainer">
      <div className="NavLeftContainer">
        <div className="LogoContainer">
          <div className="Logo">
            <span>G</span>rocery
          </div>
        </div>
        <div className="VerticleDivider"></div>
        <div className="LocationContainer">
          <div>Delivery in 19 minutes</div>
          <div className="LocationDetail">
            Ahmedabad, Gujarat, India <div className="LocationArrow"></div>
          </div>
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
        <div className="UserProfile" onClick={userProfileOnClickHandler}>
          Login
        </div>
        <div className="CartContainer">
          <div className="CartIcon">
            <FaShoppingCart />
          </div>
          <div className="CartText">Cart</div>
        </div>
      </div>
    </header>
  );
}
