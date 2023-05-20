import "./SingleMenuItemPage.css";

import { Navbar } from "../../component/Navbar/Navbar";
import { MenuItemDetails } from "./Component/MenuItemDetails/MenuItemDetails";

export function SingleMenuItemPage() {
  return (
    <>
      <div className="SingleMenuItemPageContainer">
        <Navbar />
        <MenuItemDetails />
        <div className="HorizontalLine"></div>
      </div>
    </>
  );
}
