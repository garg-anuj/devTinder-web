import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "userFeed",
  initialState: null,
  reducers: {
    addFeeds: (state, action) => {
      return action.payload;
    },
    removeUserFromFeed: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
  },
});

export const { addFeeds, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
