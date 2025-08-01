const jwt = require("jsonwebtoken");

/**
 * Generate a JWT token with the user ID
 * @param {string} userId - user ID
 * @returns {string} signed token
 */
const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Falta definir JWT_SECRET en las variables de entorno");
  }

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
