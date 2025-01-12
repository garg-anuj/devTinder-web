import { createSlice } from "@reduxjs/toolkit";

export const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeFromRequests: (state, action) => {
      return;
    },
  },
});

export const { addRequests, removeFromRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
