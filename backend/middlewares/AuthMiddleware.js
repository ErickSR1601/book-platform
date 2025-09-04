const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware para proteger rutas privadas
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "Usuario no encontrado" });
      }

      if (user.role === "guest" && req.method.toUpperCase() !== "GET") {
        return res
          .status(403)
          .json({ message: "Los invitados solo pueden ver datos" });
      }

      req.user = user;

      next();
    } catch (error) {
      console.error("Error al verificar el token:", error);
      return res.status(401).json({ message: "No autorizado, token inválido" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "No autorizado, token no proporcionado" });
  }
};

module.exports = protect;
