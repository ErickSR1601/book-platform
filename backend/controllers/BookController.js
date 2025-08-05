const Book = require("../models/Book");

// POST /api/books
const createBook = async (req, res) => {
  const { title, description, category, status } = req.body;

  if (!title || !description || !category || !status) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const newBook = await Book.create({
      title,
      description,
      category,
      status,
      user: req.user.id,
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error al crear el libro:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// GET /api/books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.status(200).json(books);
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// GET /api/books/:id
const getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, user: req.user.id });

    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error al obtener el libro:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// PUT /api/books/:id
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// DELETE /api/books/:id
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deletedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el libro:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
