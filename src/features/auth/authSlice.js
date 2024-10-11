import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || "",
  isLoading: false,
  isSuccess: false,
  error: null,
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

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const uploadProfileImage = createAsyncThunk(
  "auth/uploadProfileImage",
  async (file, thunkAPI) => {
    try {
      const response = await authService.uploadProfileImage(file);
      return response;
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
        localStorage.setItem("token", state.token);
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.msg;
      })
      .addCase(getLoggedUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getLoggedUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        localStorage.clear();
      })
      .addCase(uploadProfileImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        if (state.user) {
          state.user.profileImage = action.payload.profileImage; 
          localStorage.setItem("user", JSON.stringify(state.user)); 
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(uploadProfileImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
