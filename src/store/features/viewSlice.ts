import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from "../../config";

type initialStateType = {
  displayStyle: string;
};

const initialState: initialStateType = {
  displayStyle: config.VIEW_VARIANTS.TILES,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<string>) => {
      state.displayStyle = action.payload;
    },
  },
});

export const { changeView } = viewSlice.actions;

export const selectDisplayStyle = (state: RootState) => state.view.displayStyle;

export default viewSlice.reducer;
