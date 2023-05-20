import "./MenuItemDetails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../../../component/Loader/Loader";
import { getParticularMenuItemRequest } from "../../../../service/Service";
import { MenuItemImageContainer } from "./Components/MenuItemImageContainer";
import { MenuItemSellerDetails } from "./Components/MenuItemSellerDetail";
import { MenuItemZoomImageContainer } from "./Components/MenuItemZoomImageContainer";
import { MenuItemDetailsContainer } from "./Components/MenuItemDetailsContainer";

export function MenuItemDetails() {
  const [menuItem, setMenuItem] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState([]);

  const { menuItemId } = useParams();

  async function fetchMenuItemDetails() {
    const response = await getParticularMenuItemRequest(menuItemId);
    if (response?.data?.menuItem) {
      setMenuItem(response?.data?.menuItem ?? []);
      const findDefaultVariant = response?.data?.menuItem?.item_variant?.find(
        (variant) => variant.default
      );
      setSelectedVariant(() => findDefaultVariant);
    }
  }

  useEffect(() => {
    fetchMenuItemDetails();
  }, []);

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
          <MenuItemDetailsContainer
            menuItem={menuItem}
            selectedVariant={selectedVariant}
          />
        </div>
      </div>
    </>
  );
}
