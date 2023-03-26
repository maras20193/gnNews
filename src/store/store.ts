import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./features/newsSlice";
import viewSlice from "./features/viewSlice";

const reducer = {
  view: viewSlice,
  news: newsSlice,
};

export const store = configureStore({
  reducer,
});
