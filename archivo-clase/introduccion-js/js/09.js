// Funciones

// 1. funciones declarativas

sumar(2, 3); // 5

function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 3)); // 5

const suma = function (a, b) {
  return a + b;
};

function saludar() {
  console.log('Hola!');
}
saludar(); // 'Hola!'

// 2. funciones de expresión
console.log(suma(4, 5)); // 9

const restar = function (a, b) {
  return a - b;
};
console.log(restar(5, 2)); // 3

// 2.1 funciones flecha
const multiplicar = (a, b) => {
  return a * b;
};
console.log(multiplicar(3, 4)); // 12

// Callbacks una funcion que se pasa como argumento a otra función
function procesarOperacion(a, b, operacion) {
  return operacion(a, b);
}

const resultadoSuma = procesarOperacion(5, 7, (a, b) => a + b);
console.log(resultadoSuma); // 12
