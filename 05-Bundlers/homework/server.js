// Importar los módulos necesarios
var path = require("path");
var http = require("http");
var server = http.createServer();
var express = require("express");
var app = express();
var socketio = require("socket.io");

// Configurar el servidor HTTP y Socket.IO
server.on("request", app);
var io = socketio(server);

// Array para almacenar el historial de dibujos en memoria
var inMemoryDrawHistory = [];

// Escuchar en el puerto 1337
server.listen(1337, function () {
  console.log("¡El servidor está escuchando en el puerto 1337!");
});

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "browser")));

// Ruta predeterminada para enviar el archivo index.html
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Manejar el evento de conexión de Socket.IO
io.on("connection", function (socket) {
  console.log(socket.id, "connected");

  // Enviar el historial de dibujos al cliente recién conectado
  socket.emit("load", inMemoryDrawHistory);

  // Manejar el evento "draw" del cliente
  socket.on("draw", function (start, end, color) {
    // Agregar el trazo al historial de dibujos en memoria
    inMemoryDrawHistory.push({
      start: start,
      end: end,
      color: color,
    });

    // Emitir el evento "draw" a todos los demás clientes conectados
    socket.broadcast.emit("draw", start, end, color);
  });

  // Manejar el evento de desconexión de Socket.IO
  socket.on("disconnect", function () {
    console.log("¡Adiós, ", socket.id, " :(");
  });
});
