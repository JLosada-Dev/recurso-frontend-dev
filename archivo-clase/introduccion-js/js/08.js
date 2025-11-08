// ==========================================
// MÉTODOS DE ARRAYS EN JAVASCRIPT
// Guía Didáctica Completa
// ==========================================

/*
 * INTRODUCCIÓN:
 * Los arrays son estructuras de datos fundamentales en JavaScript.
 * Los métodos de arrays nos permiten manipular y transformar datos de forma eficiente.
 *
 * ANALOGÍA: Piensa en un array como una caja de herramientas.
 * Cada método es una herramienta diferente para trabajar con los datos.
 */

// Arrays de ejemplo para practicar
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30, 40, 50];

console.log('=== ARRAYS ORIGINALES ===');
console.log('Tecnologías:', tecnologias);
console.log('Números:', numeros);
console.log('\n');

// ==========================================
// 1. forEach() - EL RECORREDOR
// ==========================================
/*
 * ¿QUÉ HACE?
 * Ejecuta una función para cada elemento del array.
 *
 * ¿CUÁNDO USARLO?
 * Cuando necesitas recorrer un array y ejecutar código por cada elemento,
 * sin necesidad de crear un nuevo array.
 *
 * ANALOGÍA: Como visitar cada casa en una calle para entregar correo.
 *
 * SINTAXIS: array.forEach((elemento, índice, arrayCompleto) => { ... })
 * - elemento: el valor actual
 * - índice: la posición (opcional)
 * - arrayCompleto: referencia al array original (opcional)
 */

console.log('=== 1. forEach() ===');
tecnologias.forEach((tech, index) => {
  console.log(`Posición ${index}: ${tech}`);
});

// Ejemplo práctico: Mostrar tecnologías con emoji
console.log('\nEjemplo práctico:');
tecnologias.forEach((tech) => {
  console.log(`📚 Aprende ${tech}`);
});
console.log('\n');

// ==========================================
// 2. map() - EL TRANSFORMADOR
// ==========================================
/*
 * ¿QUÉ HACE?
 * Crea un NUEVO array aplicando una transformación a cada elemento.
 *
 * ¿CUÁNDO USARLO?
 * Cuando necesitas transformar cada elemento y obtener un nuevo array.
 *
 * ANALOGÍA: Como una fábrica que toma materias primas y produce productos terminados.
 * Cada elemento entra, se transforma, y sale modificado.
 *
 * ⚠️ IMPORTANTE: NO modifica el array original, crea uno nuevo.
 */

console.log('=== 2. map() ===');
const tecnologiasMayusculas = tecnologias.map((tech) => tech.toUpperCase());
console.log('Original:', tecnologias);
console.log('Transformado:', tecnologiasMayusculas);

// Ejemplo práctico: Agregar experiencia a cada tecnología
const conExperiencia = tecnologias.map((tech, index) => {
  return `${tech} (${index + 1} años de experiencia)`;
});
console.log('\nEjemplo práctico:', conExperiencia);

// Ejemplo con números: Duplicar cada valor
const numerosDuplicados = numeros.map((num) => num * 2);
console.log('Números duplicados:', numerosDuplicados);
console.log('\n');

// ==========================================
// 3. filter() - EL FILTRADOR
// ==========================================
/*
 * ¿QUÉ HACE?
 * Crea un NUEVO array solo con los elementos que cumplen una condición.
 *
 * ¿CUÁNDO USARLO?
 * Cuando necesitas "filtrar" elementos según un criterio específico.
 *
 * ANALOGÍA: Como un colador que deja pasar solo lo que cumple cierta condición.
 * O como un guardia de seguridad que solo deja entrar a quien cumple los requisitos.
 *
 * ⚠️ IMPORTANTE: Devuelve un array (puede estar vacío si nada cumple la condición).
 */

console.log('=== 3. filter() ===');
const numerosMayoresQue25 = numeros.filter((num) => num > 25);
console.log('Original:', numeros);
console.log('Filtrado (> 25):', numerosMayoresQue25);

// Ejemplo práctico: Filtrar tecnologías que contengan 'a'
const techConA = tecnologias.filter((tech) => tech.toLowerCase().includes('a'));
console.log('\nTecnologías con "a":', techConA);

// Ejemplo combinado: Filtrar números pares
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log('Números pares:', numerosPares);
console.log('\n');

// ==========================================
// 4. reduce() - EL ACUMULADOR
// ==========================================
/*
 * ¿QUÉ HACE?
 * Reduce todo el array a UN SOLO VALOR aplicando una función acumulativa.
 *
 * ¿CUÁNDO USARLO?
 * Para sumar, contar, combinar o acumular valores en un resultado único.
 *
 * ANALOGÍA: Como una alcancía donde vas sumando monedas una por una
 * hasta obtener un total final.
 *
 * SINTAXIS: array.reduce((acumulador, elemento) => { ... }, valorInicial)
 * - acumulador: el valor que se va acumulando
 * - elemento: el valor actual del array
 * - valorInicial: el punto de partida del acumulador
 */

