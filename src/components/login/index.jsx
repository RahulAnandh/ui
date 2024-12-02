import { useState } from "react";
import "./login.css";
const LoginIndex = () => {
  const [loginData, setLoginData] = useState({ user_name: "", password: "" });
  const callLoginApi = () => {
    console.log("1---1", loginData);
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
