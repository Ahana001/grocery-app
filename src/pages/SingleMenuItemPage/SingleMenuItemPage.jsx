import "./SingleMenuItemPage.css";

import { Navbar } from "../../component/Navbar/Navbar";
import { MenuItemDetails } from "./Component/MenuItemDetails/MenuItemDetails";
import { useEffect } from "react";

export function SingleMenuItemPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
