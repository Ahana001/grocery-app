import "./Home.css";

import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { Loader } from "../../component/Loarder/Loader";
import { Navbar } from "../../component/Navbar/Navbar";
import { Banner } from "../../component/Banner/Banner";
import { MainCategoryList } from "../../component/MainCategoryList/MainCategoryList";

export function Home() {
  const { loader } = useContext(DataContext);

  return (
    <>
      <Navbar />
      {loader ? (
        <Loader />
      ) : (
        <div className="HomeContainer">
          <Banner />
          <MainCategoryList />
        </div>
      )}
    </>
  );
}
