import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import feedSlice from "./feedSlide";

const appStore = configureStore({
  reducer: {
    userSlice: userInfoSlice,
    feedSlice: feedSlice,
  },
});

export default appStore;
