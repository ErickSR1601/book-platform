import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Dashboard.css";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import Navbar from "../components/Navbar";
import api from "../api/Api";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  const handleAddBook = () => {
    navigate("/books/new"); 
  };

  const fetchBooks = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get("/books", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleDeleteBook = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este libro?")) return;

    try {
      const token = sessionStorage.getItem("token");
      await api.delete(`/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));

      setSelectedBook(null);
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
      alert("No se pudo eliminar el libro");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Mi biblioteca personal</h1>
          <button className="add-book" onClick={handleAddBook}>
            Agregar libro
          </button>
        </header>

        <div className="book-list">
          {books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onClick={setSelectedBook}
              onDelete={handleDeleteBook}
            />
          ))}
        </div>

        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onEdit={(id) => {
            setSelectedBook(null);
            navigate(`/books/${id}/edit`);
          }}
          onDelete={handleDeleteBook} 
        />
      </div>
    </>
  );
}

export default Dashboard;
