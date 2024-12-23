import React, { useState } from "react";
import "./login.css";
import { useAppSelector, useAppDispatch } from "../../App/hooks";
import {login,logout} from '../../features/auth/authSlice';
import type { RootState } from "../../app/store";
const LoginIndex: React.FC = () => {
  const [login_data,setLoginData] = useState({user_name:"",password:""})
  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch();
  const callLoginApi = () => {
    dispatch(login(login_data));
  }
  return (
    <div className="body_background">
      <div className="login_card">
        <div className="login_heading">Login</div>
        <input
          className="login_input"
          placeholder="Username"
          onChange={(e) => {
            setLoginData({ ...login_data, user_name: e.target.value });
          }}
        ></input>
        <input
          className="login_input"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setLoginData({ ...login_data, password: e.target.value });
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
