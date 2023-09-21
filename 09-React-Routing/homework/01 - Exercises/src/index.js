import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  // Configuración del enrutador para la aplicación
  <BrowserRouter>
    {/* Componente principal de la aplicación */}
    <App />
  </BrowserRouter>,
  document.getElementById("root") // Monta la aplicación en el elemento con el ID "root"
);
