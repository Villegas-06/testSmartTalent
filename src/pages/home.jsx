import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import HotelCard from "../components/hotel";

import "../styles/home.css";

const Home = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  const [show, setShow] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [hotels, setHotels] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (event) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    const files = Array.from(event.target.files);

    const selectedValidFiles = files.filter((file) =>
      allowedTypes.includes(file.type)
    );

    setSelectedFiles(selectedValidFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Realiza acciones con los archivos seleccionados
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/hoteles")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="HomeContainer">
      <div className="container">
        <Button variant="primary" onClick={handleShow}>
          Crear Hotel
        </Button>

        {/* Mostrar la info de los hoteles */}

        <div className="MostrarHoteles">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Nuevo Hotel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              action=""
              method="post"
              id="NuevoHotel"
              onSubmit={handleSubmit}
            >
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Ubicación" />
              <input type="text" placeholder="Descripción" />
              <label>
                <span>Foto Hotel:</span>
                <input
                  type="file"
                  multiple
                  accept=".jpg, .png"
                  onChange={handleFileChange}
                />
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
