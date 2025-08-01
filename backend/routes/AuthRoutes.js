const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  forgotPassword,
} = require("../controllers/AuthController");

// @route   POST /api/auth/register
// @desc    Register new user
router.post("/register", registerUser);

// @route   POST /api/auth/login
// @desc    Start user session
router.post("/login", loginUser);

// @route   PUT /api/auth/forgot-password
// @desc    Reset password
router.put("/forgot-password", forgotPassword);

module.exports = router;
