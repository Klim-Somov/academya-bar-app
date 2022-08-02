import { configureStore } from "@reduxjs/toolkit";
import togleMenu from "../features/menuSlice";
import technos from "../features/technoSlice";
import filter from "../features/filterSlice";
import user from "../features/userSlice";
export const store = configureStore({
  reducer: {
    togleMenu,
    technos,
    filter,
    user,
  },
});
