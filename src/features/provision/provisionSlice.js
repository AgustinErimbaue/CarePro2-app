import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import provisionService from "./provisionService";

const initialState = {
  services: [],
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

export const updateService = createAsyncThunk(
  "prov/updateService",
  async ({ _id, formData }, thunkAPI) => {
    try {
      const response = await provisionService.updateService(_id, formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getUserServices = createAsyncThunk(
  "prov/getUserServices",
  async (_, thunkAPI) => {
    try {
      const response = await provisionService.getUserServices();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getAllServices = createAsyncThunk(
  "prov/getAllServices",
  async (_, thunkAPI) => { // Se agrega "_" para indicar que no se pasa un argumento.
    try {
      const res = await provisionService.getAllServices();
      return res;
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
      state.services = [];
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
      })
      .addCase(updateService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service = action.payload;
      })
      .addCase(updateService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to update service";
      })

      .addCase(getUserServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.services = action.payload;
      })
      .addCase(getUserServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch user services";
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.services = action.payload; 
        state.isLoading = false;
        state.isSuccess = true;
      });
  },
});

export const { reset } = provSlice.actions;
export default provSlice.reducer;
