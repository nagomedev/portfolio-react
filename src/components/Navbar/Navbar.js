import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { UserImage } from "../img-logo/UserImage";

export function Navbar() {
  return (
    <nav className="NavbarItems">
      <div>
        <UserImage />
      </div>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Titulo}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
