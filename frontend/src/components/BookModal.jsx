import "../styles/components/BookModal.css";

function BookModal({ book, onClose, onEdit, onDelete }) {
  if (!book) return null;

  const handleDeleteClick = () => {
    onDelete(book._id);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-book" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        <h2>{book.title}</h2>
        <p>
          <strong>Autor:</strong> {book.author}
        </p>
        <p>
          <strong>Descripción:</strong> {book.description}
        </p>
        <p>
          <strong>Categoría:</strong> {book.category}
        </p>
        <p>
          <strong>Estado:</strong> {book.status}
        </p>
        <p>
          <strong>Fecha:</strong>{" "}
          {book.createdAt
            ? new Date(book.createdAt).toLocaleDateString()
            : "Fecha no disponible"}
        </p>

        <div className="modal-buttons">
          <button className="btn-delete" onClick={handleDeleteClick}>
            Eliminar
          </button>
          <button className="btn-add" onClick={() => onEdit(book._id)}>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
