// Operadores

const number1 = 10;
const number2 = 5;

// Operadores
console.log('Suma:', number1 + number2); // 15
console.log('Resta:', number1 - number2); // 5
console.log('Multiplicación:', number1 * number2); // 50
console.log('División:', number1 / number2); // 2
console.log('Módulo:', number1 % number2); // 0



// Operadores de asignación
let resultado = 20;
console.log('Valor inicial:', resultado); // 20

resultado += 5; // resultado = resultado + 5
resultado = resultado + 5; // equivalente a la línea anterior
console.log('Después de += 5:', resultado); // 25
resultado -= 3; // resultado = resultado - 3
console.log('Después de -= 3:', resultado); // 22
resultado *= 2; // resultado = resultado * 2
console.log('Después de *= 2:', resultado); // 44
resultado /= 4; // resultado = resultado / 4
console.log('Después de /= 4:', resultado); // 11
resultado %= 3; // resultado = resultado % 3
console.log('Después de %= 3:', resultado); // 2  

// Operadores de Incremento y Decremento
let contador = 0;
console.log('Contador inicial:', contador); // 0

contador++; // Incrementa en 1
console.log('Después de contador++:', contador); // 1
contador--; // Decrementa en 1
console.log('Después de contador--:', contador); // 0

// Operadores de comparación
const a = 10;
const b = '10';

console.log('a == b:', a == b); // true (igualdad débil)
console.log('a === b:', a === b); // false (igualdad estricta)
console.log('a != b:', a != b); // false (desigualdad débil)
console.log('a !== b:', a !== b); // true (desigualdad estricta)
console.log('a > b:', a > b); // false
console.log('a < b:', a < b); // false
console.log('a >= b:', a >= b); // true
console.log('a <= b:', a <= b); // true

// Operadores lógicos
const x = true;
const y = false;

console.log('x && y:', x && y); // false (AND)
console.log('x || y:', x || y); // true (OR)
console.log('!x:', !x); // false (NOT)
console.log('!y:', !y); // true (NOT)

// Funciones matematicas
console.log('Valor absoluto de -10:', Math.abs(-10)); // 10
console.log('Redondeo de 4.7:', Math.round(4.7)); // 5
console.log('Redondeo hacia arriba de 4.1:', Math.ceil(4.1)); // 5
console.log('Redondeo hacia abajo de 4.9:', Math.floor(4.9)); // 4
// problema de precisión con números decimales
console.log('Suma de 0.1 + 0.2:', 0.1 + 0.2); // 0.30000000000000004
console.log('Suma de 0.1 + 0.2 con toPrecision(2):', (0.1 + 0.2).toPrecision(2)); // "0.30"
console.log('Suma de 0.1 + 0.2 con toFixed(2):', (0.1 + 0.2).toFixed(2)); // "0.30"

a = 0.1;
b = 0.2;
sum = a + b;
console.log("Es igual a 0.3?", sum === 0.3); // false


console.log('Raíz cuadrada de 16:', Math.sqrt(16)); // 4
console.log('Potencia de 2 elevado a 3:', Math.pow(2, 3)); // 8
console.log('Número aleatorio entre 0 y 1:', Math.random()); // número aleatorio entre 0 y 1

console.log('Número aleatorio entre 1 y 10:', Math.floor(Math.random() * 10) + 1); // número aleatorio entre 1 y 10

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Número aleatorio entre 5 y 15:', generarNumeroAleatorio(5, 15)); // número aleatorio entre 5 y 15

// Constantes matemáticas
console.log('Valor de PI:', Math.PI); // 3.141592653589793
console.log('Valor de Euler (e):', Math.E); // 2.718281828459045
console.log('Valor de la raíz cuadrada de 2:', Math.SQRT2);

//maximo y minimo
console.log('Máximo entre 3, 7, 2, 9:', Math.max(3, 7, 2, 9)); // 9
console.log('Mínimo entre 3, 7, 2, 9:', Math.min(3, 7, 2, 9)); // 2