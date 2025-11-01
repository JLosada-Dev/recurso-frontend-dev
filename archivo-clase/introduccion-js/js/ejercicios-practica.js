/*
  EJERCICIOS DE PRÁCTICA - JavaScript (introduccion-js)

  Instrucciones generales:
  - Lee cada ejercicio y su enunciado.
  - Intenta resolverlo por tu cuenta antes de mirar la solución marcada con "SOLUCIÓN".
  - Puedes ejecutar este archivo con Node (`node ejercicios-practica.js`) para verificar
    la salida de las pruebas no relacionadas con el DOM.
  - Para las tareas DOM, abre `index.html` en el navegador y pega el fragmento dentro
    de la consola o crea un archivo HTML que importe este script.

  Objetivos:
  - Practicar manipulación de strings, arrays y objetos
  - Usar funciones, callbacks y métodos funcionales (map/filter/reduce)
  - Introducción a DOM (crear elementos y manejar eventos)
*/

console.log('\n=== EJERCICIOS DE PRÁCTICA - JS ===\n');

// -----------------------------------------------------------------------------
// EJERCICIO 1 - STRINGS
// -----------------------------------------------------------------------------
// Enunciado:
//  - Crea una función `reverseString(str)` que reciba un string y devuelva el
//    string invertido.
//  - Crea una función `countWords(str)` que cuente cuántas palabras hay en la
//    cadena (separadas por espacios) y devuelva el número.

function reverseString(str) {
  // SOLUCIÓN: convertir a array, invertir y unir
  return str.split('').reverse().join('');
}

function countWords(str) {
  // Normalizamos espacios y filtramos cadenas vacías
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Pruebas
console.log('EJ 1 - reverseString("hola") =>', reverseString('hola')); // 'aloh'
console.log(
  'EJ 1 - countWords("  hola mundo  ") =>',
  countWords('  hola mundo  ')
); // 2

// -----------------------------------------------------------------------------
// EJERCICIO 2 - ARRAYS
// -----------------------------------------------------------------------------
// Enunciado:
//  - Dado un array de números, crea una función `arrayStats(nums)` que devuelva
//    un objeto con { sum, avg, min, max }.
//  - Crea `unique(values)` que elimine duplicados y devuelva un array con valores únicos.

function arrayStats(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return null;
  const sum = nums.reduce((acc, x) => acc + x, 0);
  const avg = sum / nums.length;
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return { sum, avg, min, max };
}

function unique(values) {
  return Array.from(new Set(values));
}

// Pruebas
const sample = [3, 7, 2, 7, 10, 3];
console.log('EJ 2 - arrayStats =>', arrayStats(sample)); // { sum: 32, avg: 5.333..., min:2, max:10 }
console.log('EJ 2 - unique =>', unique(sample)); // [3,7,2,10]

// -----------------------------------------------------------------------------
// EJERCICIO 3 - OBJETOS
// -----------------------------------------------------------------------------
// Enunciado:
//  - Crea un objeto `producto` con { id, nombre, precio, categorias }.
//  - Crea una función `applyDiscount(product, percent)` que devuelva una copia
//    del producto con el nuevo precio aplicado.

const producto = {
  id: 'p001',
  nombre: 'Camiseta JS',
  precio: 25.0,
  categorias: ['ropa', 'frontend'],
};

function applyDiscount(product, percent) {
  // No mutamos el objeto original: devolvemos copia
  return Object.assign({}, product, {
    precio: +(product.precio * (1 - percent / 100)).toFixed(2),
  });
}

console.log('EJ 3 - producto original =>', producto);
console.log('EJ 3 - con 20% descuento =>', applyDiscount(producto, 20));

// -----------------------------------------------------------------------------
// EJERCICIO 4 - FUNCIONES Y CALLBACKS
// -----------------------------------------------------------------------------
// Enunciado:
//  - Implementa `mapCustom(array, fn)` que se comporte como `array.map(fn)`
//    pero sin usar .map()

function mapCustom(array, fn) {
  const out = [];
  for (let i = 0; i < array.length; i++) {
    out.push(fn(array[i], i, array));
  }
  return out;
}

console.log(
  'EJ 4 - mapCustom =>',
  mapCustom([1, 2, 3], (x) => x * 2)
); // [2,4,6]

// -----------------------------------------------------------------------------
// EJERCICIO 5 - BÚSQUEDA Y FILTRADO (CASO PRÁCTICO)
// -----------------------------------------------------------------------------
// Enunciado:
//  - Dado un array de productos (id, nombre, precio), crea `searchProducts(products, query)`
//    que devuelva productos cuyo nombre incluya `query` (case-insensitive).

const productsList = [
  { id: 1, name: 'Camiseta JS', price: 25 },
  { id: 2, name: 'Taza React', price: 12 },
  { id: 3, name: 'Pegatina CSS', price: 2 },
  { id: 4, name: 'Sudadera Node', price: 45 },
];

function searchProducts(products, query) {
  const q = String(query).trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) => p.name.toLowerCase().includes(q));
}

console.log('EJ 5 - search "js" =>', searchProducts(productsList, 'js'));
console.log('EJ 5 - search "ta" =>', searchProducts(productsList, 'ta'));

// -----------------------------------------------------------------------------
// EJERCICIO 6 - DOM (OPCIONAL: EJECUTAR EN NAVEGADOR)
// -----------------------------------------------------------------------------
// Enunciado:
//  - Crea una función `renderProductList(products)` que reciba un array de productos
//    y genere una lista (<ul>) con elementos (<li>) insertados en el body.
//  - Añade un evento 'click' en cada elemento que muestre en consola el id del producto.
//
// NOTA: Este bloque usa DOM. Para probarlo, abre la página en el navegador y ejecuta
//       las funciones desde la consola o importa este script en un HTML.

function renderProductList(products) {
  if (typeof document === 'undefined') {
    console.warn(
      'renderProductList: requiere entorno con DOM (ejecuta en el navegador).'
    );
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'practica-productos';

  products.forEach((p) => {
    const li = document.createElement('li');
    li.textContent = `${p.name} — $${p.price}`;
    li.style.cursor = 'pointer';
    li.addEventListener('click', () =>
      console.log('Producto clicado id=', p.id)
    );
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

// Ejemplo de uso en navegador:
// renderProductList(productsList);

// -----------------------------------------------------------------------------
// EJERCICIO 7 - RETO (COMBINADO)
// -----------------------------------------------------------------------------
// Enunciado:
//  - Usa lo aprendido para crear `checkout(products, cart)` que reciba la lista de
//    productos y un carrito con ids y cantidades, y devuelva el total a pagar.

function checkout(products, cart) {
  // cart: [{ id, qty }, ...]
  const mapProducts = new Map(products.map((p) => [p.id, p]));
  return cart.reduce((total, item) => {
    const prod = mapProducts.get(item.id);
    if (!prod) return total;
    return total + prod.price * item.qty;
  }, 0);
}

// Prueba
const cart = [
  { id: 1, qty: 2 },
  { id: 3, qty: 5 },
];
console.log('EJ 7 - checkout total =>', checkout(productsList, cart)); // 2*25 + 5*2 = 50 + 10 = 60

// -----------------------------------------------------------------------------
// FIN - Sugerencias para el docente / estudiante
// -----------------------------------------------------------------------------
// - Pide a los estudiantes que comenten cada función y expliquen la complejidad O(n).
// - Para cada ejercicio, pide versión "imperativa" y versión "funcional" (map/filter/reduce).
// - Extensión: implementar tests simples con `assert` o usar Jest si trabajan con Node.

console.log('\n=== FIN EJERCICIOS ===\n');
