import { Routes, Route, Navigate } from "react-router-dom";
import Mockman from "mockman-js";

import { HomePage } from "./pages/HomePage/HomePage";
import { MenuItemListPage } from "./pages/MenuItemListPage/MenuItemListPage";
import { SingleMenuItemPage } from "./pages/SingleMenuItemPage/SingleMenuItemPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { AddressPage } from "./pages/UserProfilePage/Component/AddressPage/AddressPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { OrdersPage } from "./pages/UserProfilePage/Component/OrdersPage/OrdersPage";
import { WishlistPage } from "./pages/WishlistPage/WishlistPage";
import { Toast } from "./component/Toast/Toast";
import { Navbar } from "./component/Navbar/Navbar";
import { PrivateRoutes } from "./component/PrivateRoutes/PrivateRoutes";
import { Footer } from "./component/Footer/Footer";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { SlideTopOfPage } from "./component/SlideTopOfPage/SlideTopOfPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { Helmet } from "react-helmet";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <SlideTopOfPage>
              <HomePage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/main_category/:mainCategoryId"
          element={<MenuItemListPage />}
        ></Route>
        <Route
          path="/menu_item/:menuItemId"
          element={
            <SlideTopOfPage>
              <SingleMenuItemPage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/login"
          element={
            <SlideTopOfPage>
              <LoginPage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/signup"
          element={
            <SlideTopOfPage>
              <SignUpPage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/account"
          element={
            <SlideTopOfPage>
              <UserProfilePage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/account/address"
          element={
            <SlideTopOfPage>
              <AddressPage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/account/orders"
          element={
            <SlideTopOfPage>
              <OrdersPage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/cart"
          element={
            <SlideTopOfPage>
              <PrivateRoutes>
                <CartPage />
              </PrivateRoutes>
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/wishlist"
          element={
            <SlideTopOfPage>
              <PrivateRoutes>
                <WishlistPage />
              </PrivateRoutes>
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/user/checkout"
          element={
            <SlideTopOfPage>
              <PrivateRoutes>
                <CheckoutPage />
              </PrivateRoutes>
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/s"
          element={
            <SlideTopOfPage>
              <SearchPage />
            </SlideTopOfPage>
          }
        ></Route>
        <Route
          path="/mockman"
          element={
            <>
              <Helmet>
                <title>Grossy</title>
                <meta
                  name="description"
                  content="Shop on the go and get anything delivered in minutes. Buy everything
  from groceries to fresh fruits & vegetable"
                />
                <meta name="author" content="Ankita" />
                <meta name="keyword" content=" grocery app" />
              </Helmet>
              <Mockman />
            </>
          }
        ></Route>
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
