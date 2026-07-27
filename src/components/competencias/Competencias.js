import React from "react";
import { competencias } from "./CompetenciasProfesionales";
import { otros } from "./otros";
import "./Competencias.css";

export function Competencias() {
  return (
    <div className="competencias" id="competencias">
      <div>
        <p className="competencias-subtitulo">Competencias Profesionales</p>
        <ul className="list-competencias">
          {competencias.map((comp, index) => {
            return (
              <li key={index}>
                <p className={comp.cName}>{comp.Titulo}</p>
              </li>
            );
          })}
        </ul>

        <p className="competencias-subtitulo">Otros Varios</p>
        <ul className="list-otros">
          {otros.map((grupo, index) => {
            return (
              <li key={index} className={grupo.cName}>
                <span className="otros-titulo">{grupo.Titulo}</span>
                <ul className="otros-items">
                  {grupo.items.map((item, i) => (
                    <li key={i}>
                      {item.nombre}
                      {item.nivel && ` · ${item.nivel}`}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
