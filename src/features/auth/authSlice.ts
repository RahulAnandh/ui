import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LoginType } from "./LoginType";
import { serviceLogin } from "../../services/AuthApi";
import axios from "axios";
export interface AuthState {
  user_name: string;
  password: string;
  is_logged_in: boolean;
  role: string;
  token: string;
}

const initialState: AuthState = {
  user_name: "",
  password: "",
  is_logged_in: false,
  role: "",
  token: "",
};
const BASE_URL = "http://localhost:3001";
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginType>) => {
      console.log("1---1", action.payload);
      axios
        .post(`${BASE_URL}/login`, {
          user_name: action.payload.user_name,
          password: action.payload.password,
        })
        .then(function (response) {
          console.log("1---2", response.data);

          if (response && response.data.is_logged_in === true) {
            // state.is_logged_in = true;
            // state.token = response.data.token;
            console.log("1---3", response.data);
            if (response.data) {
              console.log("1---4", response.data);
              window.localStorage.setItem("token", response.data.token);
              window.localStorage.setItem(
                "is_logged_in",
                response.data.is_logged_in
              );
            }
          } else {
            console.log("1---1Something Went Wrong.");
            window.alert("User does not Exist");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
