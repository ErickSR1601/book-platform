const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["Por leer", "Leyendo", "Leído", "Abandonado"],
      default: "Por leer",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
