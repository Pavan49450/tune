// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import { UserStateReducer } from "./LoginState/LoginStateSlice";

const store = configureStore({
  reducer: {
    login: UserStateReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
