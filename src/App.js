import { Routes, Route } from "react-router-dom";
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
          element={
            <SlideTopOfPage>
              <MenuItemListPage />
            </SlideTopOfPage>
          }
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
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
