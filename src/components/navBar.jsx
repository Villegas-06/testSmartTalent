import React from "react";
import { Link } from "react-router-dom";

import "../styles/navBar.css";

function Navbar({ user, onSignOut }) {
  return (
    <nav id="NavbarMain">
      <ul id="Logo">
        <li>LOGO</li>
        <li>
          <button className="btn btn-primary">
            <Link to="/home">Home</Link>
          </button>
        </li>
      </ul>

      {user ? (
        <ul id="Links">
          <li>
            <button onClick={onSignOut} className="btn btn-danger">
              Cerrar Sesion
            </button>
          </li>
        </ul>
      ) : (
        <ul id="Links">
          <li>
            <button className="btn btn-primary">
              <Link to="/login">Iniciar Sesion</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-primary">
              <Link to="/registro">Registrate</Link>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
