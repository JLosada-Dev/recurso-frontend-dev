// ============================================================================
// MÓDULO 1: INTRODUCCIÓN A LOS ARRAYS
// ============================================================================

/**
 * ¿QUÉ ES UN ARRAY?
 * 
 * Un array es como una LISTA DE COMPRAS. Imagina que vas al supermercado
 * y necesitas recordar varios productos. En lugar de memorizar cada uno
 * por separado, los escribes en una lista ordenada.
 * 
 * Características clave:
 * - Los elementos están ORDENADOS (tienen una posición o índice)
 * - El primer elemento está en la posición 0 (no en la 1)
 * - Pueden contener cualquier tipo de dato
 */

// FORMA 1: Declaración literal (la más común y recomendada)
const listaCompras = ['Leche', 'Huevos', 'Cereal', 'Carne'];

// Los arrays pueden contener diferentes tipos de datos (aunque no es recomendado mezclar)
const listaCompras2 = [
  'Leche',          // String
  'Huevos',         // String
  'Cereal',         // String
  'Carne',          // String
  1,                // Number
  true,             // Boolean
  null,             // Null
  undefined,        // Undefined
  { nombre: 'Producto' }, // Object
];

console.log('Lista de Compras:', listaCompras);
console.table(listaCompras); // console.table muestra arrays de forma más legible
console.log('Lista de Compras 2:', listaCompras2);

/* 
OTRAS FORMAS DE CREAR ARRAYS (menos comunes):

const elementos = new Array('Leche', 'Huevos', 'Cereal', 'Carne');
const elementos2 = new Array(10); // Crea un array vacío con 10 posiciones
const elementos3 = Array.of('Leche', 'Huevos', 'Cereal', 'Carne');
*/

// ============================================================================
// MÓDULO 2: ACCESO Y MODIFICACIÓN DE ELEMENTOS
// ============================================================================

/**
 * ACCEDIENDO A LOS ELEMENTOS
 * 
 * Piensa en un array como una fila de casilleros numerados.
 * Para abrir un casillero, necesitas su número (índice).
 * 
 * IMPORTANTE: Los índices comienzan en 0, no en 1
 * ['Leche', 'Huevos', 'Cereal']
 *    ↑        ↑         ↑
 *   [0]      [1]       [2]
 */

console.log('\n--- ACCESO A ELEMENTOS ---');
console.log('Primer elemento:', listaCompras[0]);    // 'Leche'
console.log('Segundo elemento:', listaCompras[1]);   // 'Huevos'
console.log('Último elemento:', listaCompras[listaCompras.length - 1]); // 'Carne'

// MODIFICACIÓN: Cambiar un valor existente
listaCompras[1] = 'Pan';
console.log('Lista modificada:', listaCompras); // ['Leche', 'Pan', 'Cereal', 'Carne']

// AÑADIR elementos en posiciones específicas (puede crear "huecos")
listaCompras[4] = 'Frutas';
console.log('Con nuevo elemento:', listaCompras); // ['Leche', 'Pan', 'Cereal', 'Carne', 'Frutas']

// ============================================================================
// MÓDULO 3: MÉTODOS PARA AGREGAR Y ELIMINAR ELEMENTOS
// ============================================================================

/**
 * MÉTODOS DE MUTACIÓN (modifican el array original)
 * 
 * Imagina una fila de personas:
 * - push(): Una persona se une AL FINAL de la fila
 * - unshift(): Una persona se cuela AL INICIO de la fila
 * - pop(): La última persona SE VA
 * - shift(): La primera persona SE VA
 */

console.log('\n--- MÉTODOS DE ADICIÓN Y ELIMINACIÓN ---');

// length: Obtener la cantidad de elementos
console.log('Cantidad de elementos:', listaCompras.length);

// PUSH: Añade elementos al FINAL
listaCompras.push('Verduras');
console.log('Después de push():', listaCompras);

// UNSHIFT: Añade elementos al INICIO
listaCompras.unshift('Agua');
console.log('Después de unshift():', listaCompras);

