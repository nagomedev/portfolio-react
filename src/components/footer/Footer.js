import React from "react";
import "./Footer.css";
import gmailIcon from "../img/gmail.svg";
import gitHubIcon from "../img/github.svg";
import houseIcon from "../img/map-marker-svgrepo-com.svg";
import linkedinIcon from "../img/linkedin-svgrepo-com.svg";

export function Footer() {
  return (
    <footer className="footer" id="contacto">
      <p className="ciudad">
        <img className="footer-icon" src={houseIcon} alt="Gmail"></img> Colmenar
        Viejo
      </p>
      <p className="telefono">Telefono: 647 50 57 21</p>
      <div className="footer-links">
        <a className="footer-icon" href="mailto:nagome.dev@gmail.com">
          <img className="footer-icon" src={gmailIcon} alt="Gmail"></img>
        </a>
        <a href="https://github.com/nagomedev" target="_blank" rel="noreferrer">
          <img className="footer-icon" src={gitHubIcon} alt="github"></img>
        </a>
        <a
          href="https://linkedin.com/in/jose-ignaciogonzalez-mesón-712381b9"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer-icon" src={linkedinIcon} alt="Linkedin"></img>
        </a>
      </div>
    </footer>
  );
}
