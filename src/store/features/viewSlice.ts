import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from "../../config";

type initialStateType = {
  displayStyle: string;
  language: string;
};

const initialState: initialStateType = {
  displayStyle: config.VIEW_VARIANTS.TILES,
  language: config.LANGUAGE.ENGLISH,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<string>) => {
      state.displayStyle = action.payload;
    },
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { changeView, changeLanguage } = viewSlice.actions;

export const selectDisplayStyle = (state: RootState) => state.view.displayStyle;

export default viewSlice.reducer;
