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
// import { Footer } from "./component/Footer/Footer";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/main_category/:mainCategoryId"
          element={<MenuItemListPage />}
        ></Route>
        <Route
          path="/menu_item/:menuItemId"
          element={<SingleMenuItemPage />}
        ></Route>
        <Route path="/user/login" element={<LoginPage />}></Route>
        <Route path="/user/signup" element={<SignUpPage />}></Route>
        <Route path="/user/account" element={<UserProfilePage />}></Route>
        <Route path="/user/account/address" element={<AddressPage />}></Route>
        <Route path="/user/account/orders" element={<OrdersPage />}></Route>
        <Route
          path="/user/cart"
          element={
            <PrivateRoutes>
              <CartPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/user/wishlist"
          element={
            <PrivateRoutes>
              <WishlistPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/user/checkout"
          element={
            <PrivateRoutes>
              <CheckoutPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
      {/* <Footer /> */}
      <Toast />
    </div>
  );
}

export default App;
