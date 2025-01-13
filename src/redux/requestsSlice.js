import { createSlice } from "@reduxjs/toolkit";

export const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeFromRequests: (state, action) => {
      const connectionRequestId = action.payload; //connectionId
      const filteredRequests = state.filter(
        (request) => request._id !== connectionRequestId
      );
      return filteredRequests;
    },
  },
});

export const { addRequests, removeFromRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
