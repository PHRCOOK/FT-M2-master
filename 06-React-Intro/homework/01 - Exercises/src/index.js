import React from "react";
// Importa la biblioteca de React para poder utilizar componentes de React.

import ReactDOM from "react-dom";
// Importa la biblioteca de ReactDOM para renderizar los componentes de React en el DOM.

import "./index.css";
// Importa el archivo CSS llamado "index.css".

import App from "./App";
// Importa el componente "App" desde el archivo "./App".

ReactDOM.render(
  // Renderiza el componente principal de la aplicación en el DOM.
  <App />,
  // Renderiza el componente "App" dentro del elemento raíz del DOM.
  document.getElementById("root")
  // Obtiene el elemento con el id "root" en el DOM donde se renderizará la aplicación.
);
