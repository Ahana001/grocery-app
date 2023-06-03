import "./UserProfileContainer.css";

import { useLocation, useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { RiFileList3Line } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { DataContext } from "../../../../context/DataContext";
import { ActionTypes } from "../../../../reducer/types";

export function UserProfileContainer({ children, childName }) {
  const { currentUser, LogOutHandler } = useContext(AuthContext);
  const { dispatch } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser.token) {
      navigate("/");
    }
  }, [currentUser.token]);

  return (
    <>
      <div className="UserProfileContainer">
        <div className="UserProfileWrapper">
          <div
            className="UserProfileLeftContainer"
            style={{
              display: location.pathname === "/user/account" ? "block" : "",
            }}
          >
            <div className="UserProfileNav">
              <div className="UserProfileNavDetails">
                <div className="UserProfileImage"></div>
                <div className="UserProfileName">
                  {currentUser?.user?.firstName}
                </div>
              </div>
              <div className="UserProfileNavList">
                <ul>
                  <li
                    className="UserProfileAddress"
                    style={{
                      backgroundColor:
                        childName === "address" ? "#eee" : "white ",
                    }}
                    onClick={() => {
                      navigate("/user/account/address");
                    }}
                  >
                    <GoLocation className="UserProfileIcon" />
                    <div className="UserProfileLink">My Addresses</div>
                  </li>
                  <li
                    className="UserProfileOrder"
                    style={{
                      backgroundColor:
                        childName === "orders" ? "#eee" : "white ",
                    }}
                    onClick={() => navigate("/user/account/orders")}
                  >
                    <RiFileList3Line className="UserProfileIcon" />
                    <div className="UserProfileLink">My Orders</div>
                  </li>
                  <li
                    className="UserProfileCart"
                    onClick={() => navigate("/user/cart")}
                  >
                    <AiOutlineShoppingCart className="UserProfileIcon" />
                    <div className="UserProfileLink">My Cart</div>
                  </li>
                  <li
                    className="UserProfileWishlist"
                    onClick={() => navigate("/user/wishlist")}
                  >
                    <AiOutlineHeart className="UserProfileIcon" />
                    <div className="UserProfileLink">My Favorite</div>
                  </li>
                  <li className="UserProfileLogout">
                    <BiUser className="UserProfileIcon" />
                    <div
                      className="UserProfileLink"
                      onClick={() => {
                        LogOutHandler();
                        dispatch({
                          type: ActionTypes.SetCartList,
                          payload: {
                            cart: [],
                          },
                        });
                      }}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="UserProfileRightContainer"
            style={{
              display: location.pathname === "/user/account" ? "none" : "",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
