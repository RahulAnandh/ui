import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LayoutIndex from "./components/layout";
import LoginIndex from "./components/login";
import { useEffect } from "react";
function App() {
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginIndex />} path="/" />
        <Route element={<LoginIndex />} path="/login" />
        <Route element={<ProtectedRoute />}>
          <Route element={<LayoutIndex />} path="/layout"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
