let traverseDomAndCollectElements = function (matchFunc, startEl) {
  let resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // Inicializa un conjunto de resultados vacío

  // Verifica si se proporcionó un elemento inicial, de lo contrario, toma el elemento body del documento como punto de partida

  // Función recursiva para recorrer el árbol del DOM y recolectar elementos que coincidan en resultSet
  let traverse = function (element) {
    // Verifica si el elemento actual coincide con matchFunc, una función de coincidencia proporcionada externamente
    if (matchFunc(element)) {
      resultSet.push(element); // Si coincide, agrega el elemento al conjunto de resultados
    }
    // Obtiene los hijos del elemento actual
    let children = element.children;
    // Recorre los hijos del elemento actual llamando recursivamente a la función traverse
    for (let i = 0; i < children.length; i++) {
      traverse(children[i]);
    }
  };

  // Comienza el recorrido del árbol del DOM llamando a la función traverse con el elemento inicial
  traverse(startEl);

  // Devuelve el conjunto de resultados que contiene todos los elementos que coinciden con los criterios de coincidencia definidos por matchFunc
  return resultSet;
};
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  // Verificar si el selector comienza con un '#'
  if (selector.startsWith("#")) {
    return "id";
  }

  // Verificar si el selector contiene un '.'
  if (selector.includes(".")) {
    // Verificar si el selector comienza con una etiqueta
    if (selector.indexOf(".") > 0) {
      return "tag.class";
    }
    return "class";
  }

  // Si no coincide con ninguno de los casos anteriores, se asume que es solo una etiqueta
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.
let matchFunctionMaker = function (selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  // Verifica el tipo de selector y crea la función de coincidencia correspondiente

  // Si el selector es un ID, crea una función de coincidencia que verifica si el elemento tiene el mismo ID
  if (selectorType === "id") {
    matchFunction = (element) => element.id === selector.slice(1);
  }
  // Si el selector es una clase, crea una función de coincidencia que verifica si el elemento tiene la clase especificada
  else if (selectorType === "class") {
    matchFunction = (element) => element.classList.contains(selector.slice(1));
  }
  // Si el selector es de la forma "etiqueta.clase", crea una función de coincidencia que verifica si el elemento tiene la etiqueta y la clase especificadas
  else if (selectorType === "tag.class") {
    let tag = selector.split(".")[0];
    let className = selector.split(".")[1];
    matchFunction = (element) =>
      element.tagName.toLowerCase() === tag &&
      element.classList.contains(className);
  }
  // Si el selector es solo una etiqueta, crea una función de coincidencia que verifica si el elemento tiene la misma etiqueta
  else if (selectorType === "tag") {
    matchFunction = (element) =>
      element.tagName.toLowerCase() === selector.toLowerCase();
  }
  // Retorna la función de coincidencia creada
  return matchFunction;
};

// Función principal que selecciona elementos del DOM
const $ = (selector) => {
  // Crea la función de coincidencia basada en el selector
  const selectorMatchFunc = matchFunctionMaker(selector);
  // Obtiene los elementos del DOM que coinciden con el selector utilizando la función traverseDomAndCollectElements
  const elements = traverseDomAndCollectElements(selectorMatchFunc);
  // Retorna los elementos seleccionados
  return elements;
};
