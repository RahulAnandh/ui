import { Outlet, Navigate } from "react-router-dom";
import React from "react";
const ProtectedRoute: React.FC = () => {
  const user = null;
  return user ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
