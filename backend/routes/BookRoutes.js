const express = require("express");
const router = express.Router();

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/BookController");

const protect = require("../middlewares/authMiddleware");

// @route   POST /api/books/register
// @desc    Create a new book
// @access  Private
router.post("/register", protect, createBook);

// @route   GET /api/books
// @desc    Get all books
// @access  Private
router.get("/", protect, getBooks);

// @route   GET /api/books/:id
// @desc    Get book by ID
// @access  Private
router.get("/:id", protect, getBookById);

// @route   PUT /api/books/edit/:id
// @desc    Update a book
// @access  Private
router.put("/edit/:id", protect, updateBook);

// @route   DELETE /api/books/delete/:id
// @desc    Delete a book
// @access  Private
router.delete("/delete/:id", protect, deleteBook);

module.exports = router;
