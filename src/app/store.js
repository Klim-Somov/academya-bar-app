import { configureStore } from "@reduxjs/toolkit";
import togleMenu from "../features/menuSlice";

export const store = configureStore({
  reducer: {
    togleMenu,
  },
});
