import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/main_category/:mainCategoryId"
          element={<h2>Filter Page</h2>}
        ></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
