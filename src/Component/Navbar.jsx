import React, { useState } from "react";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const closeNavbar = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <h1 className="navbar-brand text-light">Ahmed Amer</h1>
        <ul className={menuOpen ? "nav responsive" : "nav"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link text-light"
              onClick={closeNavbar}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className="nav-link text-light"
              onClick={closeNavbar}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link text-light"
              onClick={closeNavbar}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link text-light"
              onClick={closeNavbar}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
        <button
          className="navbar-toggler btn btn-dark text-light"
          onClick={toggleNavbar}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
