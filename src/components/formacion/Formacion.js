import React from "react";
import "./Formacion.css";

export function Formacion() {
  return (
    <div className="formacion" id="formacion">
      <div className="formacion-lista">
        <div className="formacion-item">
          <h3>Técnico Superior en Desarrollo de Aplicaciones Web (DAW)</h3>
          <p>IFP Planeta Formación (Online) · 2023 – Actualidad</p>
        </div>
        <div className="formacion-item">
          <h3>Técnico en Sistemas Microinformáticos y Redes (SMR)</h3>
          <p>IES José Luis Sampedro (Presencial) · 2011 – 2012</p>
        </div>
      </div>

      <div className="competenciasTecnicas" id="competenciasTecnicas">
        <div className="competencia-grupo">
          <h4>Lenguajes de programación</h4>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="competencia-grupo">
          <h4>Desarrollo Web</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="competencia-grupo">
          <h4>Bases de Datos</h4>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="competencia-grupo">
          <h4>Herramientas</h4>
          <ul>
            <li>VS Code</li>
            <li>Eclipse</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
