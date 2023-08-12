import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("http://localhost:5000/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;

        // Guarda el token en el almacenamiento local (puede usar otro método seguro en producción)
        localStorage.setItem("token", token);

        // Redirige al usuario a la página de inicio después de iniciar sesión
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="LoginContainer">
      <br />
      <form onSubmit={handleSubmit} id="FormularioLogin">
        <h3 className="TitleLogin">Inciar Sesion</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Iniciar Sesión
        </button>
        <br />
        <span className="RegisterLink">
          <a href="/registro">Registrate</a>
        </span>
      </form>
    </div>
  );
}

export default Login;
