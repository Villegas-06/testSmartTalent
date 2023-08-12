import React from "react";
import "../styles/navBar.css";

function Navbar() {
  return (
    <navbar id="NavbarMain">
      <ul id="Logo">
        <li>LOGO</li>
      </ul>

      <ul id="Links">
        <li>
          <button className="btn btn-primary">
            <a href="/">Login</a>
          </button>
        </li>
        <li>
          <button className="btn btn-primary">
            <a href="/">Sign In</a>
          </button>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
