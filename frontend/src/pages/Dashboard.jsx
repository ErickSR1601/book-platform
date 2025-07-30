import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Dashboard.css";

import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  const handleAddBook = () => {
    navigate("/registrar-libro");
  };

  const books = [
    {
      title: "Four",
      author: "Erick Solis",
      description: "4 empresas dominan al mundo",
      category: "Tecnología",
      status: "Finalizado",
      date: "24/07/2025",
    },
    {
      title: "El poder del hábito",
      author: "Charles Duhigg",
      description:
        "Cómo los hábitos influyen en nuestras vidas mas hablada par hacer un ejemplo",
      category: "Desarrollo personal",
      status: "En progreso",
      date: "20/07/2025",
    },
  ];

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
          {books.map((book, index) => (
            <BookCard key={index} book={book} onClick={setSelectedBook} />
          ))}
        </div>

        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      </div>
    </>
  );
}

export default Dashboard;
