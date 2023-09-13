import React from "react";
// Importa la biblioteca de React para poder utilizar componentes de React.

import styled from "styled-components";
// Importa la biblioteca de styled-components para poder utilizar estilos CSS en los componentes.

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
// Define un componente estilizado llamado "DivButtons" que representa un div con estilos flexibles.

const Buttons = styled.button`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;
// Define un componente estilizado llamado "Buttons" que representa un botón con estilos CSS.

export default class Botones extends React.Component {
  // Exporta por defecto la clase del componente "Botones" que extiende de React.Component.

  render() {
    // Define el método de renderizado del componente "Botones".

    const { alerts } = this.props;
    // Desestructura la prop "alerts" recibida en una variable llamada "alerts".

    return (
      <DivButtons>
        {/* Renderiza el componente estilizado "DivButtons" */}
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        {/* Renderiza el componente estilizado "Buttons" con un evento onClick que muestra una alerta con el valor de "alerts.m1" */}
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
        {/* Renderiza el componente estilizado "Buttons" con un evento onClick que muestra una alerta con el valor de "alerts.m2" */}
      </DivButtons>
    );
  }
}

export { DivButtons, Buttons };
// Exporta los componentes estilizados "DivButtons" y "Buttons".
