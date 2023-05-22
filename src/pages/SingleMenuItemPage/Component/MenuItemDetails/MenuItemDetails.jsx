import "./MenuItemDetails.css";

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../../../component/Loader/Loader";
import { MenuItemImageContainer } from "./Components/MenuItemImageContainer";
import { MenuItemSellerDetails } from "./Components/MenuItemSellerDetail";
import { MenuItemZoomImageContainer } from "./Components/MenuItemZoomImageContainer";
import { MenuItemDetailsContainer } from "./Components/MenuItemDetailsContainer";
import { DataContext } from "../../../../context/DataContext";

export function MenuItemDetails() {
  const { state } = useContext(DataContext);
  const { menuItemId } = useParams();
  const menuItem = state.menuItems.find(
    (menuItem) => menuItem._id === menuItemId
  );
  if (!menuItem) {
    return <Loader height="100vh" size="80px" />;
  }

  return (
    <>
      <div className="MenuItemDetailsContainer">
        <div className="MenuItemLeftSection">
          <MenuItemImageContainer menuItem={menuItem} />
          <MenuItemSellerDetails />
        </div>
        <div className="MenuItemRightSection">
          <MenuItemZoomImageContainer />
          <MenuItemDetailsContainer menuItem={menuItem} />
        </div>
      </div>
    </>
  );
}
