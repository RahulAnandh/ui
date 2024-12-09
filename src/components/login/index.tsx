import React, { useState } from "react";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";

import { login } from "../../features/auth/authSlice";

const LoginIndex: React.FC = () => {
  const [loginData, setLoginData] = useState({ user_name: "", password: "" });
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const callLoginApi = () => {
    dispatch(login(loginData));
    // console.log("1---1", loginData);
  };
  return (
    <div className="body_background">
      <div className="login_card">
        <div className="login_heading">Login</div>
        <input
          className="login_input"
          placeholder="Username"
          onChange={(e) => {
            setLoginData({ ...loginData, user_name: e.target.value });
          }}
        ></input>
        <input
          className="login_input"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
        ></input>
        <button className="login_button" onClick={callLoginApi}>
          Login
        </button>
      </div>
    </div>
  );
};
export default LoginIndex;
