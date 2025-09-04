const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/GenerateToken");

// POST /api/auth/register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ message: "El correo ya está registrado" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token: generateToken({ id: newUser._id, role: newUser.role }),
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// POST /api/auth/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken({ id: user._id, role: user.role }),
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};


// PUT /api/auth/forgot-password
const forgotPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  if (!email || !newPassword || !confirmPassword) {
    return res.status(400).json({
      message: "Correo, nueva contraseña y confirmación son obligatorios",
    });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.status(200).json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    console.error("Error al restablecer la contraseña:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// DELETE /api/auth/delete
const deleteUser = async (req, res) => {
  const Book = require("../models/Book");
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await Book.deleteMany({ user: userId });

    await user.deleteOne();

    res
      .status(200)
      .json({ message: "Usuario y sus libros eliminados correctamente" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// POST /api/auth/guest
const loginGuest = async (req, res) => {
  try {
    // Generar token especial con id y role de invitado
    const guestPayload = { id: "guest", role: "guest" };

    res.status(200).json({
      _id: "guest",
      name: "Invitado",
      email: "invitado@bookplatform.com",
      role: "guest",
      token: generateToken(guestPayload),
    });
  } catch (error) {
    console.error("Error en el modo invitado:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};


module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  deleteUser,
  loginGuest,
};
