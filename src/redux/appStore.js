import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";

const appStore = configureStore({
  reducer: {
    userSlice: userInfoSlice,
  },
});

export default appStore;
