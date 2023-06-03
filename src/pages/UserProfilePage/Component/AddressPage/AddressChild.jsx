import { useContext, useState } from "react";

import { BsPatchPlus } from "react-icons/bs";

import { AddressForm } from "./AddressForm";
import { AddressCard } from "./AddressCard";
import { DataContext } from "../../../../context/DataContext";

export function AddressChild({ setIsOpenForm, isOpenForm }) {
  const { state } = useContext(DataContext);
  const [addressFormData, setAddressFormData] = useState({
    title: "Title",
    receiverName: "",
    areaName: "",
    city: "",
    pinCode: "",
    state: "Choose State",
    addressType: "Home",
    addressName: "Home",
    _id: "",
    createdAt: "",
  });

  if (state.addresslist.length === 0) {
    return (
      <>
        <div className="NoAddressContainer">
          <img src="../../images/no_address.webp" alt="No Address" />
          <div className="NoAddressHeader">You have no saved addresses</div>
          <div className="NoAddressSubTitle">
            Tell us where you want your orders delivered
          </div>
          <div
            className="NoAddressAddAddressBtn"
            onClick={() => setIsOpenForm(() => true)}
          >
            Add Address
          </div>
        </div>
        <AddressForm
          setIsOpenForm={setIsOpenForm}
          isOpenForm={isOpenForm}
          addressFormData={addressFormData}
          setAddressFormData={setAddressFormData}
        />
      </>
    );
  }
  return (
    <div className="AddressListContainer">
      <div
        className="AddressListAddAddresBtn"
        onClick={() => {
          setAddressFormData(() => ({
            title: "Title",
            receiverName: "",
            areaName: "",
            city: "",
            pinCode: "",
            state: "Choose State",
            addressType: "Home",
            addressName: "Home",
            _id: "",
            createdAt: "",
          }));
          setIsOpenForm(() => true);
        }}
      >
        <BsPatchPlus /> Add New Address
      </div>
      <div className="AddressList">
        {state.addresslist.map((address) => {
          return (
            <AddressCard
              key={address._id}
              address={address}
              setIsOpenForm={setIsOpenForm}
              setAddressFormData={setAddressFormData}
            />
          );
        })}
      </div>
      <AddressForm
        setIsOpenForm={setIsOpenForm}
        isOpenForm={isOpenForm}
        addressFormData={addressFormData}
        setAddressFormData={setAddressFormData}
      />
    </div>
  );
}
