import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";

export default function App() {
  return (
    <div>
      {/* Renderiza el componente de navegación */}
      <NavBar />
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la página de envío */}
        <Route path="/shipping" element={<Shipping />} />

        {/* Ruta para la página de descuentos */}
        <Route path="/discounts" element={<Discounts />} />

        {/* Ruta para los detalles de la tarjeta de crucero */}
        <Route path="/cruises/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
}
