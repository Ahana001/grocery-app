import "./MenuItemDetails.css";

import { MenuItemImageContainer } from "./Components/MenuItemImageContainer";
import { MenuItemSellerDetails } from "./Components/MenuItemSellerDetail";
import { MenuItemZoomImageContainer } from "./Components/MenuItemZoomImageContainer";
import { MenuItemDetailsContainer } from "./Components/MenuItemDetailsContainer";
export function MenuItemDetails({ menuItem }) {
  return (
    <>
      <div className="MenuItemDetailsContainer">
        <div className="MenuItemLeftSection">
          <MenuItemImageContainer menuItem={menuItem} />
        </div>
        <div className="MenuItemRightSection">
          <MenuItemZoomImageContainer />
          <MenuItemDetailsContainer menuItem={menuItem} />
        </div>
      </div>
      <div className="MenuItemBottomContainer">
        <MenuItemSellerDetails />
        <div className="BottomRightContainer"></div>
      </div>
    </>
  );
}
