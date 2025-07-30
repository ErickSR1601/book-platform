import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import "../styles/pages/RecoverPassword.css";

function RecoverPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add logic for validating and updating the password.

    navigate("/login");
  };

  return (
    <div className="recover-password-page">
      <div className="recover-password-container">
        <h1>Recuperar contraseña</h1>
        <form className="recover-password-form" onSubmit={handleSubmit}>
          <FormInput
            label="Correo electrónico"
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
          />
          <FormInput
            label="Nueva contraseña"
            name="newPassword"
            type="password"
            placeholder=""
          />
          <FormInput
            label="Confirme contraseña"
            name="confirmPassword"
            type="password"
            placeholder=""
          />

          <button type="submit" className="btn-submit">
            Actualizar contraseña
          </button>

          <div className="back-row">
            <BackButton to="/login" label="Volver" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecoverPassword;
