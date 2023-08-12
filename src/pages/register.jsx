import React, { useState } from "react";
import axios from "axios";

import "../styles/register.css";

function Registro() {
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("http://localhost:5000/api/users", {
        numero_documento: numeroDocumento,
        nombre_completo: nombreCompleto,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data); // Mensaje de éxito desde el servidor

        // Limpia los campos del formulario después de la inserción
        setNumeroDocumento("");
        setNombreCompleto("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.error(err);
      });
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
