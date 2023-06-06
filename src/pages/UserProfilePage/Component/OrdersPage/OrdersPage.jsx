import { Helmet } from "react-helmet";
import { UserProfileContainer } from "../UserProfileContainer/UserProfileContainer";

export function OrdersPage() {
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
      <UserProfileContainer childName="orders">
        <h2>Orders</h2>
      </UserProfileContainer>
    </>
  );
}
