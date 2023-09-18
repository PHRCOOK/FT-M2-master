import React from "react"; // Importar la biblioteca React para trabajar con componentes de React
import Animals from "../Animals/Animals"; // Importar el componente Animals desde el archivo "../Animals/Animals"
import Species from "../Species/Species"; // Importar el componente Species desde el archivo "../Species/Species"
import styledZoo from "./Zoo.module.css"; // Importar estilos CSS desde el archivo "./Zoo.module.css" (comentado)

const Zoo = () => {
  const [zoo, setZoo] = React.useState({
    zooName: ``,
    animals: [],
    species: [],
    allAnimals: [],
  });
  // Definir el estado inicial del componente Zoo con un objeto que tiene propiedades zooName, animals, species y allAnimals

  const handleInputChange = (event) => {
    // Función para manejar el cambio en el input de nombre del zoológico
    setZoo({
      ...zoo,
      zooName: event.target.value,
    });
  };

  React.useEffect(() => {
    // Efecto que se ejecuta una vez al cargar el componente Zoo
    fetch("http://localhost:3001/zoo")
      // Realizar una petición GET a la URL "http://localhost:3001/zoo"
      .then((res) => res.json())
      // Convertir la respuesta en formato JSON
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      // Actualizar el estado del componente con los datos obtenidos del servidor
      .catch((error) => console.log(error));
    // Manejar cualquier error que ocurra durante la petición
  }, []);

  const handleSpecies = (event) => {
    // Función para manejar el cambio en la selección de especie
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(
        (animal) => animal.specie === event.target.value
      ),
    });
  };

  const handleAllSpecies = () => {
    // Función para mostrar todos los animales sin filtrar por especie
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  };

  return (
    <div className={styledZoo.divContent}>
      <div className={styledZoo.divContentTitle}>
        <label className={styledZoo.title}>Zoo Name:</label>
        {/* Etiqueta de texto para el nombre del zoológico */}
        <input
          type="text"
          value={zoo.zooName}
          onChange={handleInputChange}
          className={styledZoo.divContentTitleInput}
        />
        {/* Input para ingresar el nombre del zoológico */}
        <h1>{zoo.zooName}</h1>
        {/* Título con el nombre del zoológico */}
        <Species
          species={zoo.species}
          handleSpecies={handleSpecies}
          handleAllSpecies={handleAllSpecies}
        />
        {/* Componente Species con las especies y funciones de manejo de selección */}
        <Animals animals={zoo.animals} />
        {/* Componente Animals con los animales del zoológico */}
      </div>
    </div>
  );
};

export default Zoo;
// Exportar el componente Zoo como el componente por defecto del archivo
