import React from "react";
import { NavLink } from "react-router-dom";
import whatsapp from "./../images/whatsapp.png";

const NavBar = () => {
  return (
    // Sistema de navegacion
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                to="/menu"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Menú
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ubicación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline">
          <span className="me-2">Haz tu pedido</span>
          <a href="https://wa.me/526672210860" target="_blank">
            <img src={whatsapp} alt="whatsapp" height="35" />
          </a>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
