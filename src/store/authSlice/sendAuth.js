import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const sendAuth = createAsyncThunk(
  "/auth/sendAuth",
  async (userData, { getState, rejectWithValue }) => {
    const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

    const {
      auth: { logInForm },
    } = getState();
    const { email, password } = userData;

    try {
      const response = await axios({
        method: "POST",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:${
          logInForm ? "signInWithPassword" : "signUp"
        }?key=${apiKey}`,
        data: { email, password, returnSecureToken: true },
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
