import { createSlice } from "@reduxjs/toolkit";
import { set } from "nprogress";

const initialState = {
isSpinning: false,
};

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    toggleSpinner: (state, action) => {
      state.isSpinning = action.payload;
    }
  
  },
});

export const { toggleSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;
