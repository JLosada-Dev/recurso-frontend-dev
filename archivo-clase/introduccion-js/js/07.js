//Arrays

// Declaracion
const listaCompras = ['Leche', 'Huevos', 'Cereal', 'Carne'];

const listaCompras2 = [
  'Leche',
  'Huevos',
  'Cereal',
  'Carne',
  1,
  true,
  null,
  undefined,
  (objeto = { nombre: 'Producto' }),
];

console.table('Lista de Compras:', listaCompras);
console.log('Lista de Compras 2:', listaCompras2);
/* 
const elementos = new Array('Leche', 'Huevos', 'Cereal', 'Carne');
const elementos2 = new Array(10); // Crea un array con 10 posiciones vacías
const elementos3 = Array.of('Leche', 'Huevos', 'Cereal', 'Carne'); // Crea un array con 4 elementos */

// Acceso y Modificación
console.log('Primer elemento:', listaCompras[0]);
listaCompras[1] = 'Pan';
console.log('Lista de Compras modificada:', listaCompras);
listaCompras[4] = 'Frutas'; // Añade un nuevo elemento
console.log('Lista de Compras con nuevo elemento:', listaCompras);

// Métodos Comunes
console.log(listaCompras.length); // Longitud del array

listaCompras.push('Verduras'); // Añade al final
console.log('Después de push:', listaCompras);
listaCompras.unshift('Agua'); // Añade al inicio

console.log('Después de unshift:', listaCompras);

// elimina el último elemento
const ultimoElemento = listaCompras.pop();
console.log(
  'Después de pop:',
  listaCompras,
  'Elemento eliminado:',
  ultimoElemento
);
// elimina el primer elemento
const primerElemento = listaCompras.shift();
console.log(
  'Después de shift:',
  listaCompras,
  'Elemento eliminado:',
  primerElemento
);

// Imutabilidad y Copia
const nuevaLista = ['Arroz', ...listaCompras, 'Lentajas']; // Operador spread
console.log('Copia de la lista de compras:', nuevaLista);

// Slice y Splice
const subLista = listaCompras.slice(1, 4); // Extrae elementos desde el índice 1 al 3
console.log('Sublista:', subLista);

// Splice eliminar una posición
const elementosEliminados = listaCompras.splice(2, 2); // Elimina 2 elementos desde el índice 2
console.log(
  'Después de splice:',
  listaCompras,
  'Elementos eliminados:',
  elementosEliminados
);

// Iteración
console.log('Iteración con for:');
for (let i = 0; i < listaCompras.length; i++) {
  console.log(`Índice ${i}:`, listaCompras[i]);
}
console.log('Iteración con forEach:');

listaCompras.forEach((item, index) => {
  console.log(`Índice ${index}:`, item);
});

// Umatibilidad map, filter, reduce
const numeros = [1, 2, 3, 4, 5];

// Filter
const pares = numeros.filter((num) => num % 2 === 0);
console.log('Números pares:', pares);
const newArray = listaCompras.filter((item) => item.length > 4);
console.log('Elementos con más de 4 letras:', newArray);

// Map
const dobles = numeros.map((num) => num * 2);
console.log('Números dobles:', dobles);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * 2;
}
console.log('Números dobles con for:', numeros);

// Crear un objeto a partir de un array
const personasArray = [
  ['Ana', 28],
  ['Luis', 34],
  ['María', 22],
];

const personasObjeto = personasArray.map(([nombre, edad]) => ({
  nombre,
  edad,
}));
console.log('Array de objetos personas:', personasObjeto);

// Reduce
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log('Suma de números:', suma);

// Metodos arrays
//IndexOf y LastIndexOf
const frutas = ['Manzana', 'Banana', 'Naranja', 'Banana', 'Uva'];
console.log('IndexOf Banana:', frutas.indexOf('Banana')); // 1
console.log('LastIndexOf Banana:', frutas.lastIndexOf('Banana')); // 3

// Includes
console.log('¿Incluye Naranja?', frutas.includes('Naranja')); // true
console.log('¿Incluye Mango?', frutas.includes('Mango')); // false

// Find y FindIndex
const personas = [
  { nombre: 'Carlos', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Luis', edad: 20 },
];

const personaEncontrada = personas.find((persona) => persona.edad > 22);
console.log('Persona encontrada (edad > 22):', personaEncontrada);

// every y some
const todasMayoresDe18 = personas.every((persona) => persona.edad >= 18);
console.log('¿Todas las personas son mayores de 18?', todasMayoresDe18);

const algunaMayorDe28 = personas.some((persona) => persona.edad > 28);
console.log('¿Alguna persona es mayor de 28?', algunaMayorDe28);

// iteradores
// foreach
frutas.forEach((fruta, index) => {
  console.log(`Fruta en índice ${index}: ${fruta}`);
});
// map cuando se necesita transformar los datos o un nuevo array
const frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log('Frutas en mayúsculas:', frutasMayusculas);
// filter
const frutasConA = frutas.filter((fruta) => fruta.includes('a'));
console.log('Frutas que contienen la letra "a":', frutasConA);

// for...of
for (const fruta of frutas) {
  console.log('Fruta con for...of:', fruta);
}

// for o un while cuando se necesita un control total sobre la iteración
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta en índice ${i}: ${frutas[i]}`);
}
let j = 0;
while (j < frutas.length) {
  console.log(`Fruta en índice ${j}: ${frutas[j]}`);
  j++;
}

// Ejercicio Carrito de compra

const carrito = [];
carrito.push({ id: 1, nombre: 'Producto 1', precio: 100 });
carrito.push({ id: 2, nombre: 'Producto 2', precio: 200 });
carrito.push({ id: 3, nombre: 'Producto 3', precio: 300 });

console.log('Productos en el carrito: ');
carrito.forEach((producto) => {
  console.log(
    `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`
  );
});

const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
console.log('Total a pagar:', total);

// Transformar array de precios a array de objetos
const precios = [100, 200, 300, 400, 500];
const productosDesdePrecios = precios.map((precio, index) => ({
  id: index + 1,
  nombre: `Producto ${index + 1}`,
  precio: precio,
}));
console.log('Productos desde array de precios:', productosDesdePrecios);

// Filtrar productos con precio mayor a 300
const productosCaros = productosDesdePrecios.filter(
  (producto) => producto.precio > 300
);
console.log('Productos con precio mayor a 300:', productosCaros);

// Calcular el total de los productos caros
const totalCaros = productosCaros.reduce(
  (acc, producto) => acc + producto.precio,
  0
);
console.log('Total de productos caros:', totalCaros);
