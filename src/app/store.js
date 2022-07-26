import { configureStore } from "@reduxjs/toolkit";
import togleMenu from "../features/menuSlice";
import technos from "../features/technoSlice";
import filter from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    togleMenu,
    technos,
    filter,
  },
});
