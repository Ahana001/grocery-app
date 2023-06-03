import "./WishlistPage.css";

import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { Pagination } from "../../component/Pagination/Pagination";
import { MenuItemListCard } from "../../component/MenuItemListCard/MenuItemListCard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function WishlistPage() {
  const { state } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.token) {
      navigate("/");
    }
  }, [currentUser.token]);

  return (
    <>
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