// POP: Elimina y devuelve el ÚLTIMO elemento
const ultimoElemento = listaCompras.pop();
console.log('Después de pop():', listaCompras);
console.log('Elemento eliminado:', ultimoElemento);

// SHIFT: Elimina y devuelve el PRIMER elemento
const primerElemento = listaCompras.shift();
console.log('Después de shift():', listaCompras);
console.log('Elemento eliminado:', primerElemento);

// ============================================================================
// MÓDULO 4: INMUTABILIDAD Y COPIA DE ARRAYS
// ============================================================================

/**
 * INMUTABILIDAD: El arte de NO modificar el original
 * 
 * En programación moderna, preferimos crear NUEVAS versiones
 * en lugar de modificar los datos originales. Es como hacer
 * una fotocopia de un documento en lugar de escribir sobre él.
 * 
 * SPREAD OPERATOR (...): Desempaqueta todos los elementos
 */

console.log('\n--- INMUTABILIDAD Y COPIA ---');

// Crear un nuevo array sin modificar el original
const nuevaLista = ['Arroz', ...listaCompras, 'Lentejas'];
console.log('Lista original:', listaCompras);
console.log('Nueva lista:', nuevaLista);

// ============================================================================
// MÓDULO 5: SLICE Y SPLICE
// ============================================================================

/**
 * SLICE: Copia una PORCIÓN del array (no modifica el original)
 * SPLICE: MODIFICA el array original (elimina/añade elementos)
 * 
 * Analogía: Slice es como FOTOCOPIAR páginas de un libro
 *           Splice es como ARRANCAR páginas del libro
 */

console.log('\n--- SLICE Y SPLICE ---');

// SLICE(inicio, fin): Extrae desde 'inicio' hasta 'fin' (sin incluir 'fin')
const subLista = listaCompras.slice(1, 4);
console.log('Sublista (índices 1-3):', subLista);
console.log('Original sin cambios:', listaCompras);

// SPLICE(inicio, cantidad, ...nuevosElementos): Modifica el array original
const elementosEliminados = listaCompras.splice(2, 2);
console.log('Después de splice:', listaCompras);
console.log('Elementos eliminados:', elementosEliminados);

// ============================================================================
// MÓDULO 6: ITERACIÓN (RECORRIENDO EL ARRAY)
// ============================================================================

/**
 * FORMAS DE RECORRER UN ARRAY
 * 
 * Es como revisar cada producto de tu lista de compras uno por uno.
 * Hay varias formas de hacerlo, cada una útil en diferentes situaciones.
 */

console.log('\n--- ITERACIÓN CON FOR CLÁSICO ---');
// FOR: Control total, útil cuando necesitas el índice
for (let i = 0; i < listaCompras.length; i++) {
  console.log(`Índice ${i}:`, listaCompras[i]);
}

console.log('\n--- ITERACIÓN CON FOREACH ---');
// FOREACH: Más legible, útil para ejecutar una acción por cada elemento
listaCompras.forEach((item, index) => {
  console.log(`Índice ${index}:`, item);
});

// ============================================================================
// MÓDULO 7: MÉTODOS DE TRANSFORMACIÓN (MAP, FILTER, REDUCE)
// ============================================================================

/**
 * LOS 3 MOSQUETEROS DE LA PROGRAMACIÓN FUNCIONAL
 * 
 * Estos métodos NO modifican el array original, sino que CREAN UNO NUEVO.
 * Son fundamentales en JavaScript moderno.
 */

console.log('\n--- MÉTODOS DE TRANSFORMACIÓN ---');

const numeros = [1, 2, 3, 4, 5];

// ----- FILTER: Selecciona elementos que cumplen una condición -----
/**
 * FILTER es como un COLADOR
 * Solo pasan los elementos que cumplen la condición
 */
const pares = numeros.filter((num) => num % 2 === 0);
console.log('Números pares:', pares); // [2, 4]

const elementosLargos = listaCompras.filter((item) => item.length > 4);
console.log('Elementos con más de 4 letras:', elementosLargos);

// ----- MAP: Transforma cada elemento del array -----
/**
 * MAP es como una FÁBRICA
 * Toma cada elemento, lo transforma y crea un nuevo array
 */
