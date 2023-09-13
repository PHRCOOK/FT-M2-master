import "./App.css";
// Importa el archivo CSS llamado "App.css".

//import Card from "./components/Card.jsx";
// Importa el componente "Card" desde el archivo "./components/Card.jsx".

import Cards from "./components/Cards.jsx";
// Importa el componente "Cards" desde el archivo "./components/Cards.jsx".

import SearchBar from "./components/SearchBar.jsx";
// Importa el componente "SearchBar" desde el archivo "./components/SearchBar.jsx".

import characters, { Rick } from "./data.js";
// Importa el arreglo "characters" y el objeto "Rick" desde el archivo "./data.js".

function App() {
  // Define la función del componente "App".

  return (
    <div className="App">
      {/* Renderiza un div con la clase "App" */}
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      {/* Renderiza el componente "SearchBar" y pasa la función "onSearch" como prop */}
      <Cards characters={characters} />
      {/* Renderiza el componente "Cards" y pasa el arreglo "characters" como prop */}
      {/*
        <Card
          id={Rick.id}
          name={Rick.name}
          status={Rick.status}
          species={Rick.species}
          gender={Rick.gender}
          origin={Rick.origin.name}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      */}
      {/* Renderiza el componente "Card" con las props para el personaje Rick */}
    </div>
  );
}

export default App;
// Exporta por defecto el componente "App".
