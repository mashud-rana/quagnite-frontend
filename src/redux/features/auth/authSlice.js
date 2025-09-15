import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  access_token: undefined,
  refresh_token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    userLoggedOut: (state) => {
      state.user = undefined;
      state.access_token = undefined;
      state.refresh_token = undefined;
    },
    updateUser: (state, action) => {
      console.log("Updating user in auth slice with:", action.payload);
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { userLoggedIn, userLoggedOut, clearCredentials, updateUser } = authSlice.actions;
export default authSlice.reducer;