const dobles = numeros.map((num) => num * 2);
console.log('Números duplicados:', dobles); // [2, 4, 6, 8, 10]

// Comparación: Hacer lo mismo con for (más verboso)
const numerosOriginales = [1, 2, 3, 4, 5];
for (let i = 0; i < numerosOriginales.length; i++) {
  numerosOriginales[i] = numerosOriginales[i] * 2;
}
console.log('Duplicados con for:', numerosOriginales);

// MAP avanzado: Transformar arrays en objetos
const personasArray = [
  ['Ana', 28],
  ['Luis', 34],
  ['María', 22],
];

const personasObjeto = personasArray.map(([nombre, edad]) => ({
  nombre,  // Equivalente a: nombre: nombre
  edad,    // Equivalente a: edad: edad
}));
console.log('Array de objetos:', personasObjeto);

// ----- REDUCE: Reduce el array a UN SOLO VALOR -----
/**
 * REDUCE es como una CALCULADORA ACUMULATIVA
 * Va sumando, concatenando o acumulando valores
 * 
 * Parámetros:
 * - acc (acumulador): Valor que se va construyendo
 * - num (elemento actual): Elemento que se está procesando
 * - 0: Valor inicial del acumulador
 */
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log('Suma total:', suma); // 15

// ============================================================================
// MÓDULO 8: MÉTODOS DE BÚSQUEDA
// ============================================================================

/**
 * ENCONTRAR ELEMENTOS EN EL ARRAY
 * Como buscar un producto específico en tu lista de compras
 */

console.log('\n--- MÉTODOS DE BÚSQUEDA ---');

const frutas = ['Manzana', 'Banana', 'Naranja', 'Banana', 'Uva'];

// INDEXOF: Encuentra la primera aparición (devuelve el índice)
console.log('Primera Banana en índice:', frutas.indexOf('Banana')); // 1
console.log('Elemento no encontrado:', frutas.indexOf('Mango')); // -1

// LASTINDEXOF: Encuentra la última aparición
console.log('Última Banana en índice:', frutas.lastIndexOf('Banana')); // 3

// INCLUDES: ¿El elemento existe en el array? (devuelve true/false)
console.log('¿Contiene Naranja?', frutas.includes('Naranja')); // true
console.log('¿Contiene Mango?', frutas.includes('Mango')); // false

