import "../styles/components/BookCard.css";

function BookCard({ book, onClick }) {
  const handleCardClick = (e) => {
    // Prevents clicking on buttons from triggering the modal
    if (e.target.tagName !== "BUTTON") {
      onClick(book);
    }
  };

  return (
    <div className="book-card" onClick={handleCardClick}>
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">{book.author}</p>
      <p className="book-description">{book.description}</p>
      <p className="book-category">{book.category}</p>
      <p className="book-status">{book.status}</p>
      <p className="book-date">{book.date}</p>

      <div className="book-buttons">
        <button className="btn-delete">Eliminar</button>
        <button className="btn-add">Editar</button>
      </div>
    </div>
  );
}

export default BookCard;
