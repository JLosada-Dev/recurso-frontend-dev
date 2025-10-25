// Tipos  de Datos Primitovos en JavaScript

// undefined
let varIndefinida;
console.log(varIndefinida); // undefined
// null
let varNula = null;
console.log(varNula); // null

// number
let numero = 42;
console.log(numero); // 42
// string
let texto = 'Hola, Mundo!';
console.log(texto); // "Hola, Mundo!"
// boolean
let esVerdadero = true; // true false
let isTrue = true; // true false
console.log(esVerdadero); // true
console.log(isTrue); // true

// symbol
let simbolo = Symbol('miSimbolo');
let simbolo2 = Symbol('miSimbolo');
console.log(simbolo === simbolo2); // false
console.log(simbolo); // Symbol(miSimbolo)

// bigint
let numeroGrande = 9007199254741991n;
let numeroGrande2 = BigInt(9007199254741991);
console.log(numeroGrande === numeroGrande2); // true
console.log(numeroGrande); // 9007199254741991n
