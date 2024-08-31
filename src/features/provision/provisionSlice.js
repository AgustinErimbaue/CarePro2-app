import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import provisionService from "./provisionServiceService";

const initialState = {
  service: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const createService = createAsyncThunk(
  "prov/createService",
  async (serviceData, thunkAPI) => {
    try {
      const response = await provisionService.createService(serviceData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const provSlice = createSlice({
  name: "prov",
  initialState,
  reducers: {
    reset: (state) => {
      state.service = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service = action.payload;
      })
      .addCase(createService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to create service";
      });
  },
});

export const { reset } = provSlice.actions;
export default provSlice.reducer;
