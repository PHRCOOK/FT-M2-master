import React from "react";
// Importa la biblioteca de React para poder utilizar componentes de React.

import Bienvenido from "./components/Bienvenido.jsx";
// Importa el componente "Bienvenido" desde el archivo "./components/Bienvenido.jsx".

export default function App() {
  // Exporta el componente "App" como una función por defecto.

  return (
    <div>
      {/* Renderiza un div */}
      <Bienvenido />
      {/* Renderiza el componente "Bienvenido" */}
    </div>
  );
}

// Cierra la función del componente "App".
