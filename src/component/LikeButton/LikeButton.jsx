import "./LikeButton.css";

import { useContext } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { DisplayContext } from "../../context/DisplayContext";
import { DataContext } from "../../context/DataContext";

export function LikeButton({ menuItem }) {
  const { dropdownVisibility } = useContext(DisplayContext);
  const { AddToWishListHandler } = useContext(DataContext);

  return (
    <div
      className="LikeIconContainer"
      style={{
        zIndex: dropdownVisibility ? "0" : "100",
      }}
    >
      {menuItem.wished ? (
        <AiFillHeart
          onClick={() => AddToWishListHandler(menuItem)}
          style={{
            color: menuItem.wished ? "#dc2626" : "",
          }}
        />
      ) : (
        <AiOutlineHeart onClick={() => AddToWishListHandler(menuItem)} />
      )}
    </div>
  );
}
