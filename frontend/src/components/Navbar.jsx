import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaBars, FaTimes } from "react-icons/fa";
import api from "../api/Api";
import "../styles/components/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    if (
      !window.confirm(
        "¿Seguro que quieres eliminar tu cuenta? Esta acción no se puede deshacer."
      )
    ) {
      return;
    }

    try {
      const token = sessionStorage.getItem("token");

      await api.delete("/auth/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("token");
      alert("Cuenta eliminada correctamente.");
      navigate("/");
    } catch (error) {
      console.error("Error al eliminar cuenta:", error);
      alert("No se pudo eliminar la cuenta.");
    }
  };

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const firstName = userInfo?.name ? userInfo.name.split(" ")[0] : "Usuario";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBook className="navbar-icon" />
        <span className="navbar-username">Hola, {firstName}</span>
      </div>

      <div className="navbar-buttons desktop-only">
        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
        {userInfo?.role !== "guest" && (
          <button className="delete-button" onClick={handleDeleteAccount}>
            Eliminar cuenta
          </button>
        )}
      </div>

      <div className="mobile-only">
        <button
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <button className="logout-button" onClick={handleLogout}>
              Cerrar sesión
            </button>
            <button className="delete-button" onClick={handleDeleteAccount}>
              Eliminar cuenta
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
