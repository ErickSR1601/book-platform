const express = require("express");
const router = express.Router();

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/BookController");

const protect = require("../middlewares/AuthMiddleware");

// @route   POST /api/books
// @desc    Create a new book
// @access  Private
router.post("/", protect, createBook);

// @route   GET /api/books
// @desc    Get all books
// @access  Private
router.get("/", protect, getBooks);

// @route   GET /api/books/:id
// @desc    Get book by ID
// @access  Private
router.get("/:id", protect, getBookById);

// @route   PUT /api/books/:id
// @desc    Update a book
// @access  Private
router.put("/:id", protect, updateBook);

// @route   DELETE /api/books/:id
// @desc    Delete a book
// @access  Private
router.delete("/:id", protect, deleteBook);

module.exports = router;
