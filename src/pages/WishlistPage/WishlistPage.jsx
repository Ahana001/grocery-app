import "./WishlistPage.css";

import { useContext } from "react";
import { Helmet } from "react-helmet";

import { DataContext } from "../../context/DataContext";
import { Pagination } from "../../component/Pagination/Pagination";
import { MenuItemListCard } from "../../component/MenuItemListCard/MenuItemListCard";
import { useNavigate } from "react-router-dom";

export function WishlistPage() {
  const { state } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <meta
          name="description"
          content="Shop on the go and get anything delivered in minutes. Buy everything
      from groceries to fresh fruits & vegetable"
        />
        <meta name="author" content="Ankita" />
        <meta name="keyword" content=" grocery app" />
      </Helmet>
      {state.wishlist.length > 0 ? (
        <div className="WishlistContainer">
          <Pagination
            data={state.wishlist}
            pageLimit={5}
            dataLimit={4}
            RenderComponent={MenuItemListCard}
          />
        </div>
      ) : (
        <div className="EmptyWishlistContainers">
          <img src="../images/empty_list.svg" alt="empty_wishlist" />
          <div className="EmptyWishlistDarkText">Your Wishlist is Empty</div>
          <div className="EmptyWishlistLightText">
            save your favorite items here
          </div>
          <div
            className="EmptyWishlistShoppingBtn"
            onClick={() =>
              navigate(
                location?.state?.from?.pathname?.includes("/user/account")
                  ? "/"
                  : location?.state?.from.pathname || "/",
                { replace: true }
              )
            }
          >
            Start Shopping
          </div>
        </div>
      )}
    </>
  );
}
