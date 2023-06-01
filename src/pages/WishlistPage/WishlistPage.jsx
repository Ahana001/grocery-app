import "./WishlistPage.css";

import { useContext } from "react";
import { Navbar } from "../../component/Navbar/Navbar";
import { DataContext } from "../../context/DataContext";
import { Pagination } from "../../component/Pagination/Pagination";
import { MenuItemListCard } from "../../component/MenuItemListCard/MenuItemListCard";

export function WishlistPage() {
  const { state } = useContext(DataContext);

  return (
    <>
      <Navbar />
      <div className="WishlistContainer">
        <Pagination
          data={state.wishlist}
          pageLimit={5}
          dataLimit={5}
          RenderComponent={MenuItemListCard}
        />
      </div>
    </>
  );
}
