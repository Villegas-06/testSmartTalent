import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="Hotel-Card">
      <img
        src={hotel.Fotos[0]}
        alt={hotel.Nombre}
        width={375}
        height={250}
        style={{ marginTop: "30px" }}
      />
      <h3>{hotel.Nombre}</h3>
      <h3>{hotel.Ubicacion}</h3>
      <h3 style={{ marginBottom: "10px" }}>{hotel.Descripcion}</h3>
    </div>
  );
};

export default HotelCard;
