import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || "",
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
    const data = await authService.login(user);
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
});

export const getLoggedUser = createAsyncThunk(
  "auth/getLoggedUser",
  async (_, thunkAPI) => {
    try {
      const res = await authService.getLoggedUser();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

  export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(login.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          localStorage.setItem("user", JSON.stringify(state.user));
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isSuccess = true;
          state.message = action.payload.msg;
        })
        .addCase(getLoggedUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isSuccess = true;
        });
    },
  });
  export default authSlice.reducer;