console.log('=== 4. reduce() ===');
const sumaTotal = numeros.reduce((acumulador, num) => {
  console.log(
    `Acumulador: ${acumulador} + Número: ${num} = ${acumulador + num}`
  );
  return acumulador + num;
}, 0); // 0 es el valor inicial
console.log('Suma total:', sumaTotal);

// Ejemplo práctico: Concatenar todas las tecnologías
const fraseTecnologias = tecnologias.reduce((frase, tech, index) => {
  if (index === 0) return tech;
  if (index === tecnologias.length - 1) return `${frase} y ${tech}`;
  return `${frase}, ${tech}`;
}, '');
console.log('\nFrase:', fraseTecnologias);

// Ejemplo: Encontrar el número mayor
const numeroMayor = numeros.reduce((mayor, num) => (num > mayor ? num : mayor));
console.log('Número mayor:', numeroMayor);
console.log('\n');

// ==========================================
// 5. find() - EL BUSCADOR
// ==========================================
/*
 * ¿QUÉ HACE?
 * Devuelve el PRIMER elemento que cumple la condición.
 *
 * ¿CUÁNDO USARLO?
 * Cuando buscas UN elemento específico en el array.
 *
 * ANALOGÍA: Como buscar un libro específico en una biblioteca.
 * Cuando lo encuentras, dejas de buscar.
 *
 * ⚠️ IMPORTANTE:
 * - Devuelve el ELEMENTO (no un array)
 * - Devuelve undefined si no encuentra nada
 * - Se detiene en la primera coincidencia
 */

console.log('=== 5. find() ===');
const encontrarReact = tecnologias.find((tech) => tech === 'React');
console.log('Buscando "React":', encontrarReact);

// Ejemplo con undefined
const buscarVue = tecnologias.find((tech) => tech === 'Vue');
console.log('Buscando "Vue":', buscarVue); // undefined

// Ejemplo con números
const primerMayorQue25 = numeros.find((num) => num > 25);
console.log('Primer número > 25:', primerMayorQue25);
console.log('\n');

// ==========================================
// 6. some() - EL VERIFICADOR PARCIAL
// ==========================================
/*
 * ¿QUÉ HACE?
 * Comprueba si AL MENOS UN elemento cumple la condición.
 *
 * ¿CUÁNDO USARLO?
 * Para verificar si existe algún elemento que cumpla cierto criterio.
 *
 * ANALOGÍA: Como preguntar "¿Hay alguien en la sala que hable inglés?"
 * Si al menos una persona lo habla, la respuesta es SÍ.
 *
 * ⚠️ DEVUELVE: true o false (booleano)
 */

console.log('=== 6. some() ===');
const hayNumeroMayorQue40 = numeros.some((num) => num > 40);
console.log('¿Hay algún número > 40?', hayNumeroMayorQue40); // true

const hayNumeroNegativo = numeros.some((num) => num < 0);
console.log('¿Hay algún número negativo?', hayNumeroNegativo); // false

// Ejemplo práctico
const hayTechFrontend = tecnologias.some(
  (tech) => tech === 'HTML' || tech === 'CSS' || tech === 'React'
);
console.log('¿Hay tecnologías frontend?', hayTechFrontend);
console.log('\n');

// ==========================================
// 7. every() - EL VERIFICADOR TOTAL
// ==========================================
/*
 * ¿QUÉ HACE?
 * Comprueba si TODOS los elementos cumplen la condición.
 *
 * ¿CUÁNDO USARLO?
 * Para verificar que todos los elementos cumplan un requisito.
 *
 * ANALOGÍA: Como preguntar "¿Todos en la sala son mayores de 18?"
 * Solo si TODOS cumplen, la respuesta es SÍ.
 *
 * ⚠️ DEVUELVE: true o false (booleano)
 * ⚠️ DIFERENCIA CON some():
 * - some() = al menos uno ✓
 * - every() = todos ✓✓✓
 */

console.log('=== 7. every() ===');
const todosSonMayoresQue5 = numeros.every((num) => num > 5);
console.log('¿Todos los números son > 5?', todosSonMayoresQue5); // true

const todosSonMayoresQue30 = numeros.every((num) => num > 30);
console.log('¿Todos los números son > 30?', todosSonMayoresQue30); // false

