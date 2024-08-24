import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
};

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.error("Register error:", error);
    throw error; 
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error("Login error:", error);
    throw error; 
  }
});

export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    return await authService.getUser();
  } catch (error) {
    console.error("Get user error:", error);
    throw error; 
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      })
      .addCase(login.rejected, (state, action) => {
        console.error("Login failed:", action.error.message);
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.error("Get user failed:", action.error.message);
      });
  },
});

export default authSlice.reducer;
