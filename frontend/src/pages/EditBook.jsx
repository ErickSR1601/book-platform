import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import "../styles/pages/EditBook.css";

function EditBook() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could update the book in your global state or backend.

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="edit-book-page">
        <div className="edit-book-container">
          <h1>Editar libro</h1>
          <form className="edit-book-form" onSubmit={handleSubmit}>
            <FormInput
              label="Título del libro"
              name="title"
              type="text"
              placeholder="Ej. El Principito"
            />
            <FormInput
              label="Descripción"
              name="description"
              type="text"
              placeholder="Una historia sobre un niño y un planeta..."
            />
            <FormInput
              label="Categoría"
              name="category"
              type="text"
              placeholder="Ej. Ficción, Tecnología"
            />
            <FormInput
              label="Estado"
              name="status"
              type="text"
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
