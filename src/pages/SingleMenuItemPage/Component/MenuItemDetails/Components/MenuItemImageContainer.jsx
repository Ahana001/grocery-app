import ReactImageMagnify from "react-image-magnify";
import { useContext } from "react";

import { DisplayContext } from "../../../../../context/DisplayContext";

export function MenuItemImageContainer({ menuItem }) {
  const { screenSize } = useContext(DisplayContext);

  return (
    <div className="MenuItemTopImageContainer">
      <ReactImageMagnify
        className="MenuItemMagnifierImage"
        {...{
          smallImage: {
            alt: menuItem.name,
            src: menuItem.image,
            isFluidWidth: true,
          },
          largeImage: {
            src: menuItem.image,
            height: 800,
            width: 800,
          },
          enlargedImagePortalId: "ZoomImage",
          enlargedImageContainerClassName: "ZoomImageContainer",
        }}
      />
      <img
        style={{ display: screenSize.width < 1024 ? "block" : "none" }}
        className="SinglePageMenuItemImage"
        src={menuItem.image}
        alt={menuItem.name}
      />

      <div className="MenuItemTypeIcon">
        <img src="" alt="" />
      </div>
    </div>
  );
}
