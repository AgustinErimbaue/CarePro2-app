import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contractService from "./contractService";

const initialState = {
  contract: null,
  loading: false,
  succes: false,
  error: null,
};

export const hireService = createAsyncThunk(
  "contract/hireService",
  async (serviceData) => {
    try {
      const res = await contractService.hireService(serviceData);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);
