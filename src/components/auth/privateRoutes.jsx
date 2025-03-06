import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavbarIndex from "../navbar";
import "./privateRoutes.css";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? (
    <div className="layout-container">
      <NavbarIndex />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
