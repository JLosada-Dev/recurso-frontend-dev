/* ============================================================================
  ESTRUCTURAS DE CONTROL CONDICIONALES Y BUCLES EN JAVASCRIPT
  ============================================================================
  
  Este archivo es un recurso didáctico completo para aprender sobre:
  1. Condicionales (if, else, switch, operador ternario)
  2. Bucles (for, while, do-while, for-in, for-of, forEach)
  
  Analogía general: Las estructuras de control son como las decisiones y 
  rutinas en tu día a día. Los condicionales son como elegir qué desayunar,
  y los bucles son como cepillarte cada diente uno por uno.
============================================================================ */

// ============================================================================
// 1. ESTRUCTURAS CONDICIONALES - IF/ELSE
// ============================================================================

/* 
  El condicional IF evalúa una condición (verdadero/falso) y ejecuta código
  según el resultado. Es como una pregunta: "¿Se cumple esta condición?"
*/

const edad = 20;

// Ejemplo básico: IF con ELSE
if (edad >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('Eres menor de edad');
}

/* 
  Operadores de comparación útiles:
  === (igual estricto), !== (diferente estricto)
  >=  (mayor o igual), <= (menor o igual)
  >   (mayor que), <  (menor que)
*/

// Validación con return early (salida temprana)
if (edad !== 18) {
  console.log('No tienes 18 años');
  // return; // ⚠️ Comentado: solo funciona dentro de funciones
}

// Operador de negación (!)
let boolean = true;

if (!boolean) { // El ! invierte el valor: true se vuelve false
  console.log('La condición es verdadera');
} else {
  console.log('La condición es falsa'); // Esta se ejecutará
}

/* 🎯 CONCEPTO CLAVE: El operador ! niega un valor booleano
  !true = false
  !false = true
*/

// ============================================================================
// 2. ESTRUCTURA SWITCH - Múltiples opciones
// ============================================================================

/* 
  SWITCH es ideal cuando tienes muchas opciones discretas.
  Analogía: Como un menú de restaurante donde eliges UNA opción específica.
  
  ⚠️ IMPORTANTE: Siempre usa 'break' para evitar la ejecución en cascada
*/

const dia = 3;

switch (dia) {
  case 1:
   console.log('Lunes');
   break; // Sin break, continuaría ejecutando los siguientes casos
  case 2:
   console.log('Martes');
   break;
  case 3:
   console.log('Miércoles'); // ✅ Este caso se ejecuta
   break;
  case 4:
   console.log('Jueves');
   break;
  case 5:
   console.log('Viernes');
   break;
  default: // Se ejecuta si ningún caso coincide
   console.log('Otro día');
   break;
}

// ============================================================================
// 3. IF...ELSE IF...ELSE - Múltiples condiciones secuenciales
// ============================================================================

/* 
  Cuando tienes múltiples condiciones que dependen de rangos o expresiones
  más complejas, usa if...else if...else
*/

const hora = 14;

if (hora < 12) {
  console.log('Buenos días'); // De 0 a 11
} else if (hora < 18) {
  console.log('Buenas tardes'); // ✅ De 12 a 17 (se ejecuta esto)
} else {
  console.log('Buenas noches'); // De 18 en adelante
}

/* 🎯 CONCEPTO CLAVE: Las condiciones se evalúan en orden.
  La primera que sea verdadera se ejecuta y las demás se ignoran.
*/

// ============================================================================
// 4. OPERADOR TERNARIO - Condicional compacto
// ============================================================================

/* 
  Sintaxis: condición ? valorSiVerdadero : valorSiFalso
  
  Úsalo para asignaciones simples. Es como una pregunta de sí/no rápida.
  Analogía: "¿Llueve? Lleva paraguas : No lo lleves"
*/

const esFinDeSemana = true;
const mensaje = esFinDeSemana ? 'Es fin de semana' : 'No es fin de semana';
console.log(mensaje); // "Es fin de semana"

// Ejemplo adicional con número
const temperatura = 25;
const clima = temperatura > 20 ? 'Hace calor' : 'Hace frío';
console.log(clima); // "Hace calor"

// ⚠️ No abuses del operador ternario en expresiones complejas

