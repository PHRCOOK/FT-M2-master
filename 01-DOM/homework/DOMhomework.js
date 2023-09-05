// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

let toDoItems = [];

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:

let nombre = "Pablo Rubiño"; //Esta línea de código declara una variable llamada "nombre" y le asigna el valor de "Pablo Rubiño". Aquí se está almacenando el nombre "Pablo Rubiño" en la variable "nombre".
let span = document.querySelector("#createdBy"); //Esta línea de código declara una variable llamada "span" y utiliza el método "querySelector" del objeto "document" para seleccionar un elemento del documento HTML. En este caso, se está seleccionando un elemento con el ID "createdBy" y almacenándolo en la variable "span".
span.innerHTML += " " + nombre; //Esta línea de código accede a la propiedad "innerHTML" del elemento seleccionado y le añade el contenido "Pablo Rubiño" al final. El operador "+=" se utiliza para concatenar el contenido existente con el nuevo contenido.

// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo(description) {
  // Esta es la definición de una función llamada ToDo que acepta un parámetro "description"
  // La función se utilizará para crear objetos de tipo ToDo

  this.description = description;
  // Aquí se asigna el valor del parámetro "description" al atributo "description" del objeto
  // "this" se refiere al objeto actual que se está creando

  this.complete = false;
  // Se asigna el valor "false" al atributo "complete" del objeto
  // Esto indica que la tarea no está completa inicialmente
}
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:

ToDo.prototype.completeToDo = function () {
  this.complete = true;
}; //Esta línea de código agrega un método llamado "completeToDo" al prototipo de la función constructora "ToDo". Este método se utilizará para marcar una tarea como completada.

//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell

