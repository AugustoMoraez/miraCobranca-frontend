// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/user"; // exemplo de slice

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Tipos para uso com TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
