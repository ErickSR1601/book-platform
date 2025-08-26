import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import RegisterBook from "../pages/RegisterBook";
import RegisterUser from "../pages/RegisterUser";
import Login from "../pages/Login";
import RecoverPassword from "../pages/RecoverPassword";
import EditBook from "../pages/EditBook";
import LandingPage from "../pages/LandingPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/new"
          element={
            <ProtectedRoute>
              <RegisterBook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/:id/edit"
          element={
            <ProtectedRoute>
              <EditBook />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="/users/new" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/recover" element={<RecoverPassword />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
