import React from "react";
// Importa la biblioteca de React para poder utilizar componentes de React.

import Botones from "../Botones/Botones.jsx";
// Importa el componente "Botones" desde el archivo "../Botones/Botones.jsx".

import htmlImg from "../../assets/html.png";
// Importa la imagen "html.png" desde la ruta "../../assets/html.png".

import cssImg from "../../assets/css.svg";
// Importa la imagen "css.svg" desde la ruta "../../assets/css.svg".

import javascriptImg from "../../assets/javascript.png";
// Importa la imagen "javascript.png" desde la ruta "../../assets/javascript.png".

import reactImg from "../../assets/react.png";
// Importa la imagen "react.png" desde la ruta "../../assets/react.png".

import redux from "../../assets/redux.png";
// Importa la imagen "redux.png" desde la ruta "../../assets/redux.png".

import styles from "./Bienvenido.module.css";
// Importa los estilos CSS desde el archivo "./Bienvenido.module.css".

const studentName = "PABLO RUBIÑO";
// Declara la constante "studentName" con el valor "PABLO RUBIÑO".

const techSkills = [
  { tech: "Html", image: htmlImg },
  { tech: "Css", image: cssImg },
  { tech: "JavaScript", image: javascriptImg },
  { tech: "React", image: reactImg },
  { tech: "Redux", image: redux },
];
// Declara la constante "techSkills" como un arreglo de objetos con las habilidades técnicas y sus respectivas imágenes.

const alerts = { m1: "Aprobado", m2: "En curso" };
// Declara la constante "alerts" como un objeto con mensajes de alerta.

export default function Bienvenido() {
  // Exporta por defecto la función del componente "Bienvenido".

  return (
    <div>
      {/* Renderiza un div */}
      jsx
      {/* Renderiza el texto "jsx" */}
      <div className={styles.divBienvenido}>
        {/* Renderiza un div con la clase "divBienvenido" */}
        <h1 className={styles.title}>soy Henry!</h1>
        {/* Renderiza un encabezado h1 con la clase "title" */}
        <h3>{studentName}</h3>
        {/* Renderiza un encabezado h3 con el valor de la constante "studentName" */}
        <ul className={styles.unorderedList}>
          {/* Renderiza una lista desordenada con la clase "unorderedList" */}
          {techSkills.map((skill) => (
            // Itera sobre el arreglo "techSkills" y por cada elemento crea un li
            <li className={styles.listItem} key={skill.tech}>
              {/* Renderiza un li con la clase "listItem" y una clave única */}
              {skill.tech}
              {/* Renderiza el nombre de la habilidad técnica */}
              <img src={skill.image} alt={skill.tech} />
              {/* Renderiza una imagen con la URL proporcionada en la propiedad "image" y un atributo alt con el nombre de la habilidad técnica */}
            </li>
          ))}
        </ul>
        <Botones alerts={alerts} />
        {/* Renderiza el componente "Botones" y pasa la constante "alerts" como prop */}
      </div>
    </div>
  );
}

export { studentName, techSkills, alerts };
// Exporta las constantes "studentName", "techSkills" y "alerts".
