import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contractService from "./contractService";

const initialState = {
  contract: null,
  loading: false,
  success: false,
  error: null,
};

export const hireService = createAsyncThunk(
  "contract/hireService",
  async (serviceData, { rejectWithValue }) => {
    try {
      const res = await contractService.hireService(serviceData);
      return res;
    } catch (error) {
      console.error(error);

      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    reset: (state) => {
      state.contract = null;
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hireService.pending, (state) => {
        state.loading = true;
      })
      .addCase(hireService.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contract = action.payload;
      })
      .addCase(hireService.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Error al contratar el servicio";
      });
  },
});

export const { reset } = contractSlice.actions;

export default contractSlice.reducer;