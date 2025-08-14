import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../components/FormInput";
import API from "../api/Api"; 
import "../styles/pages/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", { email, password });

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/");
    } catch (error) {
      alert("Credenciales incorrectas");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Iniciar sesión</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <FormInput
            label="Correo electrónico"
            name="email"
            placeholder="ejemplo@correo.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Contraseña"
            name="password"
            placeholder=""
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-submit">
            Ingresar
          </button>

          <div className="options-row">
            <button
              type="button"
              className="btn-link"
              onClick={() => navigate("/users/new")}
            >
              ¿No tienes cuenta? Regístrate
            </button>
            <button
              type="button"
              className="btn-link"
              onClick={() => navigate("/password/recover")}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
