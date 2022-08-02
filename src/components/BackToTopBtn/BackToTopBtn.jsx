import React, { useEffect, useState } from "react";

import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopBtn = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const hehdelScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopBtn && (
        <div style={{ position: "fixed", bottom: "50px", right: "50px" }}>
          <Fab
            sx={{ backgroundColor: "#d0ceed" }}
            onClick={hehdelScroll}
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      )}
    </>
  );
};

export default BackToTopBtn;
