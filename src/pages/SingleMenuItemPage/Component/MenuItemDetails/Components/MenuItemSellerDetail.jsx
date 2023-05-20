import { sellerDetails } from "../constant";
import { MenuItemSellerDetailsList } from "./MenuItemSellerDetailsList";

export function MenuItemSellerDetails() {
  return (
    <div className="MenuItemBottomContainer">
      <div className="MenuItemSellerDetilsHeader">Product Details</div>
      <div className="MenuItemSellerDetailsListContainer">
        {sellerDetails.map(({ header, text }) => {
          return (
            <MenuItemSellerDetailsList
              key={header}
              header={header}
              text={text}
            />
          );
        })}
      </div>
    </div>
  );
}
