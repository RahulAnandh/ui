import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/auth/privateRoutes";

import LoginIndex from "./components/login";
import HomeIndex from "./components/home/index";
import ProfileIndex from "./components/profile";

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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
