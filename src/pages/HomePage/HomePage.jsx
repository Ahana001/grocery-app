import "./HomePage.css";

import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { Loader } from "../../component/Loader/Loader";
import { Navbar } from "../../component/Navbar/Navbar";
import { Banner } from "../../component/Banner/Banner";
import { MainCategoryList } from "./Component/MainCategoryList/MainCategoryList";

export function HomePage() {
  const { loader } = useContext(DataContext);

  return (
    <>
      <Navbar />
      {loader ? (
        <Loader height="100vh" size="80px" />
      ) : (
        <div className="HomePageContainer">
          <Banner />
          <MainCategoryList />
        </div>
      )}
    </>
  );
}
