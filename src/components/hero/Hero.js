import React from "react";
import "./Hero.css";

export function Hero() {
  const titulo = <h1>Jose Ignacio Gonzalez Meson</h1>;

  return (
    <div className="titulo-hero" id="home">
      {titulo}
    </div>
  );
}