// ============================================================================
// 5. BUCLES - Repetir acciones
// ============================================================================

/* 
  Los bucles repiten código múltiples veces.
  Analogía: Como contar ovejas para dormir, o hacer 10 flexiones.
*/

// ----------------------------------------------------------------------------
// 5.1 BUCLE FOR - Cuando sabes cuántas iteraciones necesitas
// ----------------------------------------------------------------------------

/* 
  Sintaxis: for (inicialización; condición; incremento) { código }
  
  - inicialización: Se ejecuta UNA vez al inicio
  - condición: Se evalúa ANTES de cada iteración
  - incremento: Se ejecuta DESPUÉS de cada iteración
*/

console.log('\n--- Bucle FOR ---');
for (let i = 0; i < 5; i++) {
  console.log('Iteración del bucle for:', i);
  // i = 0, 1, 2, 3, 4 (se detiene antes de 5)
}

/* 🎯 CONCEPTO CLAVE: 
  - i++ es lo mismo que i = i + 1
  - La condición i < 5 significa "mientras i sea menor que 5"
*/

// ----------------------------------------------------------------------------
// 5.2 BUCLE WHILE - Cuando no sabes cuántas iteraciones necesitas
// ----------------------------------------------------------------------------

/* 
  WHILE evalúa la condición ANTES de ejecutar el código.
  Si la condición es falsa desde el inicio, el código nunca se ejecuta.
*/

console.log('\n--- Bucle WHILE ---');
let contador = 0;
while (contador < 5) {
  console.log('Iteración del bucle while:', contador);
  contador++; // ⚠️ IMPORTANTE: Siempre incrementa o cambiarás la condición
}

// ⚠️ Peligro: Si olvidas incrementar, tendrás un bucle infinito

// ----------------------------------------------------------------------------
// 5.3 BUCLE DO...WHILE - Se ejecuta al menos UNA vez
// ----------------------------------------------------------------------------

/* 
  DO...WHILE evalúa la condición DESPUÉS de ejecutar el código.
  Garantiza al menos una ejecución, incluso si la condición es falsa.
*/

console.log('\n--- Bucle DO...WHILE ---');
let cuenta = 0;
do {
  console.log('Iteración del bucle do...while:', cuenta);
  cuenta++;
} while (cuenta < 5);

// Ejemplo donde se ejecuta una vez aunque la condición sea falsa
let numero = 10;
do {
  console.log('Esto se ejecuta una vez:', numero);
} while (numero < 5); // La condición es falsa, pero ya se ejecutó

// ----------------------------------------------------------------------------
// 5.4 BUCLE FOR...IN - Iterar propiedades de objetos
// ----------------------------------------------------------------------------

/* 
  FOR...IN itera sobre las CLAVES (keys) de un objeto.
  Analogía: Como revisar cada cajón de un archivero y leer su etiqueta.
*/

console.log('\n--- Bucle FOR...IN (Objetos) ---');
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid',
  profesion: 'Desarrollador'
};

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
  // clave = 'nombre', 'edad', 'ciudad', 'profesion'
  // persona[clave] accede al valor correspondiente
}

/* 🎯 CONCEPTO CLAVE: 
  - 'clave' es el nombre de la propiedad (string)
  - persona[clave] accede al valor usando notación de corchetes
*/

// ----------------------------------------------------------------------------
// 5.5 BUCLE FOR...OF - Iterar valores de arrays
// ----------------------------------------------------------------------------

/* 
  FOR...OF itera sobre los VALORES de arrays y otros iterables.
  Analogía: Como revisar cada carta de una baraja, una por una.
*/

console.log('\n--- Bucle FOR...OF (Arrays) ---');
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];

for (const color of colores) {
  console.log('Color:', color);
  // color toma directamente el valor: 'Rojo', 'Verde', etc.
}

/* 🎯 DIFERENCIA IMPORTANTE:
  - FOR...IN → Claves/índices (objetos y arrays)
  - FOR...OF → Valores (solo arrays e iterables)
*/

// ----------------------------------------------------------------------------
// 5.6 MÉTODO FOREACH - Iteración funcional de arrays
// ----------------------------------------------------------------------------

