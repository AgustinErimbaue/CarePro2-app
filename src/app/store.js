import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import provisionSlice from "../features/provision/provisionSlice";
import contractSlice from "../features/contract/contractSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    prov: provisionSlice,
    contract: contractSlice,
  },
});