// Ejemplo práctico
const todasTienenMasDe3Letras = tecnologias.every((tech) => tech.length > 3);
console.log(
  '¿Todas las tecnologías tienen más de 3 letras?',
  todasTienenMasDe3Letras
);
console.log('\n');

// ==========================================
// COMPARACIÓN Y CASOS DE USO
// ==========================================

console.log('=== COMPARACIÓN DE MÉTODOS ===');
console.log(`
┌─────────────┬──────────────────┬─────────────────────┐
│   Método    │   Qué devuelve   │    Cuándo usarlo    │
├─────────────┼──────────────────┼─────────────────────┤
│ forEach()   │ undefined        │ Iterar sin retorno  │
│ map()       │ Array nuevo      │ Transformar todos   │
│ filter()    │ Array nuevo      │ Seleccionar algunos │
│ reduce()    │ Un solo valor    │ Acumular/combinar   │
│ find()      │ Un elemento      │ Buscar uno          │
│ some()      │ true/false       │ ¿Existe alguno?     │
│ every()     │ true/false       │ ¿Todos cumplen?     │
└─────────────┴──────────────────┴─────────────────────┘
`);

// ==========================================
// EJERCICIOS PRÁCTICOS
// ==========================================

console.log('=== EJERCICIOS PARA PRACTICAR ===\n');

const productos = [
  { nombre: 'Laptop', precio: 1000, categoria: 'Electrónica' },
  { nombre: 'Mouse', precio: 25, categoria: 'Electrónica' },
  { nombre: 'Teclado', precio: 50, categoria: 'Electrónica' },
  { nombre: 'Silla', precio: 200, categoria: 'Muebles' },
  { nombre: 'Escritorio', precio: 300, categoria: 'Muebles' },
];

console.log('Datos:', productos);
console.log('\n📝 Intenta resolver estos ejercicios:\n');
console.log(
  '1. Usa map() para crear un array solo con los nombres de productos'
);
console.log('2. Usa filter() para obtener solo productos de Electrónica');
console.log(
  '3. Usa reduce() para calcular el precio total de todos los productos'
);
console.log('4. Usa find() para encontrar el producto "Silla"');
console.log(
  '5. Usa some() para verificar si hay algún producto de menos de $30'
);
console.log(
  '6. Usa every() para verificar si todos los productos cuestan menos de $2000'
);

// SOLUCIONES (descomenta para ver las respuestas)
/*
console.log('\n=== SOLUCIONES ===\n');

// 1. map()
const nombresProductos = productos.map(p => p.nombre);
console.log('1. Nombres:', nombresProductos);

// 2. filter()
const electronica = productos.filter(p => p.categoria === 'Electrónica');
console.log('2. Electrónica:', electronica);

// 3. reduce()
const precioTotal = productos.reduce((total, p) => total + p.precio, 0);
console.log('3. Precio total: $' + precioTotal);

// 4. find()
const silla = productos.find(p => p.nombre === 'Silla');
console.log('4. Silla:', silla);

// 5. some()
const hayBaratos = productos.some(p => p.precio < 30);
console.log('5. ¿Hay productos < $30?', hayBaratos);

// 6. every()
const todosBaratos = productos.every(p => p.precio < 2000);
console.log('6. ¿Todos < $2000?', todosBaratos);
*/

// ==========================================
// RESUMEN FINAL
// ==========================================

console.log('\n=== 📚 RESUMEN FINAL ===\n');
console.log(`
✅ PUNTOS CLAVE A RECORDAR:

1. forEach() → Recorre sin retornar nada
2. map() → Transforma y crea un array nuevo
3. filter() → Filtra elementos que cumplen condición
4. reduce() → Acumula en un solo valor
5. find() → Encuentra el primer elemento
6. some() → ¿Al menos uno cumple? → true/false
7. every() → ¿Todos cumplen? → true/false

💡 TIPS:
- map(), filter() y reduce() NO modifican el array original
- Usa forEach() solo para efectos secundarios (console.log, etc.)
- Combina métodos para operaciones complejas
- Siempre considera la legibilidad del código

🎯 PRÓXIMOS PASOS:
- Practica con los ejercicios propuestos
- Combina métodos (ej: filter().map())
- Explora otros métodos: findIndex(), includes(), sort()
`);

// ==========================================
// FIN DEL RECURSO DIDÁCTICO
// ==========================================



const arregloEjemplo = [1, 2, 3];

const newArray = arregloEjemplo.map((num) => num * 2);

/* for (let i = 0; i < arregloEjemplo.length; i++) {
  arregloEjemplo[i] = arregloEjemplo[i] * 2;
} */

const acumulado = arregloEjemplo.reduce((acc, num) => acc + num, 0);

const filteredArray = arregloEjemplo.filter((num) => num > 1);
