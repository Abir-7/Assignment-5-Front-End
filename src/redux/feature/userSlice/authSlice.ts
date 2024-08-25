import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  userEmail: string;
  userRole: string;
  iat: number;
  exp: number;
}

export interface IAuthState {
  user: null | IUser;
  token: null | string;
}

const initialState: IAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
