import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import API from "../api/Api";
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

  const [errors, setErrors] = useState({});

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
      const token = localStorage.getItem("token");

      await API.post(
        "/books/register",
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
      navigate("/");
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
              error={errors.title}
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

            <FormInput
              label="Estado"
              name="status"
              value={form.status}
              onChange={handleChange}
              required
              placeholder="Ej. Leyendo, Finalizado, Pendiente"
              error={errors.status}
            />

            <button type="submit" className="btn-submit">
              Guardar libro
            </button>
            <BackButton to="/" label="Volver al Dashboard" />
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterBook;
