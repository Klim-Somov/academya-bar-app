import React, { useEffect } from "react";

import Categories from "../components/Categories/Categories";
import Home from "../components/Home/ProductCards";

function Technos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Categories />
      <Home />
    </>
  );
}

export default Technos;
