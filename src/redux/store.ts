"use client";
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice";

export const store = configureStore({
  reducer: {
    movieReducer,
  },
});
