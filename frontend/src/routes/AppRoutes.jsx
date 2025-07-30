import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import RegisterBook from "../pages/RegisterBook";
import RegisterUser from "../pages/RegisterUser";
import Login from "../pages/Login";
import RecoverPassword from "../pages/RecoverPassword";
import EditBook from "../pages/EditBook";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/registrar-libro" element={<RegisterBook />} />
        <Route path="/registro-usuario" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-contrasena" element={<RecoverPassword />} />
        <Route path="/editar-libro" element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
