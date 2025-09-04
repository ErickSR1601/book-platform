import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import API from "../api/Api";
import FormSelect from "../components/FormSelect";
import "../styles/pages/RegisterBook.css";

function RegisterBook() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    author: "",
    title: "",
    description: "",
    category: "",
    status: "",
  });

  const status = [
    { value: "Por leer", label: "Por leer" },
    { value: "Leyendo", label: "Leyendo" },
    { value: "Leído", label: "Leído" },
    { value: "Abandonado", label: "Abandonado" },
  ];

  const [errors, setErrors] = useState({});
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo?.role) {
      setUserRole(userInfo.role);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.author) newErrors.author = "El autor es obligatorio";
    if (!form.title) newErrors.title = "El título es obligatorio";
    if (!form.description)
      newErrors.description = "La descripción es obligatoria";
    if (!form.category) newErrors.category = "La categoría es obligatoria";
    if (!form.status) newErrors.status = "El estado es obligatorio";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const token = sessionStorage.getItem("token");

      await API.post(
        "/books",
        {
          author: form.author,
          title: form.title,
          description: form.description,
          category: form.category,
          status: form.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setForm({
        author: "",
        title: "",
        description: "",
        category: "",
        status: "",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al guardar libro:", error.response?.data || error);
      alert("Hubo un error al guardar el libro. Intenta nuevamente.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="register-book-page">
        <div className="register-book-container">
          <h1>Registrar nuevo libro</h1>
          <form onSubmit={handleSubmit} className="register-book-form">
            <FormInput
              label="Autor del libro"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
              placeholder="Ej. Antoine de Saint-Exupéry"
              error={errors.author}
            />

            <FormInput
              label="Título del libro"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Ej. El Principito"
              error={errors.title}
            />

            <FormInput
              label="Descripción"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              placeholder="Una historia sobre un niño y un planeta..."
              error={errors.description}
            />

            <FormInput
              label="Categoría"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              placeholder="Ej. Ficción, Tecnología"
              error={errors.category}
            />

            <FormSelect
              label="Estado"
              name="status"
              value={form.status}
              onChange={handleChange}
              options={status}
              required
            />

            <button
              type="submit"
              className="btn-submit"
              disabled={userRole === "guest"}
            >
              {userRole === "guest"
                ? "Los invitados no pueden guardar libros"
                : "Guardar libro"}
            </button>

            <BackButton to="/dashboard" label="Volver al Dashboard" />
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterBook;
