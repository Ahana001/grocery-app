import { Helmet } from "react-helmet";
import { UserProfileContainer } from "./Component/UserProfileContainer/UserProfileContainer";

export function UserProfilePage() {
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
      <UserProfileContainer />
    </>
  );
}
