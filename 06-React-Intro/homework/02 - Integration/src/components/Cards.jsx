import Card from "./Card";
// Importa el componente "Card" desde el archivo "./Card".

export default function Cards(props) {
  // Exporta por defecto la función del componente "Cards" que recibe props como argumento.

  const { characters } = props;
  // Desestructura la prop "characters" recibida en una variable llamada "characters".

  return (
    <div>
      {/* Renderiza un div */}
      {characters.map((char) => {
        // Itera sobre el arreglo "characters" y por cada elemento crea un componente "Card"
        return (
          <Card
            key={char.div}
            // Establece la prop "key" con el valor de "char.div"
            name={char.name}
            // Establece la prop "name" con el valor de "char.name"
            status={char.status}
            // Establece la prop "status" con el valor de "char.status"
            species={char.species}
            // Establece la prop "species" con el valor de "char.species"
            gender={char.gender}
            // Establece la prop "gender" con el valor de "char.gender"
            origin={char.origin.name}
            // Establece la prop "origin" con el valor de "char.origin.name"
            image={char.image}
            // Establece la prop "image" con el valor de "char.image"
            onClose={() => window.alert("Emulamos que se cierra la card")}
            // Establece la prop "onClose" con una función que muestra una alerta
          />
        );
      })}
    </div>
  );
}
