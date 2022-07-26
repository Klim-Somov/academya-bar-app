import { Box } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import "./App.css";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";

function App() {
  // const technos = useSelector((state) => state.technos);
  // console.log(technos[0].name);
  return (
    <>
      <Header />
      <Categories />
      <SideBar />
      <Home />
    </>
  );
}

export default App;
