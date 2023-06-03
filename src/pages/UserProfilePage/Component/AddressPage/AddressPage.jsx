import "./AddressPage.css";

import { useState } from "react";

import { UserProfileContainer } from "../UserProfileContainer/UserProfileContainer";
import { AddressChild } from "./AddressChild";

export function AddressPage() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <>
      <UserProfileContainer childName="address">
        <AddressChild setIsOpenForm={setIsOpenForm} isOpenForm={isOpenForm} />
      </UserProfileContainer>
    </>
  );
}
