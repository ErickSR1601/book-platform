import { useState } from "react";
import "../styles/pages/LandingPage.css";
import Card from "../components/LandingCard";
import Footer from "../components/Footer";
import API from "../api/Api";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [modalImg, setModalImg] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (imgSrc) => setModalImg(imgSrc);
  const closeModal = () => setModalImg(null);

  const go = (path) => {
    setMenuOpen(false);
    window.location.href = path;
  };

  const closeMenuAndAnchor = () => setMenuOpen(false);

  const navigate = useNavigate();

  const handleGuestLogin = async () => {
    try {
      const { data } = await API.post("/auth/login", {
        email: "guest@bookplatform.com",
        password: "123456", // contraseña de tu usuario guest
      });

      sessionStorage.setItem("userInfo", JSON.stringify(data));
      sessionStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Error al entrar como invitado:",
        error.response?.data || error
      );
      alert("No se pudo entrar como invitado.");
    }
  };

  return (
    <div>
      <nav className="landing-navbar">
        <a href="#hero" className="landing-brand" onClick={closeMenuAndAnchor}>
          Book Platform
        </a>

        <button
          className={`landing-hamburger ${menuOpen ? "is-active" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="landing-navbar-links">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#features">Características</a>
          </li>
          <li>
            <a href="#how-it-works">Cómo funciona</a>
          </li>
          <li>
            <a href="#screenshots">Pantallas</a>
          </li>
        </ul>

        <div className="landing-navbar-right">
          <button
            className="landing-btn signup"
            onClick={() => go("/users/new")}
          >
            Registrarse
          </button>
          <button className="landing-btn login" onClick={() => go("/login")}>
            Iniciar sesión
          </button>
        </div>

        {menuOpen && (
          <div
            className="landing-mobile-menu"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="landing-mobile-menu-content"
              onClick={(e) => e.stopPropagation()}
            >
              <ul>
                <li>
                  <a href="#hero" onClick={closeMenuAndAnchor}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#features" onClick={closeMenuAndAnchor}>
                    Características
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" onClick={closeMenuAndAnchor}>
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a href="#screenshots" onClick={closeMenuAndAnchor}>
                    Pantallas
                  </a>
                </li>
              </ul>
              <div className="mobile-actions">
                <button
                  className="landing-btn signup"
                  onClick={() => go("/users/new")}
                >
                  Registrarse
                </button>
                <button
                  className="landing-btn login"
                  onClick={() => go("/login")}
                >
                  Iniciar sesión
                </button>
                <button
                  className="landing-btn guest"
                  onClick={handleGuestLogin}
                >
                  Invitado
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="landing-navbar-spacer" />

      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Bienvenido a Book Platform</h1>
          <p>Organiza, comparte y descubre libros fácilmente.</p>
          <a href="#features" className="btn" onClick={closeMenuAndAnchor}>
            Explorar
          </a>
          <button className="btn guest" onClick={handleGuestLogin}>
            Entrar como invitado
          </button>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Características principales</h2>
        <div className="features-grid">
          <Card>📚 Gestiona tus libros</Card>
          <Card>🔍 Busca y organiza</Card>
          <Card>👥 Comparte con otros</Card>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2>Cómo funciona</h2>
        <div className="steps">
          <Card>1️⃣ Regístrate en la plataforma</Card>
          <Card>2️⃣ Agrega y organiza tus libros</Card>
          <Card>3️⃣ Comparte y descubre nuevas lecturas</Card>
        </div>
      </section>

      <section id="screenshots" className="screenshots">
        <h2>Conoce un poco de Book Platform</h2>
        <div className="screenshot-row">
          <div
            className="screenshot-card"
            onClick={() => openModal("/images/Login.webp")}
          >
            <img src="/images/Login.webp" alt="Login" />
          </div>

          <div
            className="screenshot-card"
            onClick={() => openModal("/images/AddBook.webp")}
          >
            <img src="/images/AddBook.webp" alt="Add-book" />
          </div>
        </div>

        <div className="screenshot-row">
          <div
            className="screenshot-card"
            onClick={() => openModal("/images/DashboardCard.webp")}
          >
            <img src="/images/DashboardCard.webp" alt="DashboardCard" />
          </div>
          <div
            className="screenshot-card"
            onClick={() => openModal("/images/Dashboard.webp")}
          >
            <img src="/images/Dashboard.webp" alt="Dashboard" />
          </div>
        </div>

        {modalImg && (
          <div className="modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img className="modal-content" src={modalImg} alt="Ampliada" />
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
