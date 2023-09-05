//(function () {
//window.EventEmitter = EventEmitter;

// our EventEmitter constructor function
function EventEmitter() {
  // Objeto para almacenar los suscriptores de eventos
  this.subscribers = {};
}

// Método "on" para suscribirse a un evento
EventEmitter.prototype.on = function (eventName, eventListener) {
  // Si el objeto de suscriptores de esta instancia aún no tiene
  // la clave que coincide con el nombre del evento dado, crea la
  // clave y asigna el valor de un array vacío.
  if (!this.subscribers[eventName]) {
    this.subscribers[eventName] = [];
  }
  // Agrega la función de escucha del evento dado al array
  // ubicado en el objeto de suscriptores de esta instancia.
  this.subscribers[eventName].push(eventListener);
};

// Método "emit" para emitir un evento
EventEmitter.prototype.emit = function (eventName) {
  // Si no hay suscriptores para este nombre de evento, ¿por qué continuar?
  if (!this.subscribers[eventName]) {
    return;
  }
  // Obtén los argumentos restantes de nuestra función emit.
  var remainingArgs = [].slice.call(arguments, 1);
  // Para cada suscriptor, llámalo con nuestros argumentos.
  this.subscribers[eventName].forEach(function (listener) {
    listener.apply(null, remainingArgs);
  });
};

// Exportar el constructor EventEmitter para su uso en otros módulos
module.exports = EventEmitter;
