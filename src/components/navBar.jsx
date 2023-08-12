import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/navBar.css";

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

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
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout} className="btn btn-danger">
              Cerrar Sesion
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
