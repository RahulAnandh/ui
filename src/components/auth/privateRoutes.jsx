import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavbarIndex from "../navbar";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? (
    <>
      <NavbarIndex />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
