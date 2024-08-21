import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
