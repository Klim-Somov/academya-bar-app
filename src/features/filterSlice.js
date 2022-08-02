import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "Горячие",
  categoryIndex: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setFilterCategory: (state, {payload}) => {
      state.currentCategory = payload;
    },
    setCategoryIndex: (state, {payload}) => {
      state.categoryIndex = payload;
    },
  },
});

export const { setFilterCategory, setCategoryIndex } = filterSlice.actions;

export default filterSlice.reducer;
