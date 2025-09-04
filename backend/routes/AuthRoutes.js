const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  forgotPassword,
  deleteUser,
  loginGuest,
} = require("../controllers/AuthController");

const protect = require("../middlewares/AuthMiddleware");

// @route   POST /api/auth/register
// @desc    Register new user
router.post("/", registerUser);

// @route   POST /api/auth/login
// @desc    Start user session
router.post("/login", loginUser);

// @route   POST /api/auth/guest
// @desc    Start guest session (limited access)
router.post("/guest", loginGuest);

// @route   PUT /api/auth/password
// @desc    Reset password
router.put("/password", forgotPassword);

// @route   DELETE /api/auth/delete
// @desc    Delete user (requires authentication)
router.delete("/delete", protect, deleteUser);

module.exports = router;
