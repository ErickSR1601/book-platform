import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import "../styles/components/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBook className="navbar-icon" />
        <span className="navbar-username">Hola, Erick</span>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </nav>
  );
}

export default Navbar;
