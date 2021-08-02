import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyAPI: "AIzaSyDP0DSSrrHLRJbdcjED1-72JxMmDoXlGkU",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
});

export default authSlice.reducer;
