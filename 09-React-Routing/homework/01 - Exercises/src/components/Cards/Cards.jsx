import React from "react";
import { Link } from "react-router-dom";
import styleCard from "./Card.module.css";

export default function Card({ name, image, id }) {
  return (
    // Enlace que redirige a los detalles de la tarjeta de crucero
    <Link to={`/cruises/${id}`} className={styleCard.link}>
      <div className={styleCard.container}>
        {/* Nombre de la tarjeta */}
        <h4>{name}</h4>
        {/* Imagen de la tarjeta */}
        <img src={image} alt="" />
      </div>
    </Link>
  );
}
