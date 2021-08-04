import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const sendAuth = createAsyncThunk(
  "/auth/sendAuth",
  async (userData, { getState, rejectWithValue }) => {
    const {
      auth: { keyAPI, logInForm },
    } = getState();
    const { email, password } = userData;

    console.log(logInForm);

    try {
      const response = await axios({
        method: "POST",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:${
          logInForm ? "signInWithPassword" : "signUp"
        }?key=${keyAPI}`,
        data: { email, password, returnSecureToken: true },
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
