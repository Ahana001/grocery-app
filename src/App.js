import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages/Home/Home";
import { MenuItemList } from "./pages/MenuItemList/MenuItemList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/main_category/:mainCategoryId"
          element={<MenuItemList />}
        ></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
