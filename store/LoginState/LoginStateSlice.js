// reducer.js

import { LOGIN, LOGOUT } from "./LoginStateActions";
// src/store/LoginState/LoginStateSlice.js

const initialUserState = {
  isUdyogiUserLoggedIn:
    typeof window !== "undefined" &&
    localStorage.getItem("isUdyogiUserLoggedIn") === "true",
  id: typeof window !== "undefined" ? localStorage.getItem("id") : null,
  role: typeof window !== "undefined" ? localStorage.getItem("role") : null,
};

const UserStateReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN:
      if (typeof window !== "undefined") {
        localStorage.setItem("isUdyogiUserLoggedIn", "true");
        localStorage.setItem("id", action.payload.id);
        localStorage.setItem("role", action.payload.role);
      }
      return {
        ...state,
        isUdyogiUserLoggedIn: true,
        id: action.payload.id,
        role: action.payload.role,
      };
    case LOGOUT:
      if (typeof window !== "undefined") {
        localStorage.setItem("isUdyogiUserLoggedIn", "false");
        localStorage.removeItem("id");
        localStorage.removeItem("role");
      }
      return {
        ...state,
        isUdyogiUserLoggedIn: false,
        id: null,
        role: null,
      };
    default:
      return state;
  }
};

export { UserStateReducer };
