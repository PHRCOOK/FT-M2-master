export default function SearchBar(props) {
  // Exporta por defecto la función del componente "SearchBar" que recibe props como argumento.

  const { onSearch } = props;
  // Desestructura la prop "onSearch" recibida en una variable llamada "onSearch".

  return (
    <div>
      {/* Renderiza un div */}
      <input type="search" />
      {/* Renderiza un input de tipo "search" */}
      <button onClick={onSearch}>Agregar</button>
      {/* Renderiza un botón con un evento onClick que ejecuta la función "onSearch" */}
    </div>
  );
}
