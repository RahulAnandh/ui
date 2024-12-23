import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LoginType } from "./LoginType";
export interface AuthState {
  user_name:string;
  password:string;
  is_logged_in: boolean;
  role: string;
  token: string;
}

const initialState: AuthState = {
  user_name:"",
  password:"",
  is_logged_in: false,
  role: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginType>) => {
      console.log("1---2", state, action.payload);
    },
    logout: (state) => {
      state.is_logged_in = false;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(state, action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
