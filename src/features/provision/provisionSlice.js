import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import provisionService from "./provisionServiceService";

const initialState = {};

export const provSlice = createSlice({
  name: "prov",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});
export default provSlice.reducer;