function buildToDo(todo, index) {
  // Esta es la definición de una función llamada buildToDo que acepta dos parámetros: todo y index
  // La función se utilizará para construir y retornar un elemento HTML que representa una tarea

  // Tu código acá:
  /*let toDoShell = document.createElement("div");
  toDoShell.classList.add("toDoShell");

  let toDoText = document.createElement("span");
  toDoText.innerHTML = todo.description;
  toDoText.id = index;

  if (todo.complete) {
    toDoText.classList.add("completeText");
  }

  toDoShell.appendChild(toDoText);

  return toDoShell;*/

  let toDoShell = document.createElement("div");
  // Se crea un elemento <div> y se almacena en la variable toDoShell
  // Este elemento será el contenedor principal de la tarea

  toDoShell.classList.add("toDoShell");
  // Se agrega la clase "toDoShell" al elemento toDoShell
  // Esto se utiliza para aplicar estilos CSS específicos a este contenedor

  let toDoText = document.createElement("span");
  // Se crea un elemento <span> y se almacena en la variable toDoText
  // Este elemento se utilizará para mostrar la descripción de la tarea

  toDoText.innerHTML = todo.description;
  // Se asigna el valor de la propiedad "description" del objeto "todo" al contenido HTML del elemento toDoText
  // Esto mostrará la descripción de la tarea en el elemento span

  let checkbox = document.createElement("input");
  // Se crea un elemento <input> y se almacena en la variable checkbox
  // Este elemento se utilizará como un checkbox para marcar la tarea como completada

  checkbox.type = "checkbox";
  // Se asigna el tipo "checkbox" al elemento checkbox

  checkbox.id = index;
  // Se asigna el valor del parámetro "index" como el ID del elemento checkbox
  // Esto se utiliza para identificar de manera única cada checkbox

  checkbox.classList.add("completeCheckbox");
  // Se agrega la clase "completeCheckbox" al elemento checkbox
  // Esto se utiliza para aplicar estilos CSS específicos a este checkbox

  checkbox.addEventListener("click", completeToDo);
  // Se agrega un event listener al elemento checkbox para el evento "click"
  // Cuando se haga clic en el checkbox, se llamará a la función completeToDo

  if (todo.complete) {
    checkbox.checked = true;
    // Si la propiedad "complete" del objeto "todo" es verdadera, se marca el checkbox como seleccionado
  }

  toDoShell.appendChild(checkbox);
  // Se agrega el elemento checkbox como hijo del elemento toDoShell
  // Esto lo colocará dentro del contenedor principal de la tarea

  toDoShell.appendChild(toDoText);
  // Se agrega el elemento toDoText como hijo del elemento toDoShell
  // Esto mostrará la descripción de la tarea dentro del contenedor principal

  return toDoShell;
  // Se retorna el elemento toDoShell, que representa la tarea completa
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {
  // Esta es la definición de una función llamada buildToDos que acepta un parámetro toDos
  // La función se utilizará para construir y retornar un array de elementos HTML que representan las tareas

  return toDos.map((todo, index) => buildToDo(todo, index));
  // Se utiliza el método map en el array toDos para iterar sobre cada elemento del array
  // Por cada elemento, se llama a la función buildToDo pasando el elemento y su índice como argumentos
  // El resultado de cada llamada a buildToDo se almacena en un nuevo array que se retorna al final
}
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Esta es la definición de una función llamada displayToDos
  // La función se utilizará para mostrar las tareas en el documento HTML

  let toDoContainer = document.querySelector("#toDoContainer");
  // Se selecciona el elemento del documento HTML con el ID "toDoContainer" y se almacena en la variable toDoContainer
  // Este elemento será el contenedor donde se mostrarán las tareas

  toDoContainer.innerHTML = "";
  // Se vacía el contenido HTML del elemento toDoContainer
  // Esto se hace para asegurarse de que no haya tareas anteriores mostradas antes de agregar las nuevas tareas

  let toDos = buildToDos(toDoItems);
  // Se llama a la función buildToDos pasando el array toDoItems como argumento
  // Esto construirá y retornará un array de elementos HTML que representan las tareas

  toDos.forEach((toDo) => {
    // Se utiliza el método forEach en el array toDos para iterar sobre cada elemento del array

    toDoContainer.appendChild(toDo);
    // Se agrega cada elemento del array toDos como hijo del elemento toDoContainer
    // Esto mostrará cada tarea dentro del contenedor principal en el documento HTML
  });
}
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Esta es la definición de una función llamada addToDo
  // La función se utilizará para agregar una nueva tarea

  let toDoInput = document.getElementById("toDoInput");
  // Se selecciona el elemento del documento HTML con el ID "toDoInput" y se almacena en la variable toDoInput
  // Este elemento es el campo de texto donde se ingresa la descripción de la nueva tarea

  let description = toDoInput.value;
  // Se obtiene el valor del campo de texto y se almacena en la variable description
  // Esto representa la descripción de la nueva tarea

  let newToDo = new ToDo(description);
  // Se crea un nuevo objeto de tipo ToDo utilizando la función constructora ToDo
  // Se pasa la descripción de la tarea como argumento para inicializar el objeto

  toDoItems.push(newToDo);
  // Se agrega el objeto newToDo al array toDoItems
  // Esto añade la nueva tarea al conjunto de tareas existentes

  toDoInput.value = "";
  // Se vacía el campo de texto, dejándolo en blanco
  // Esto se hace para borrar la descripción de la tarea anteriormente ingresada

  displayToDos();
  // Se llama a la función displayToDos para mostrar las tareas actualizadas en el documento HTML
}
// se ejecute la función 'addToDo'

//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:

let addButton = document.querySelector("#addButton");
// Se selecciona el elemento del documento HTML con el ID "addButton" y se almacena en la variable addButton
// Este elemento representa el botón de agregar tarea

addButton.addEventListener("click", addToDo);
// Se agrega un event listener al botón addButton para el evento "click"
// Cuando se haga clic en el botón, se llamará a la función addToDo

// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // Esta es la definición de una función llamada completeToDo que acepta un parámetro event
  // La función se utilizará para marcar una tarea como completada

  const index = event.target.id;
  // Se obtiene el ID del elemento que disparó el evento (en este caso, el checkbox)
  // El ID se almacena en la variable index
  // Esto se hace para identificar la posición de la tarea dentro del array toDoItems

  toDoItems[index].completeToDo();
  // Se accede a la tarea correspondiente dentro del array toDoItems utilizando el índice obtenido
  // Luego, se llama al método completeToDo de esa tarea para marcarla como completada

  displayToDos();
  // Se llama a la función displayToDos para mostrar las tareas actualizadas en el documento HTML
}

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //

// Acá debes insertar la llamada a 'displayToDos'

displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== "undefined") {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo,
  };
}
