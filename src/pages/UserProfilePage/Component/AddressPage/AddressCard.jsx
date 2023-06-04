import { useContext } from "react";

import { GrLocation } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";

import { removeAddressFromAddressList } from "../../../../service/Service";
import { AuthContext } from "../../../../context/AuthContext";
import { DataContext } from "../../../../context/DataContext";
import { ActionTypes } from "../../../../reducer/types";

export function AddressCard({ address, setIsOpenForm, setAddressFormData }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch, state } = useContext(DataContext);

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
  async function selectAddress() {
    dispatch({
      type: ActionTypes.SelectAddress,
      payload: {
        selectedAddress: { ...address },
      },
    });
  }
  return (
    <div
      className="AddressCardContainer"
      style={{
        backgroundColor:
          address._id === state.selectedAddress?._id
            ? "rgb(195, 232, 202)"
            : "white",
      }}
    >
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
      <div
        className="AddressCheckBox"
        onClick={selectAddress}
        style={{
          height: location.pathname !== "user/checkout" ? "" : "100%",
        }}
      >
        {address._id === state.selectedAddress?._id ? <TiTick /> : undefined}
      </div>
    </div>
  );
}
