import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/auth/privateRoutes";

import LoginIndex from "./components/login";
import HomeIndex from "./components/home/index";
import ProfileIndex from "./components/profile";
import PageNotFound404 from "./components/page_not_found_404";
import DashboardIndex from "./components/dashbord";
import EmployeeIndex from "./components/employee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LoginIndex />} path="/login"></Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomeIndex />} path="/"></Route>
            <Route element={<HomeIndex />} path="/home"></Route>
            <Route element={<ProfileIndex />} path="/profile"></Route>
            <Route element={<DashboardIndex />} path="/dashboard"></Route>
            <Route element={<EmployeeIndex />} path="/employee"></Route>
            <Route element={<PageNotFound404 />} path="*"></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
