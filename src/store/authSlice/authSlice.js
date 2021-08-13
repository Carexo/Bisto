import { createSlice } from "@reduxjs/toolkit";

import { sendAuth } from "./sendAuth";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("isLoggedIn"),
  logInForm: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.idToken = "";
      state.isLoggedIn = false;
    },
    setLogInForm: (state, action) => {
      state.logInForm = action.payload;
    },
  },
  extraReducers: {
    [sendAuth.pending]: (state) => {
      state.status = "loading";
    },
    [sendAuth.fulfilled]: (state, action) => {
      state.status = "success";
      state.token = action.payload.idToken;
      state.isLoggedIn = true;

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", action.payload.idToken);
    },
    [sendAuth.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { logOut, setLogInForm } = authSlice.actions;
export default authSlice.reducer;
