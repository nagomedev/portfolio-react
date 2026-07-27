import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer" id="contacto">
      <p className="ciudad">Colmenar Viejo</p>
      <p className="telefono">Telefono: 647 50 57 21</p>
      <div className="footer-links">
        <a href="mailto:nagome.dev@gmail.com">Correo Electrónico</a>
        <a href="https://github.com/nagomedev" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jose-ignaciogonzalez-mesón-712381b9"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
