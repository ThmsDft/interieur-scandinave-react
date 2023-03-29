import React from "react";
import Logo from "../img/logo.svg";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          <img src={Logo} alt="Logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalogue"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mon-histoire"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Mon Histoire
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
