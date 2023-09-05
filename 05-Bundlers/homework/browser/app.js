//(function () {
//var whiteboard = window.whiteboard;
// Importar el módulo whiteboard
var whiteboard = require(`./whiteboard`);

// Importar la biblioteca socket.io-client
var io = require(`socket.io-client`);

// Crear una instancia de socket.io-client y conectar al servidor
const socket = io(window.location.origin);

// Manejar el evento de conexión exitosa
socket.on("connect", function () {
  console.log("¡Conectado!");
});

// Manejar el evento "load" para recibir los trazos existentes del servidor
socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    // Dibujar los trazos recibidos en el tablero de dibujo
    whiteboard.draw(start, end, color, false);
  });
});

// Manejar el evento "draw" para recibir trazos en tiempo real del servidor
socket.on("draw", function (start, end, color) {
  // Dibujar el trazo recibido en el tablero de dibujo
  whiteboard.draw(start, end, color, false);
});

// Manejar el evento "draw" del tablero de dibujo para emitir trazos al servidor
whiteboard.on("draw", function (start, end, color) {
  // Emitir el evento "draw" al servidor con los datos del trazo
  socket.emit("draw", start, end, color);
});

// Exportar el objeto whiteboard para su uso en otros módulos
module.exports = whiteboard;
