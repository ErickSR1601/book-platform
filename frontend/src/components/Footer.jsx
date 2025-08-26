import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        BookPlatform es un proyecto personal enfocado en la lectura y el
        aprendizaje
      </p>
      <p className="footer-subtext">
        BookPlatform: fomentando el amor por los libros y el aprendizaje 📚
      </p>
      <div className="footer-icons">
        <a href="https://github.com/ErickSR1601" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ericksolisrojas"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Erick_so16"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} BookPlatform. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
