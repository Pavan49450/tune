// actions.js

export const LOGIN = "LOGINID";

export const LOGOUT = "LOGOUT";

export const loginWithid = (id, role) => ({
  type: LOGIN,
  payload: {
    id,
    role,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
