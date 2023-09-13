jsx;
import React from "react";
import Botones from "./Botones"; // Importa el componente Botones desde el archivo Botones.js

// Definición de variables
const studentName = "Pablo Rubiño"; // Nombre del estudiante
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"]; // Lista de habilidades técnicas
const alerts = { m1: "Aprobado", m2: "En curso" }; // Objeto que contiene mensajes de alerta

export default function Bienvenido() {
  // El componente Bienvenido es una función de React que devuelve elementos JSX

  return (
    <div>
      <h1>Soy Henry!!!</h1> {/* Título principal */}
      <h3>{studentName}</h3> {/* Muestra el nombre del estudiante */}
      <ul>
        {/* Mapea cada habilidad técnica y crea un elemento de lista */}
        {techSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />{" "}
      {/* Renderiza el componente Botones y pasa el objeto de alertas como prop */}
    </div>
  );
}

// Exporta las variables para su uso en pruebas
export { studentName, techSkills, alerts };
