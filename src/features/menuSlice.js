import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const togleMenuSlice = createSlice({
  name: "menuOpen",
  initialState,

  reducers: {
    setOpen: (state) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    }
  },

});

export const { setClose, setOpen,  } = togleMenuSlice.actions;



export default togleMenuSlice.reducer;
