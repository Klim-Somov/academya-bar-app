import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatarUrl: null,
};

export const avatarImgSlice = createSlice({
  name: "avatar",
  initialState,

  reducers: {
    setAvatar: (state, {payload}) => {
      state.avatarUrl = payload;
    },
   
  },
});

export const { setAvatar } = avatarImgSlice.actions;

export default avatarImgSlice.reducer;
