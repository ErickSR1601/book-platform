import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import API from "../api/Api";
import "../styles/pages/RegisterUser.css";

function RegisterUser() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones simples
    const newErrors = {};
    if (!form.email) newErrors.email = "El correo es obligatorio";
    if (!form.name) newErrors.name = "El nombre es obligatorio";
    if (!form.password) newErrors.password = "La contraseña es obligatoria";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const { data } = await API.post("/auth/", {
        email: form.email,
        name: form.name,
        password: form.password,
      });

      sessionStorage.setItem("token", data.token);

      navigate("/");
    } catch (error) {
      console.error(
        "Error al registrar usuario:",
        error.response?.data || error
      );
      alert(
        error.response?.data?.message || "Hubo un error al registrar el usuario"
      );
    }
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
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            label="Nombre"
            name="name"
            placeholder="Tu nombre completo"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormInput
            label="Contraseña"
            name="password"
            placeholder="Tu contraseña"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
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
