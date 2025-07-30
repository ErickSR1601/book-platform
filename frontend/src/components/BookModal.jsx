import "../styles/components/BookModal.css";

function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
          <strong>Fecha:</strong> {book.date}
        </p>

        <div className="modal-buttons">
          <button className="btn-delete">Eliminar</button>
          <button className="btn-add">Editar</button>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
