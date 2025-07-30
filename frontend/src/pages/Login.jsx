import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../styles/pages/Login.css";
import BackButton from "../components/BackButton";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the authentication logic
    navigate("/");
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
          />
          <FormInput
            label="Contraseña"
            name="password"
            placeholder=""
            type="password"
          />

          <button type="submit" className="btn-submit">
            Ingresar
          </button>

          <div className="options-row">
            <button
              type="button"
              className="btn-link"
              onClick={() => navigate("/registro-usuario")}
            >
              ¿No tienes cuenta? Regístrate
            </button>
            <button
              type="button"
              className="btn-link"
              onClick={() => alert("Funcionalidad no implementada")}
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
