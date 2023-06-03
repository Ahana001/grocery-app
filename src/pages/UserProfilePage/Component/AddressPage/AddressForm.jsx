import { useState, useEffect, useContext } from "react";

import { RxCross1 } from "react-icons/rx";

import { stateArray } from "./constant";
import IframeComponent from "./IframeComponent";
import { DataContext } from "../../../../context/DataContext";
import {
  AddAddressToAddressList,
  updatedAddressToAddressList,
} from "../../../../service/Service";
import { ActionTypes } from "../../../../reducer/types";
import { AuthContext } from "../../../../context/AuthContext";

export function AddressForm({
  isOpenForm,
  setIsOpenForm,
  addressFormData,
  setAddressFormData,
}) {
  const [error, setError] = useState(false);
  const { dispatch } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setError(() => false);
  }, []);

  async function saveAddressOnSubmitHandler() {
    let isErrorSet = false;
    for (let key in addressFormData) {
      if (
        (addressFormData[key] === "" && key !== "_id" && key !== "createdAt") ||
        addressFormData["title"] === "Title" ||
        addressFormData["state"] === "Choose State"
      ) {
        isErrorSet = true;
        setError(() => true);
      }
    }
    if (!isErrorSet) {
      setIsOpenForm(() => false);
      setAddressFormData(() => ({
        title: "",
        receiverName: "",
        areaName: "",
        city: "",
        pinCode: "",
        state: "",
        addressType: "Home",
        addressName: "",
        _id: "",
        createdAt: "",
      }));
      if (addressFormData._id !== "") {
        const response = await updatedAddressToAddressList(
          addressFormData,
          currentUser.token
        );
        if (response.status === 200) {
          dispatch({
            type: ActionTypes.SetAddressList,
            payload: {
              addresslist: response.data.addresslist,
            },
          });
        }
      } else {
        delete addressFormData.createdAt;
        delete addressFormData._id;
        const response = await AddAddressToAddressList(
          addressFormData,
          currentUser.token
        );
        if (response.status === 201) {
          dispatch({
            type: ActionTypes.SetAddressList,
            payload: {
              addresslist: response.data.addresslist,
            },
          });
        }
      }
    }
  }

  function setFormDataOnChangeHandler(e, type) {
    if (
      type === "addressType" &&
      (e.target.innerText === "Home" || e.target.innerText === "Work")
    ) {
      setAddressFormData(() => ({
        ...addressFormData,
        [type]: e.target.innerText,
        addressName: e.target.innerText,
      }));
    } else {
      setAddressFormData(() => ({
        ...addressFormData,
        [type]: type !== "addressType" ? e.target.value : e.target.innerText,
      }));
    }
  }
  return (
    <div
      className="ModalPortal"
      style={{ display: isOpenForm ? "block" : "none" }}
    >
      <div className="ModalOverlay">
        <div className="ModalPortalContent">
          <div
            className="ModalPortalCloseButton"
            onClick={() => {
              setIsOpenForm(() => false);
            }}
          >
            <RxCross1 />
          </div>
          <div className="AddressInputContainer">
            <div className="AddressSelectionSection">
              <div className="DeliveryAddressHeader">
                Enter complete address
              </div>
              <div className="DeliveryAddressSubTitle">
                This allow us to find you easily and give you timely delivery
                experience
              </div>
              <div className="ReceiverDetails">
                <select
                  className="Title"
                  value={addressFormData.title}
                  onChange={(e) => setFormDataOnChangeHandler(e, "title")}
                  style={{
                    border:
                      error && addressFormData.title === "Title"
                        ? "0.1rem solid red"
                        : "",
                  }}
                >
                  <option value="Title" disabled hidden>
                    Title
                  </option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </select>
                <div className="ReceiverNameContainer">
                  <label
                    htmlFor="ReceiverName"
                    style={{
                      top: addressFormData.receiverName === "" ? "" : "-0.7rem",
                    }}
                  >
                    Receiver&#39;s name
                  </label>
                  <input
                    type="text"
                    id="ReceiverName"
                    value={addressFormData.receiverName}
                    onChange={(e) =>
                      setFormDataOnChangeHandler(e, "receiverName")
                    }
                    style={{
                      border:
                        error && addressFormData.receiverName === ""
                          ? "0.1rem solid red"
                          : "",
                    }}
                  />
                </div>
              </div>
              <div className="AreaNameContainer">
                <label
                  htmlFor="AreaName"
                  style={{
                    top: addressFormData.areaName === "" ? "" : "-0.7rem",
                  }}
                >
                  Street / Society / Office Name
                </label>
                <input
                  type="text"
                  id="AreaName"
                  value={addressFormData.areaName}
                  onChange={(e) => setFormDataOnChangeHandler(e, "areaName")}
                  style={{
                    border:
                      error && addressFormData.areaName === ""
                        ? "0.1rem solid red"
                        : "",
                  }}
                />
              </div>
              <div className="PinCodeAndStateContainer">
                <div className="CityContainer">
                  <label
                    htmlFor="City"
                    style={{
                      top: addressFormData.city === "" ? "" : "-0.7rem",
                    }}
                  >
                    City
                  </label>
                  <input
                    id="City"
                    type="text"
                    onChange={(e) => setFormDataOnChangeHandler(e, "city")}
                    value={addressFormData.city}
                    style={{
                      border:
                        error && addressFormData.city === ""
                          ? "0.1rem solid red"
                          : "",
                    }}
                  />
                </div>
                <div className="PinCodeContainer">
                  <label
                    htmlFor="PinCode"
                    style={{
                      top: addressFormData.pinCode === "" ? "" : "-0.7rem",
                    }}
                  >
                    Pin Code
                  </label>
                  <input
                    id="PinCode"
                    type="number"
                    maxLength={6}
                    min={0}
                    onChange={(e) => setFormDataOnChangeHandler(e, "pinCode")}
                    value={addressFormData.pinCode}
                    style={{
                      border:
                        error && addressFormData.pinCode === ""
                          ? "0.1rem solid red"
                          : "",
                    }}
                  />
                </div>
                <select
                  className="StateContainer"
                  value={addressFormData.state}
                  onChange={(e) => setFormDataOnChangeHandler(e, "state")}
                  style={{
                    border:
                      error && addressFormData.state === "Choose State"
                        ? "0.1rem solid red"
                        : "",
                  }}
                >
                  <option hidden disabled value="Choose State">
                    Choose State
                  </option>
                  {stateArray.map((state) => {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="SaveAddressAs">
                <div>Save Address as</div>
                <ul>
                  <li
                    style={{
                      backgroundColor:
                        addressFormData.addressType === "Home"
                          ? "#86cb86"
                          : "white",
                    }}
                    value="Home"
                    onClick={(e) =>
                      setFormDataOnChangeHandler(e, "addressType")
                    }
                  >
                    Home
                  </li>
                  <li
                    style={{
                      backgroundColor:
                        addressFormData.addressType === "Work"
                          ? "#86cb86"
                          : "white",
                    }}
                    value="Work"
                    onClick={(e) =>
                      setFormDataOnChangeHandler(e, "addressType")
                    }
                  >
                    Work
                  </li>
                  <li
                    style={{
                      backgroundColor:
                        addressFormData.addressType === "Other"
                          ? "#86cb86"
                          : "white",
                    }}
                    value="Other"
                    onClick={(e) =>
                      setFormDataOnChangeHandler(e, "addressType")
                    }
                  >
                    Other
                  </li>
                </ul>
              </div>
              <div
                className="AdressNameContainer"
                style={{
                  display:
                    addressFormData.addressType === "Other" ? "block" : "none",
                }}
              >
                <label
                  htmlFor="AdressName"
                  style={{
                    top: addressFormData.addressName === "" ? "" : "-0.7rem",
                  }}
                >
                  Nickname Of your address
                </label>
                <input
                  type="text"
                  id="AdressName"
                  value={
                    addressFormData.addressName !== "Home"
                      ? addressFormData.addressName
                      : ""
                  }
                  onChange={(e) => setFormDataOnChangeHandler(e, "addressName")}
                  style={{
                    border:
                      error && addressFormData.addressName === ""
                        ? "0.1rem solid red"
                        : "",
                  }}
                />
              </div>
              <div
                className="SaveAddressBtn"
                onClick={saveAddressOnSubmitHandler}
              >
                Save Address
              </div>
            </div>
            <IframeComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
