// ============================================================================
// RECURSO DIDÁCTICO: TIPOS DE DATOS PRIMITIVOS EN JAVASCRIPT
// ============================================================================
// JavaScript tiene 7 tipos de datos primitivos. Son los "bloques de construcción"
// más básicos del lenguaje, como los átomos en química.
// ============================================================================

console.log('=== TIPOS DE DATOS PRIMITIVOS EN JAVASCRIPT ===\n');

// ----------------------------------------------------------------------------
// 1. UNDEFINED - "El valor ausente por defecto"
// ----------------------------------------------------------------------------
// CONCEPTO: Una variable que ha sido declarada pero no inicializada.
// ANALOGÍA: Es como una caja vacía que acabas de crear, pero no has puesto nada dentro.

let varIndefinida;
console.log('1. UNDEFINED:');
console.log('   Valor:', varIndefinida); // undefined
console.log('   Tipo:', typeof varIndefinida); // "undefined"
console.log('   Explicación: Variable declarada sin valor asignado\n');

// ----------------------------------------------------------------------------
// 2. NULL - "El valor ausente intencional"
// ----------------------------------------------------------------------------
// CONCEPTO: Representa la ausencia intencional de valor.
// ANALOGÍA: Es como una caja que intencionalmente marcaste como "vacía".
// DIFERENCIA CON UNDEFINED: null es explícito, undefined es automático.

let varNula = null;
console.log('2. NULL:');
console.log('   Valor:', varNula); // null
console.log('   Tipo:', typeof varNula); // "object" (bug histórico de JS)
console.log('   Explicación: Ausencia intencional de valor');
console.log('   ⚠️ Nota: typeof null devuelve "object" por un bug antiguo de JS\n');

// ----------------------------------------------------------------------------
// 3. NUMBER - "Números con o sin decimales"
// ----------------------------------------------------------------------------
// CONCEPTO: Representa números enteros y decimales (flotantes).
// RANGO: Desde -(2^53 - 1) hasta (2^53 - 1)
// VALORES ESPECIALES: Infinity, -Infinity, NaN

let numero = 42;
let decimal = 3.14159;
let negativo = -273.15;
let infinito = Infinity;
let noEsNumero = NaN; // "Not a Number"

console.log('3. NUMBER:');
console.log('   Entero:', numero); // 42
console.log('   Decimal:', decimal); // 3.14159
console.log('   Negativo:', negativo); // -273.15
console.log('   Infinito:', infinito); // Infinity
console.log('   NaN:', noEsNumero); // NaN
console.log('   Tipo:', typeof numero); // "number"
console.log('   💡 Tip: NaN es el único valor que NO es igual a sí mismo:', NaN === NaN, '\n');

// ----------------------------------------------------------------------------
// 4. STRING - "Cadenas de texto"
// ----------------------------------------------------------------------------
// CONCEPTO: Secuencia de caracteres para representar texto.
// SINTAXIS: Puede usar comillas simples '', dobles "", o backticks ``

let textoSimple = 'Hola, Mundo!';
let textoDoble = "JavaScript es genial";
let textoTemplate = `La suma de 2 + 2 es: ${2 + 2}`; // Template literals
let textoMultilinea = `Este es un texto
que abarca
varias líneas`;

console.log('4. STRING:');
console.log('   Comillas simples:', textoSimple);
console.log('   Comillas dobles:', textoDoble);
console.log('   Template literal:', textoTemplate);
console.log('   Multilínea:', textoMultilinea);
console.log('   Longitud:', textoSimple.length); // 13
console.log('   Tipo:', typeof textoSimple, '\n'); // "string"

// ----------------------------------------------------------------------------
// 5. BOOLEAN - "Verdadero o Falso"
// ----------------------------------------------------------------------------
// CONCEPTO: Representa un valor lógico: verdadero (true) o falso (false).
// ANALOGÍA: Como un interruptor de luz: encendido (true) o apagado (false).
// USO COMÚN: Condiciones, validaciones, control de flujo.

let esVerdadero = true;
let esFalso = false;
let resultado = 5 > 3; // true
let comparacion = 10 === '10'; // false (tipo diferente)

console.log('5. BOOLEAN:');
console.log('   Verdadero:', esVerdadero); // true
console.log('   Falso:', esFalso); // false
console.log('   Resultado de 5 > 3:', resultado); // true
console.log('   Resultado de 10 === "10":', comparacion); // false
console.log('   Tipo:', typeof esVerdadero, '\n'); // "boolean"

// ----------------------------------------------------------------------------
// 6. SYMBOL - "Identificadores únicos e inmutables"
// ----------------------------------------------------------------------------
// CONCEPTO: Crea un valor único que nunca será igual a otro, incluso con la misma descripción.
// ANALOGÍA: Como huellas dactilares - cada persona tiene una única, aunque se llamen igual.
// USO COMÚN: Crear propiedades privadas en objetos, evitar colisiones de nombres.

let simbolo1 = Symbol('miSimbolo');
let simbolo2 = Symbol('miSimbolo');
let simbolo3 = simbolo1; // Referencia al mismo símbolo

