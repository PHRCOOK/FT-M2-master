import React, { useState } from "react";
import "./Contact.modules.css";

// Función para validar los campos del formulario
export function validate(inputs) {
  const errors = {};

  // Validación del campo "name"
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }

  // Validación del campo "email" utilizando una expresión regular
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  // Validación del campo "message"
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }

  return errors;
}

export default function Contact() {
  // Estado para almacenar los valores de los campos del formulario
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Función que se ejecuta cuando se cambia un campo del formulario
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    // Validar el campo que se ha cambiado y actualizar los errores
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos del formulario
    const errors = validate(inputs);

    // Si no hay errores, mostrar una alerta y reiniciar los campos y errores
    if (Object.keys(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } else {
      // Si hay errores, mostrar una alerta
      alert("Debe llenar todos los campos");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          name="name"
          placeholder="Escribe tu nombre..."
          type="text"
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        {errors.name && <p className="danger">{errors.name}</p>}

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          name="email"
          placeholder="Escribe tu email..."
          type="text"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        {errors.email && <p className="danger">{errors.email}</p>}

        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && "warning"}
        ></textarea>
        {errors.message && <p className="danger">{errors.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
