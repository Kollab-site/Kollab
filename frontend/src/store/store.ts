import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import campaignReducer from "./slices/campaignSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    campaigns: campaignReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
