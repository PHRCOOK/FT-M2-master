export default function Card(props) {
  // Exporta por defecto la función del componente "Card" que recibe props como argumento.

  const { id, name, status, species, gender, origin, image, onClose } = props;
  // Desestructura las props recibidas en variables individuales.

  return (
    <div>
      {/* Renderiza un div */}
      {
        <>
          {/* Renderiza un fragmento */}
          <button onClick={onClose}>X</button>
          {/* Renderiza un botón con un evento onClick que ejecuta la función onClose */}
          <h2>{name}</h2>
          {/* Renderiza un encabezado con el nombre */}
          <h2>{status}</h2>
          {/* Renderiza un encabezado con el estado */}
          <h2>{species}</h2>
          {/* Renderiza un encabezado con la especie */}
          <h2>{gender}</h2>
          {/* Renderiza un encabezado con el género */}
          <h2>{origin.name}</h2>
          {/* Renderiza un encabezado con el nombre del origen */}
          <img src={image} alt="" />
          {/* Renderiza una imagen con la URL proporcionada en la prop "image" */}
        </>
      }
    </div>
  );
}
