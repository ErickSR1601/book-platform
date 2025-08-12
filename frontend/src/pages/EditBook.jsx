import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import API from "../api/Api";
import "../styles/pages/EditBook.css";

function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    author: "",
    title: "",
    description: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await API.get(`/books/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setForm({
          author: data.author,
          title: data.title,
          description: data.description,
          category: data.category,
          status: data.status,
        });
      } catch (error) {
        console.error("Error al obtener libro:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await API.put(`/books/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Libro actualizado correctamente");
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar libro:", error);
      alert("Error al actualizar libro");
    }
  };

  return (
    <>
      <Navbar />

      <div className="edit-book-page">
        <div className="edit-book-container">
          <h1>Editar libro</h1>
          <form className="edit-book-form" onSubmit={handleSubmit}>
            <FormInput
              label="Autor"
              name="author"
              type="text"
              value={form.author}
              onChange={handleChange}
              placeholder="Ej. Antoine de Saint-Exupéry"
            />
            <FormInput
              label="Título del libro"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Ej. El Principito"
            />
            <FormInput
              label="Descripción"
              name="description"
              type="text"
              value={form.description}
              onChange={handleChange}
              placeholder="Una historia sobre un niño y un planeta..."
            />
            <FormInput
              label="Categoría"
              name="category"
              type="text"
              value={form.category}
              onChange={handleChange}
              placeholder="Ej. Ficción, Tecnología"
            />
            <FormInput
              label="Estado"
              name="status"
              type="text"
              value={form.status}
              onChange={handleChange}
              placeholder="Ej. Leyendo, Finalizado, Pendiente"
            />

            <button type="submit" className="btn-submit">
              Guardar cambios
            </button>

            <div className="button-row">
              <BackButton to="/" label="Cancelar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditBook;
