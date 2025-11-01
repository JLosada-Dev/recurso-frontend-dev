// Estructuras de Control Condicionales y Bucles

const edad = 20;
// condicional if

if (edad >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('Eres menor de edad');
}

if (edad !== 18) {
  console.log('No tienes 18 años');
  return;
}
let boolean = true;

if (!boolean) {
  console.log('La condición es verdadera');
}

// condicional switch

const dia = 3;

switch (dia) {
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miércoles');
    break;
  case 4:
    console.log('Jueves');
    break;
  default:
    console.log('Otro día');
    break;
}

// if else if

const hora = 14;

if (hora < 12) {
  console.log('Buenos días');
} else if (hora < 18) {
  console.log('Buenas tardes');
} else {
  console.log('Buenas noches');
}

// Operadores Ternarios

const esFinDeSemana = true;
const mensaje = esFinDeSemana ? 'Es fin de semana' : 'No es fin de semana';
console.log(mensaje); // Es fin de semana

// Bucles

// Bucle for
for (let i = 0; i < 5; i++) {
  console.log('Iteración del bucle for:', i);
}

// Bucle while
let contador = 0;
while (contador < 5) {
  console.log('Iteración del bucle while:', contador);
  contador++;
}

// Bucle do...while
let cuenta = 0;
do {
  console.log('Iteración del bucle do...while:', cuenta);
  cuenta++;
} while (cuenta < 5);

// Bucle for...in
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

// Bucle for...of
const colores = ['Rojo', 'Verde', 'Azul'];

for (const color of colores) {
  console.log('Color:', color);
}

// Foreach
colores.forEach((color, indice) => {
  console.log(`Color en índice ${indice}: ${color}`);
});
