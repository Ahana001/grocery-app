import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function Navbar() {
  return (
    <header className="NavHeaderContainer">
      <div className="NavHeaderLeftContainer">
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
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="SearchAnimatedContainer">
            <div className="AnimatedSearchText">Search</div>
          </div>
        </div>
      </div>
      <div className="NavHeaderRightContainer">
        <div className="UserProfile">Login</div>
        <div className="CartContainer">
          <div className="CartIcon">
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </div>
          <div className="CartText">Cart</div>
        </div>
      </div>
    </header>
  );
}