// FIND: Encuentra el PRIMER elemento que cumple una condición
const personas = [
  { nombre: 'Carlos', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Luis', edad: 20 },
];

const personaEncontrada = personas.find((persona) => persona.edad > 22);
console.log('Primera persona mayor de 22:', personaEncontrada); // Carlos

// FINDINDEX: Como find(), pero devuelve el índice
const indicePersona = personas.findIndex((persona) => persona.edad > 22);
console.log('Índice de la persona encontrada:', indicePersona); // 0

// ============================================================================
// MÓDULO 9: VALIDACIÓN CON EVERY Y SOME
// ============================================================================

/**
 * VERIFICAR CONDICIONES EN EL ARRAY
 * 
 * EVERY: ¿TODOS los elementos cumplen la condición?
 * SOME: ¿AL MENOS UNO cumple la condición?
 */

console.log('\n--- VALIDACIÓN: EVERY Y SOME ---');

// EVERY: Todos deben cumplir (como un inspector estricto)
const todasMayoresDe18 = personas.every((persona) => persona.edad >= 18);
console.log('¿Todas mayores de 18?', todasMayoresDe18); // true

// SOME: Solo necesita que uno cumpla (como un detector)
const algunaMayorDe28 = personas.some((persona) => persona.edad > 28);
console.log('¿Alguna mayor de 28?', algunaMayorDe28); // true

// ============================================================================
// MÓDULO 10: COMPARACIÓN DE MÉTODOS DE ITERACIÓN
// ============================================================================

/**
 * ¿CUÁNDO USAR CADA MÉTODO?
 * 
 * forEach  → Solo ejecutar código (no crear nuevo array)
 * map      → Transformar cada elemento y crear nuevo array
 * filter   → Seleccionar elementos que cumplan condición
 * for...of → Sintaxis simple para recorrer valores
 * for      → Control total (break, continue, índices complejos)
 * while    → Cuando no sabes cuántas iteraciones necesitas
 */

console.log('\n--- COMPARACIÓN DE ITERADORES ---');

// FOREACH: Ejecuta una acción, no devuelve nada
frutas.forEach((fruta, index) => {
  console.log(`${index}: ${fruta}`);
});

// MAP: Crea un nuevo array transformado
const frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log('Frutas en mayúsculas:', frutasMayusculas);

// FILTER: Crea un nuevo array con elementos filtrados
const frutasConA = frutas.filter((fruta) => fruta.toLowerCase().includes('a'));
console.log('Frutas con "a":', frutasConA);

// FOR...OF: Sintaxis moderna y limpia
console.log('\n--- For...of ---');
for (const fruta of frutas) {
  console.log('Fruta:', fruta);
}

// FOR: Control total sobre la iteración
console.log('\n--- For clásico ---');
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta en posición ${i}:`, frutas[i]);
}

// WHILE: Útil cuando no conoces el número de iteraciones
console.log('\n--- While ---');
let j = 0;
while (j < frutas.length) {
  console.log(`Fruta en posición ${j}:`, frutas[j]);
  j++;
}

// ============================================================================
// MÓDULO 11: PROYECTO PRÁCTICO - CARRITO DE COMPRAS
// ============================================================================

/**
 * PROYECTO INTEGRADOR
 * 
 * Simularemos un carrito de compras aplicando los conceptos aprendidos.
 * Este es un caso real de uso en aplicaciones web.
 */

console.log('\n=== PROYECTO: CARRITO DE COMPRAS ===\n');

// 1. Crear carrito vacío
const carrito = [];

// 2. Agregar productos
carrito.push({ id: 1, nombre: 'Laptop', precio: 1000 });
carrito.push({ id: 2, nombre: 'Mouse', precio: 25 });
carrito.push({ id: 3, nombre: 'Teclado', precio: 75 });

// 3. Mostrar productos (forEach)
console.log('PRODUCTOS EN EL CARRITO:');
carrito.forEach((producto) => {
  console.log(`• ${producto.nombre} - $${producto.precio}`);
});

// 4. Calcular total (reduce)
const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
console.log('\nTOTAL A PAGAR: $' + total);

// 5. Transformar array de precios a objetos (map)
console.log('\n--- Crear productos desde lista de precios ---');
const precios = [100, 200, 300, 400, 500];
const productosDesdePrecios = precios.map((precio, index) => ({
  id: index + 1,
  nombre: `Producto ${index + 1}`,
  precio: precio,
}));
console.table(productosDesdePrecios);

// 6. Filtrar productos caros (filter)
const productosCaros = productosDesdePrecios.filter(
  (producto) => producto.precio > 300
);
console.log('\nPRODUCTOS PREMIUM (precio > $300):');
console.table(productosCaros);

// 7. Calcular total de productos caros (reduce)
const totalCaros = productosCaros.reduce(
  (acc, producto) => acc + producto.precio,
  0
);
console.log('Total de productos premium: $' + totalCaros);

// ============================================================================
// EJERCICIOS PRÁCTICOS
// ============================================================================

console.log('\n=== EJERCICIOS PARA PRACTICAR ===\n');

/**
 * EJERCICIO 1: Gestión de Estudiantes
 * Dado el siguiente array de estudiantes:
 */
const estudiantes = [
  { nombre: 'Juan', nota: 85 },
  { nombre: 'María', nota: 92 },
  { nombre: 'Pedro', nota: 78 },
  { nombre: 'Ana', nota: 95 },
  { nombre: 'Luis', nota: 88 },
];

console.log('Ejercicio 1: Gestión de Estudiantes');
// a) Encontrar estudiantes con nota >= 90
const estudiantesDestacados = estudiantes.filter(e => e.nota >= 90);
console.log('Estudiantes destacados (nota >= 90):', estudiantesDestacados);

// b) Calcular promedio de notas
const promedio = estudiantes.reduce((sum, e) => sum + e.nota, 0) / estudiantes.length;
console.log('Promedio de notas:', promedio.toFixed(2));

// c) Obtener solo los nombres
const nombres = estudiantes.map(e => e.nombre);
console.log('Lista de nombres:', nombres);

/**
 * EJERCICIO 2: Manipulación de Productos
 * Intenta resolver estos desafíos:
 */
console.log('\nEjercicio 2: Manipulación de Productos');
const productos = [
  { nombre: 'Camisa', precio: 30, stock: 5 },
  { nombre: 'Pantalón', precio: 50, stock: 0 },
  { nombre: 'Zapatos', precio: 80, stock: 3 },
  { nombre: 'Gorra', precio: 15, stock: 10 },
];

// a) Productos en stock (stock > 0)
const productosDisponibles = productos.filter(p => p.stock > 0);
console.log('Productos disponibles:', productosDisponibles.map(p => p.nombre));

// b) Aplicar descuento del 20% a todos los precios
const productosConDescuento = productos.map(p => ({
  ...p,
  precioOriginal: p.precio,
  precio: p.precio * 0.8
}));
console.log('Productos con descuento:');
console.table(productosConDescuento);

// c) Valor total del inventario
const valorInventario = productos.reduce((total, p) => total + (p.precio * p.stock), 0);
console.log('Valor total del inventario: $' + valorInventario);

// ============================================================================
// RESUMEN FINAL
// ============================================================================

console.log('\n' + '='.repeat(80));
console.log('RESUMEN: CONCEPTOS CLAVE DE ARRAYS EN JAVASCRIPT');
console.log('='.repeat(80) + '\n');

console.log(`
📌 PUNTOS PRINCIPALES:

1. CREACIÓN:
   • const array = [elemento1, elemento2, ...];
   • Los índices comienzan en 0

2. ACCESO Y MODIFICACIÓN:
   • array[índice] para acceder
   • array[índice] = valor para modificar
   • array.length para obtener longitud

3. MÉTODOS DE MUTACIÓN (modifican el original):
   • push()    → Añade al final
   • pop()     → Elimina del final
   • unshift() → Añade al inicio
   • shift()   → Elimina del inicio
   • splice()  → Elimina/inserta en cualquier posición

4. MÉTODOS INMUTABLES (crean nuevo array):
   • map()     → Transforma cada elemento
   • filter()  → Selecciona elementos que cumplan condición
   • slice()   → Extrae una porción
   • concat()  → Une arrays
   • [...spread] → Copia/combina arrays

5. REDUCCIÓN:
   • reduce()  → Reduce array a un único valor

6. BÚSQUEDA:
   • find()      → Encuentra primer elemento que cumpla condición
   • findIndex() → Encuentra índice del elemento
   • indexOf()   → Índice de primera aparición
   • includes()  → Verifica existencia (true/false)

7. VALIDACIÓN:
   • every()   → ¿Todos cumplen la condición?
   • some()    → ¿Al menos uno cumple?

8. ITERACIÓN:
   • forEach() → Ejecuta función por cada elemento
   • for...of  → Itera sobre valores
   • for       → Control total con índices

💡 MEJORES PRÁCTICAS:
   ✓ Prefiere métodos inmutables (map, filter) sobre mutación
   ✓ Usa forEach para efectos secundarios (console.log, etc.)
   ✓ Usa map cuando necesites transformar datos
   ✓ Usa filter para seleccionar elementos
   ✓ Usa reduce para cálculos acumulativos
   ✓ Los arrays pueden contener cualquier tipo, pero mantén consistencia

🎯 PREGUNTAS DE REPASO:
   1. ¿Cuál es la diferencia entre push() y concat()?
   2. ¿Por qué preferir map() sobre un for que modifica el array?
   3. ¿Cuándo usar filter() vs find()?
   4. ¿Qué devuelve reduce() y cuándo es útil?
   5. ¿Cuál es la diferencia entre every() y some()?
`);

console.log('='.repeat(80));
console.log('🎓 ¡Fin del módulo de Arrays! Practica con los ejercicios.');
console.log('='.repeat(80));

