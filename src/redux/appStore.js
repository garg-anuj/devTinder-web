import { configureStore } from "@reduxjs/toolkit";

import userInfoSlice from "./userInfoSlice";
import feedSlice from "./feedSlide";
import connectionsSlice from "./connectionsSlice";
import requestsSlice from "./requestsSlice";

const appStore = configureStore({
  reducer: {
    userSlice: userInfoSlice,
    feedSlice: feedSlice,
    connections: connectionsSlice,
    requests: requestsSlice,
  },
});

export default appStore;
