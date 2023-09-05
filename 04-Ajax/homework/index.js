// Mostrar amigos al hacer click en el botón

let img = $(`img`); // Selecciona todos los elementos de imagen en la página y los asigna a la variable "img"
let url = "http://localhost:5000/amigos"; // Establece la URL del servidor al que se enviarán las solicitudes

img.hide(); // Oculta todas las imágenes seleccionadas anteriormente

const fetchDataFriends = () => {
  // Define la función para obtener datos de amigos del servidor
  img.show(); // Muestra la imagen de carga mientras se obtienen los datos
  $.get(url, (data) => {
    // Realiza una solicitud GET al servidor en la URL definida anteriormente
    console.log(data); // Imprime en la consola los datos recibidos del servidor
    let lista = $("#lista"); // Selecciona el elemento de lista en la página y lo vacía
    lista.empty();
    data.map((item) => {
      // Itera sobre los datos recibidos y agrega cada elemento a la lista en la página
      lista.append(`<li>${item.name}</li>`);
    });
    img.hide(); // Oculta la imagen de carga después de que se hayan agregado todos los elementos a la lista
  });
};

const inputClean = () => {
  // Define la función para limpiar los campos de entrada en la página
  $(`#input`).val(``);
  $("#inputDelete").val(``);
};
$("#boton").click(() => {
  // Asigna la función fetchDataFriends al botón con el ID "boton" en la página
  fetchDataFriends();
});

$(`#search`).click(() => {
  // Asigna la función de búsqueda a un botón con el ID "search" en la página
  let id = $(`#input`).val(); // Obtiene el valor del campo de entrada con el ID "input"
  $.get(`${url}/${id}`, (data) => {
    // Realiza una solicitud GET al servidor para obtener detalles sobre un amigo específico
    $(`#amigo`).text(data.name); // Actualiza el elemento de la página con el nombre del amigo obtenido del servidor
  });
  inputClean(); // Limpia el campo de entrada después de realizar la búsqueda
});

$("#delete").click(() => {
  // Asigna la función de eliminación de amigos a un botón con el ID "delete" en la página
  let idBorrar = $("#inputDelete").val(); // Obtiene el valor del campo de entrada con el ID "inputDelete"
  $.ajax({
    // Realiza una solicitud DELETE al servidor para eliminar un amigo específico
    url: `${url}/${idBorrar}`,
    type: "DELETE",
    success: () => {
      // Actualiza el elemento de la página con un mensaje de éxito después de eliminar al amigo
      $("#success").text(`Tu amigo ${idBorrar} borrado exitosamente`);
      // Actualiza la lista de amigos después de eliminar uno
      fetchDataFriends();
    },
  });
  inputClean(); // Limpia el campo de entrada después de eliminar al amigo
});
