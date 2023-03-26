import { configureStore } from "@reduxjs/toolkit";
import viewSlice from "./features/viewSlice";

const reducer = {
  view: viewSlice,
};

export const store = configureStore({
  reducer,
});
