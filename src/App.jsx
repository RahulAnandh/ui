import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/auth/privateRoutes";

import LoginIndex from "./components/login";
import HomeIndex from "./components/home/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LoginIndex />} path="/login"></Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomeIndex />} path="/home"></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
