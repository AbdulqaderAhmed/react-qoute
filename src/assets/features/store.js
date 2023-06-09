import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice/quoteSlice";

export const store = configureStore({
  reducer: {
    qoute: quoteReducer,
  },
});
