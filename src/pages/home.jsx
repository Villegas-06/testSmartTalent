import React from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="HomeContainer">
      <h1>Hola Home</h1>
    </div>
  );
}

export default Home;
