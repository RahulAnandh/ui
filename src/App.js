import LoginIndex from "./components/login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutIndex from "./components/layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginIndex />} path="/login" />
        <Route element={<ProtectedRoute />}>
          <Route element={<LayoutIndex />} path="/layout"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
