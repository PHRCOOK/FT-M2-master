import React from "react"; // Importa la librería React
import styledSpecies from "./Species.module.css"; // Importa los estilos CSS específicos para el componente Species

const Species = ({ species, handleSpecies, handleAllSpecies }) => {
  // Define un componente Species que recibe tres propiedades: species, handleSpecies y handleAllSpecies
  return (
    <div className={styledSpecies.divContent}>
      {" "}
      {/* Crea un div con una clase específica de CSS */}
      <h2>Especies</h2> {/* Muestra un título que dice "Especies" */}
      {species.map((esp, index) => {
        // Recorre el array de species y muestra un botón por cada uno
        return (
          <button
            value={esp}
            onClick={handleSpecies}
            key={index}
            className={styledSpecies.button}
          >
            {esp}
          </button>
        );
      })}
      <button onClick={handleAllSpecies} className={styledSpecies.button}>
        Todos los animales
      </button>{" "}
      {/* Muestra un botón con el texto "Todos los animales" */}
    </div>
  );
};

export default Species; // Exporta el componente Species para que pueda ser utilizado en otras partes de la aplicación.
