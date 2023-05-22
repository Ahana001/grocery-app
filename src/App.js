import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage } from "./pages/HomePage/HomePage";
import { MenuItemListPage } from "./pages/MenuItemListPage/MenuItemListPage";
import { SingleMenuItemPage } from "./pages/SingleMenuItemPage/SingleMenuItemPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { UserProfile } from "./pages/UserProfilePage/UserProfilePage";
import { CartPage } from "./pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
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
        <Route path="/user/account" element={<UserProfile />}></Route>
        <Route path="/user/cart" element={<CartPage />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
