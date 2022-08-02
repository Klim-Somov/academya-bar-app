import React from "react";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";
import Categories from "../components/Categories/Categories";
import Home from "../components/Home/Home";
import SideBar from "../components/SideBar/SideBar";

function Main() {
  return (
    <><SideBar />
      <Categories />
     
      <Home />
    </>
  );
}

export default Main;
