import { useState } from "react";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import "../styles/pages/RegisterBook.css";

function RegisterBook() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.title) newErrors.title = "El título es obligatorio";
    if (!form.description)
      newErrors.description = "La descripción es obligatoria";
    if (!form.category) newErrors.category = "La categoría es obligatoria";
    if (!form.status) newErrors.status = "El estado es obligatorio";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Aquí podrías enviar los datos a una API o guardarlos localmente

    setForm({
      title: "",
      description: "",
      category: "",
      status: "",
    });
    setErrors({});
  };

  return (
    <>
      <Navbar />

      <div className="register-book-page">
        <div className="register-book-container">
          <h1>Registrar nuevo libro</h1>
          <form onSubmit={handleSubmit} className="register-book-form">
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