console.log('6. SYMBOL:');
console.log('   Símbolo 1:', simbolo1); // Symbol(miSimbolo)
console.log('   Símbolo 2:', simbolo2); // Symbol(miSimbolo)
console.log('   ¿simbolo1 === simbolo2?:', simbolo1 === simbolo2); // false (únicos)
console.log('   ¿simbolo1 === simbolo3?:', simbolo1 === simbolo3); // true (misma referencia)
console.log('   Tipo:', typeof simbolo1, '\n'); // "symbol"

// ----------------------------------------------------------------------------
// 7. BIGINT - "Números enteros muy grandes"
// ----------------------------------------------------------------------------
// CONCEPTO: Permite trabajar con números enteros más allá del límite de Number.
// SINTAXIS: Añadir 'n' al final del número o usar BigInt()
// LIMITACIÓN: No se puede mezclar con Number en operaciones sin conversión.

let numeroGrande = 9007199254741991n; // Notación con 'n'
let numeroGrande2 = BigInt(9007199254741991); // Función BigInt()
let numeroGigante = 123456789012345678901234567890n;

console.log('7. BIGINT:');
console.log('   BigInt con n:', numeroGrande);
console.log('   BigInt con función:', numeroGrande2);
console.log('   ¿Son iguales?:', numeroGrande === numeroGrande2); // true
console.log('   Número gigante:', numeroGigante);
console.log('   Tipo:', typeof numeroGrande); // "bigint"
console.log('   💡 Operación: 9007199254741991n + 1n =', numeroGrande + 1n, '\n');

// ============================================================================
// TABLA COMPARATIVA DE TIPOS PRIMITIVOS
// ============================================================================
console.log('=== TABLA COMPARATIVA ===');
console.log('┌──────────────┬─────────────────────┬──────────────────────────┐');
console.log('│ Tipo         │ typeof retorna      │ Ejemplo                  │');
console.log('├──────────────┼─────────────────────┼──────────────────────────┤');
console.log('│ undefined    │ "undefined"         │ let x;                   │');
console.log('│ null         │ "object" (bug)      │ let x = null;            │');
console.log('│ number       │ "number"            │ let x = 42;              │');
console.log('│ string       │ "string"            │ let x = "texto";         │');
console.log('│ boolean      │ "boolean"           │ let x = true;            │');
console.log('│ symbol       │ "symbol"            │ let x = Symbol();        │');
console.log('│ bigint       │ "bigint"            │ let x = 123n;            │');
console.log('└──────────────┴─────────────────────┴──────────────────────────┘\n');

// ============================================================================
// EJERCICIOS PRÁCTICOS
// ============================================================================
console.log('=== EJERCICIOS PARA PRACTICAR ===\n');

console.log('📝 EJERCICIO 1: Identifica el tipo de dato');
console.log('   let a = "123"; // ¿Qué tipo es?');
console.log('   let b = 123; // ¿Qué tipo es?');
console.log('   let c = true; // ¿Qué tipo es?');
console.log('   Usa typeof para verificar tus respuestas.\n');

console.log('📝 EJERCICIO 2: ¿Qué imprime este código?');
console.log('   let x;');
console.log('   let y = null;');
console.log('   console.log(x === y); // ¿true o false?\n');

console.log('📝 EJERCICIO 3: Corrige el error');
console.log('   let numero1 = 100;');
console.log('   let numero2 = 50n;');
console.log('   // let suma = numero1 + numero2; // Error: ¿Por qué?\n');

console.log('📝 EJERCICIO 4: Crea variables');
console.log('   - Una variable con tu edad (number)');
console.log('   - Una variable con tu nombre (string)');
console.log('   - Una variable que indique si eres estudiante (boolean)');
console.log('   - Una variable sin valor asignado (undefined)\n');

// ============================================================================
// RESUMEN FINAL
// ============================================================================
console.log('=== RESUMEN DE CONCEPTOS CLAVE ===\n');

console.log('✅ JavaScript tiene 7 tipos de datos PRIMITIVOS (inmutables):');
console.log('   1. undefined - Variable sin valor asignado');
console.log('   2. null - Ausencia intencional de valor');
console.log('   3. number - Números enteros y decimales');
console.log('   4. string - Cadenas de texto');
console.log('   5. boolean - true o false');
console.log('   6. symbol - Identificador único');
console.log('   7. bigint - Números enteros muy grandes\n');

console.log('🔑 PUNTOS IMPORTANTES:');
console.log('   • Los primitivos son INMUTABLES (no se pueden modificar)');
console.log('   • Usa typeof para verificar el tipo de dato');
console.log('   • null es primitivo pero typeof devuelve "object" (bug histórico)');
console.log('   • NaN significa "Not a Number" pero su tipo es "number"');
console.log('   • Los Symbols siempre son únicos');
console.log('   • BigInt no se puede mezclar con Number sin conversión\n');

console.log('🎯 PRÓXIMOS PASOS:');
console.log('   → Aprende sobre tipos de datos por REFERENCIA (objetos, arrays)');
console.log('   → Estudia la COERCIÓN de tipos (conversión automática)');
console.log('   → Practica con OPERADORES y comparaciones\n');

console.log('=== FIN DEL RECURSO DIDÁCTICO ===');
