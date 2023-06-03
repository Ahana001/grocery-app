import { useContext } from "react";

import { GrLocation } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import { removeAddressFromAddressList } from "../../../../service/Service";
import { AuthContext } from "../../../../context/AuthContext";
import { DataContext } from "../../../../context/DataContext";
import { ActionTypes } from "../../../../reducer/types";

export function AddressCard({ address, setIsOpenForm, setAddressFormData }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(DataContext);

  async function deleteAddressFromAddressList(id) {
    const response = await removeAddressFromAddressList(id, currentUser.token);
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.SetAddressList,
        payload: {
          addresslist: response.data.addresslist,
        },
      });
    }
  }

  return (
    <div className="AddressCardContainer">
      <div className="AddressCardIcon">
        {address.addressType === "Home" ? (
          <AiOutlineHome />
        ) : address.addressType === "Work" ? (
          <HiOutlineBuildingOffice2 />
        ) : (
          <GrLocation />
        )}
      </div>
      <div className="AddressCardDetailsAndEditSection">
        <div className="AddressCardName">{address.addressName}</div>
        <div className="AddressCardDetailsContainer">
          <div className="AddressCardDetails">
            <span>{address.receiverName}</span> - {address.areaName},{" "}
            {address.city}, {address.state}, {address.pinCode}
          </div>
          <div className="AddressEditLink">
            <div
              className="AddressEditButton"
              onClick={() => {
                setIsOpenForm(() => true);
                const setAddress = address;
                delete setAddress.updatedAt;
                setAddressFormData(() => ({ ...setAddress }));
              }}
            >
              Edit
            </div>
            <div
              className="AddressDeleteButton"
              onClick={() => {
                deleteAddressFromAddressList(address._id);
              }}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
