import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