/* 
  FOREACH es un método de arrays que ejecuta una función por cada elemento.
  No devuelve nada (undefined). Úsalo cuando solo necesitas iterar.
*/

console.log('\n--- Método FOREACH ---');
colores.forEach((color, indice) => {
  console.log(`Color en índice ${indice}: ${color}`);
});

// Ejemplo con función nombrada
colores.forEach(function(color, indice, arrayCompleto) {
  console.log(`${indice + 1}. ${color}`);
  // Parámetros: (elemento, índice, array original)
});

/* 🎯 CONCEPTO CLAVE: forEach vs for:
  - forEach: Más declarativo, ideal para operaciones simples
  - for: Más control (puedes usar break y continue)
*/

// ============================================================================
// 6. CONTROL DE FLUJO EN BUCLES
// ============================================================================

console.log('\n--- Control de Flujo ---');

// BREAK - Detiene el bucle completamente
console.log('Ejemplo de BREAK:');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
   console.log('Se encontró el 5, deteniendo bucle');
   break; // Sale del bucle cuando i es 5
  }
  console.log(i); // Imprime: 0, 1, 2, 3, 4
}

// CONTINUE - Salta a la siguiente iteración
console.log('\nEjemplo de CONTINUE:');
for (let i = 0; i < 5; i++) {
  if (i === 2) {
   continue; // Salta cuando i es 2
  }
  console.log(i); // Imprime: 0, 1, 3, 4 (omite el 2)
}

// ============================================================================
// EJERCICIOS PRÁCTICOS
// ============================================================================

console.log('\n========================================');
console.log('EJERCICIOS PARA PRACTICAR');
console.log('========================================\n');

/* 
📝 EJERCICIO 1: Sistema de Calificaciones
Crea un sistema que convierta una nota numérica (0-100) en letra (A, B, C, D, F)
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59
*/

// 📝 EJERCICIO 2: Tabla de Multiplicar
// Usa un bucle for para crear la tabla del 7 (del 1 al 10)

// 📝 EJERCICIO 3: Números Pares
// Usa un bucle while para imprimir los números pares del 0 al 20

// 📝 EJERCICIO 4: Contador de Vocales
// Recorre un string y cuenta cuántas vocales tiene usando for...of

// 📝 EJERCICIO 5: Filtro de Productos
// Dado un array de productos con precios, usa forEach para mostrar
// solo los productos que cuestan menos de 50

// ============================================================================
// RESUMEN FINAL
// ============================================================================

/* 
🎓 RESUMEN DE CONCEPTOS CLAVE:

1. CONDICIONALES:
  - IF/ELSE: Para decisiones binarias o múltiples
  - SWITCH: Para múltiples opciones discretas
  - Operador Ternario: Para asignaciones condicionales simples

2. BUCLES:
  - FOR: Cuando sabes el número de iteraciones
  - WHILE: Cuando la condición determina las iteraciones
  - DO...WHILE: Cuando necesitas al menos una ejecución
  - FOR...IN: Para propiedades de objetos
  - FOR...OF: Para valores de arrays
  - FOREACH: Para iterar arrays de forma funcional

3. CONTROL DE FLUJO:
  - BREAK: Detiene el bucle completamente
  - CONTINUE: Salta a la siguiente iteración

4. BUENAS PRÁCTICAS:
  ✅ Usa === en lugar de == para comparaciones estrictas
  ✅ Siempre añade 'break' en casos de switch
  ✅ Evita bucles infinitos (actualiza las condiciones)
  ✅ Usa const para variables que no cambian
  ✅ Elige el bucle adecuado según tu necesidad

5. ERRORES COMUNES A EVITAR:
  ❌ Olvidar break en switch
  ❌ Bucles infinitos (no actualizar condición)
  ❌ Confundir for...in con for...of
  ❌ Modificar arrays durante forEach
  ❌ Ternarios anidados complejos

💡 PRÓXIMOS PASOS:
  - Practica combinando condicionales y bucles
  - Aprende sobre funciones para organizar mejor tu código
  - Estudia arrays y métodos avanzados (map, filter, reduce)
*/

console.log('\n✅ ¡Recurso didáctico completado!');
console.log('Practica los ejercicios y experimenta con el código.');

