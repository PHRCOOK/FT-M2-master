import React from "react";
// Importa la biblioteca de React para poder utilizar componentes de React.

export default class Botones extends React.Component {
  // Exporta el componente "Botones" como un componente de React. Este componente es una clase que extiende la clase base "React.Component".

  render() {
    // Define el método "render" del componente, que se encarga de renderizar el contenido del componente.

    return (
      <div>
        {/* Renderiza un div que contiene dos botones */}
        <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
        {/* El primer botón tiene un evento onClick que muestra una alerta con el mensaje correspondiente a través de la prop "alerts.m1" pasada al componente */}
        <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
        {/* El segundo botón tiene un evento onClick que muestra una alerta con el mensaje correspondiente a través de la prop "alerts.m2" pasada al componente */}
      </div>
    );
  }
}

// Cierra la clase del componente "Botones".
