import { useNavigate } from "react-router-dom";
import "../styles/components/BookCard.css";

function BookCard({ book, onClick, onDelete }) {
  const navigate = useNavigate();

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const userRole = userInfo?.role;

  const handleCardClick = (e) => {
    // Prevents clicking on buttons from triggering the modal
    if (e.target.tagName !== "BUTTON") {
      onClick(book);
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/books/${book._id}/edit`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(book._id);
  };

  return (
    <div className="book-card" onClick={handleCardClick}>
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">{book.author}</p>
      <p className="book-description">{book.description}</p>
      <p className="book-category">{book.category}</p>
      <p className="book-status">{book.status}</p>
      <p className="book-date">
        {book.createdAt
          ? new Date(book.createdAt).toLocaleDateString()
          : "Fecha no disponible"}
      </p>

      <div className="book-buttons">
        <button
          className="btn-delete"
          onClick={handleDeleteClick}
          disabled={userRole === "guest"}
        >
          {userRole === "guest" ? "No disponible" : "Eliminar"}
        </button>
        <button className="btn-add" onClick={handleEditClick}>
          Editar
        </button>
      </div>
    </div>
  );
}

export default BookCard;
