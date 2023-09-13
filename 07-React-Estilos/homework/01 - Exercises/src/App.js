import React from "react";
// Importa la biblioteca de React para poder utilizar componentes de React.

import Bienvenido from "./components/Bienvenido/Bienvenido.jsx";
// Importa el componente "Bienvenido" desde el archivo "./components/Bienvenido/Bienvenido.jsx".

export default function App() {
  // Exporta por defecto la función del componente "App".

  return (
    <div>
      {/* Renderiza un div */}
      <Bienvenido />
      {/* Renderiza el componente "Bienvenido" */}
    </div>
  );
}
