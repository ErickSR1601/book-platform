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
        {/* Dashboard: lista de libros */}
        <Route path="/" element={<Dashboard />} />
        {/* CRUD de libros */}
        <Route path="/books/new" element={<RegisterBook />} /> 
        <Route path="/books/:id/edit" element={<EditBook />} />
        {/* Usuarios */}
        <Route path="/users/new" element={<RegisterUser />} /> 
        {/* Autenticación */}
        <Route path="/login" element={<Login />} /> 
        <Route path="/password/recover" element={<RecoverPassword />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
