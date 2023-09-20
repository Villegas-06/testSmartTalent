import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import firebaseApp from "../components/firebaseConfig";

import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(firebaseApp); // Obtén la instancia de autenticación de Firebase

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Inicia sesión con Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Redirige al usuario a la página de inicio después de iniciar sesión
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div id="LoginContainer">
      <br />
      <form onSubmit={handleSubmit} id="FormularioLogin">
        <h3 className="TitleLogin">Iniciar Sesión</h3>
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
          <a href="/registro">Registrarse</a>
        </span>
      </form>
    </div>
  );
}

export default Login;
