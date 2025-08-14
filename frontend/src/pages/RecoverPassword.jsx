import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import API from "../api/Api";
import "../styles/pages/RecoverPassword.css";

function RecoverPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!email || !newPassword || !confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await API.put("/auth/password", {
        email,
        newPassword,
        confirmPassword,
      });

      alert("Contraseña actualizada correctamente");
      navigate("/login");
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      alert(error.response?.data?.message || "Error al cambiar la contraseña");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Nueva contraseña"
            name="newPassword"
            type="password"
            placeholder=""
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <FormInput
            label="Confirme contraseña"
            name="confirmPassword"
            type="password"
            placeholder=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
