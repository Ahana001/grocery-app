import "./AddressPage.css";

import { useState } from "react";

import { UserProfileContainer } from "../UserProfileContainer/UserProfileContainer";
import { AddressChild } from "./AddressChild";
import { Helmet } from "react-helmet";

export function AddressPage() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="Shop on the go and get anything delivered in minutes. Buy everything
      from groceries to fresh fruits & vegetable"
        />
        <meta name="author" content="Ankita" />
        <meta name="keyword" content=" grocery app" />
      </Helmet>
      <UserProfileContainer childName="address">
        <AddressChild setIsOpenForm={setIsOpenForm} isOpenForm={isOpenForm} />
      </UserProfileContainer>
    </>
  );
}
