import React from "react";
import logo from "./logo.svg";
import "./Logo.css";

export function UserImage() {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo" />
    </div>
  );
}
