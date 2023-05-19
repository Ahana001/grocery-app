import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage } from "./pages/HomePage/HomePage";
import { MenuItemListPage } from "./pages/MenuItemListPage/MenuItemListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/main_category/:mainCategoryId"
          element={<MenuItemListPage />}
        ></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
