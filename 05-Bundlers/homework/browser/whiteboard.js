//(function () {
//window.whiteboard = new window.EventEmitter();
// Importar el módulo EventEmitter personalizado
const EventEmitter = require("./event-emitter");

// Crear una instancia de EventEmitter llamada "whiteboard"
const whiteboard = new EventEmitter();

// Variable para almacenar el color del trazo
var color;

// Obtener los elementos de selección de color del DOM
var colorElements = [].slice.call(document.querySelectorAll(".marker"));

// Configurar el color de fondo de cada elemento según su ID y agregar un controlador de clic
colorElements.forEach(function (el) {
  el.style.backgroundColor = el.id;
  el.addEventListener("click", function () {
    // Establecer el color seleccionado y actualizar la clase "selected"
    color = this.id;
    document.querySelector(".selected").classList.remove("selected");
    this.classList.add("selected");
  });
});

// Obtener el lienzo y su contexto 2D
var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");

// Función para redimensionar el lienzo según el tamaño del contenedor
function resize() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var pixelRatio = window.devicePixelRatio || 1;
  var w = canvas.clientWidth * pixelRatio,
    h = canvas.clientHeight * pixelRatio;
  if (w !== canvas.width || h !== canvas.height) {
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = w;
    canvas.height = h;
    ctx.putImageData(imgData, 0, 0);
  }
  ctx.scale(pixelRatio, pixelRatio);
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
}

// Llamar a la función resize para inicializar el tamaño del lienzo
resize();

// Agregar un controlador de evento para redimensionar el lienzo cuando se cambia el tamaño de la ventana
window.addEventListener("resize", resize);

// Variables para almacenar la posición del mouse actual y anterior, y el estado de dibujo
var currentMousePosition = { x: 0, y: 0 };
var lastMousePosition = { x: 0, y: 0 };
var drawing = false;

// Agregar controladores de eventos para el inicio, fin y movimiento del dibujo en el lienzo
canvas.addEventListener("mousedown", function (e) {
  drawing = true;
  currentMousePosition.x = e.pageX - this.offsetLeft;
  currentMousePosition.y = e.pageY - this.offsetTop;
});

canvas.addEventListener("mouseup", function () {
  drawing = false;
});

canvas.addEventListener("mousemove", function (e) {
  if (!drawing) return;
  lastMousePosition.x = currentMousePosition.x;
  lastMousePosition.y = currentMousePosition.y;
  currentMousePosition.x = e.pageX - this.offsetLeft;
  currentMousePosition.y = e.pageY - this.offsetTop;
  // Llamar al método "draw" de whiteboard para dibujar una línea
  whiteboard.draw(lastMousePosition, currentMousePosition, color, true);
});

// Definir el método "draw" en el objeto whiteboard
whiteboard.draw = function (start, end, strokeColor, shouldBroadcast) {
  ctx.beginPath();
  ctx.strokeStyle = strokeColor || "black";
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.closePath();
  ctx.stroke();
  // Si shouldBroadcast es verdadero, emitir un evento "draw" con los datos de inicio, fin y color
  if (shouldBroadcast) {
    whiteboard.emit("draw", start, end, strokeColor);
  }
};

// Exportar el objeto whiteboard para su uso en otros módulos
module.exports = whiteboard;
