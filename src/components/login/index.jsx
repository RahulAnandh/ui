import React, { useState } from "react";
const LoginIndex = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const onFinish = (e) => {
    e.preventDefault();
    console.log("Received values of form: ", formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <form onSubmit={onFinish}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange}></input>

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange}></input>
        <input type="submit" value="SUBMIT"></input>
      </form>
    </>
  );
};
export default LoginIndex;
