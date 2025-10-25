// comentario de una sola linea

/*
      Comentario
      de multiples
      lineas
      */

// string
console.log("Hola desde JavaScript");

let nombre = "camilo";

let numeros = 34;
let precio = 16.99;

//boleanos
let activo = true;
let inactivo = false;

let sinValor;

let vacio = null;

var lenguajes = "JavaScruipt";

let curso = "frontend";

const PI = 3.1416;

const URL = "https://api.com";

// Válidas
let $elemente;
let nombre4;
let _privado;

// no Validas
// let 3numero
// let nombre-completo;
// let class;

// Convenciones
let nombreCompleto = "laura";
let edadCliente = 22;

// PascalCase
class ProductoTienda {}

// SNAKE_CASE_MAYUS
const API_URL = "https://api.com";

let a = 10;
let b = 3;

/*suma+
       reta -
       multiplicacion
       divisiones /
       modulo
       exponenciales */

console.log(a + b); //

//incremento y decremento

//    let contador=0;
//    contador++; //
//    contador--;0
//    ++contadro;//1

// operados logicos
let edad = 20;
let tienePermiso = false;

console.log(edad >= 18 || tienePermiso);

console.log(edad >= 18 && tienePermiso);
console.log(!tienePermiso);

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

let calificación = 2;

if (calificación >= 4) {
  console.log("excelente");
} else if (calificación >= 3) {
  console.log("aprobado");
} else {
  console.log("reprobado");
}

let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";

console.log(mensaje);

let dia = "sabado";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "Sabado":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día normal");
}

// ciclos
// for (let i = 0; i < 5; i++) {
//     console.log("Iteración: ", i)
// }

// for (let i = 5; i > 0; i--) {
//     console.log("Iteración: ", i)
// }

// bucle while
let contador = 0;

// while (contador < 5) {
//   console.log("contador: ", contador);
//   contador++;
// }

// // Bucle do..while

// let numero = 0;

// do {
//   console.log("Numero: ", numero);
//   numero++;
// } while (numero < 3);

// Break y Continue

// Break (terminar bucle)
// for (let i = 0; i < 10; i++) {
//     if (i === 5) break;
//     console.log(i)
// }

// Continue (Saltar a la siguiente iteración)
// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }

//arreglos Arrays

//Forma literal

let numeroArreglo=[1,2,3,4,5]
let frutas =["manzana","pera","uva"]
let mixto=[1,"hola",true,null]

console.log(frutas)
//console.log(frutas.length -  1)

//Propiedades  y Metodos Basicos 

//longirut (length)
console.log(numeroArreglo.length)


//agregar un elemnto final
let colores=["verde","rojo","amarillo"]
colores.push("violeta");
console.log(colores)

//agregar un valor al inicio


colores.unshift("azul");
console.log(colores)

//eliminar del inico

let primero=colores.shift();
console.log(primero)
console.log(colores)

//eliminar del final metodo .pop

let numeroEnteros = [10, 20, 30, 40, 50];

// indexOf - Encuentra el indice
console.log(numeroEnteros.indexOf(30))
console.log(numeroEnteros.indexOf(100))

// includes - Verifica si exite
console.log(numeroEnteros.includes(200))

// Recorrer Arrays

let frutasN = ["manzana"]