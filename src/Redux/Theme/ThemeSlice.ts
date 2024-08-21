import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  mode: string;
}

const initialState: CounterState = {
  mode: "light",
};

export const ThemeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    isCheckMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isCheckMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
