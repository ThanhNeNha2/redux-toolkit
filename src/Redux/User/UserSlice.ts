import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UsersState {
  isLoading: boolean;
  users: any;
  isError: boolean;
}

export const fetchUserById = createAsyncThunk(
  "GetUser",
  async (userId, thunkAPI) => {
    const response = await axios.get("http://localhost:8000/users");
    console.log("check response ", response);
    return response.data;
  }
);

const initialState: UsersState = {
  isLoading: false,
  users: [],
  isError: false,
};

export const usersSlide = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log("action", action);
      state.users = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = usersSlide.actions;

export default usersSlide.reducer;
