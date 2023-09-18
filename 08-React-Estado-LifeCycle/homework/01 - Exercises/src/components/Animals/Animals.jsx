import React from "react"; // Importa la librería React

import styledAnimals from "./Animals.module.css"; // Importa los estilos CSS específicos para el componente Animals

class Animals extends React.Component {
  // Define una clase de componente llamada Animals que extiende de React.Component

  constructor(props) {
    // Define el constructor del componente que recibe las props
    super(props); // Llama al constructor de la clase padre (React.Component) y pasa las props
  }

  render() {
    // Define el método de renderizado del componente
    return (
      <div className={styledAnimals.container}>
        {" "}
        {/* Crea un div con una clase específica de CSS */}
        {this.props.animals.map((animal, index) => {
          // Itera sobre el array de animales y muestra un div para cada uno
          return (
            <div key={index} className={styledAnimals.containerAnimals}>
              {" "}
              {/* Crea un div para cada animal y asigna una clave única */}
              <h5>{animal.name}</h5>{" "}
              {/* Muestra el nombre del animal como un título h5 */}
              <img src={animal.image} alt={animal.name} width="300px" />{" "}
              {/* Muestra la imagen del animal con su nombre como texto alternativo */}
              <br /> {/* Agrega un salto de línea */}
              <span>{animal.specie}</span>{" "}
              {/* Muestra la especie del animal como un span */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Animals; // Exporta el componente Animals para que pueda ser utilizado en otras partes de la aplicación.
