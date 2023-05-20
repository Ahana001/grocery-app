import ReactImageMagnify from "react-image-magnify";

export function MenuItemImageContainer({ menuItem }) {
  return (
    <div className="MenuItemTopImageContainer">
      <ReactImageMagnify
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

      <div className="MenuItemTypeIcon">
        <img src="" alt="" />
      </div>
    </div>
  );
}
