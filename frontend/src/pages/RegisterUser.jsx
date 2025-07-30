import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import "../styles/pages/RegisterUser.css";

function RegisterUser() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could do shipping logic

    navigate("/");
  };

  return (
    <div className="register-user-page">
      <div className="register-user-container">
        <h1>Crear cuenta</h1>
        <form className="register-user-form" onSubmit={handleSubmit}>
          <FormInput
            label="Correo electrónico"
            name="email"
            placeholder="ejemplo@correo.com"
            type="email"
          />
          <FormInput
            label="Nombre"
            name="name"
            placeholder="Tu nombre completo"
          />
          <FormInput
            label="Contraseña"
            name="password"
            placeholder="Tu contraseña"
            type="password"
          />

          <button type="submit" className="btn-submit">
            Registrar
          </button>

          <BackButton to="/" label="Volver" />
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
