import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../components/firebaseAtuh"; // Asegúrate de que la importación sea correcta
import "../styles/register.css";

function Registro() {
  const navigate = useNavigate();

  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llama a la función de registro con Firebase
      await signUp(email, password);

      navigate("/login");
    } catch (error) {}
  };

  return (
    <div id="RegistroContainer">
      <form onSubmit={handleSubmit} id="FormularioRegistro">
        <h3 className="TitleLogin">Registro</h3>
        <input
          type="text"
          placeholder="Número documento"
          value={numeroDocumento}
          onChange={(e) => setNumeroDocumento(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre Completo"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
        />
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
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}

export default Registro;
