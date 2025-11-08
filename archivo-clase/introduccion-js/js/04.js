// ============================================================================
// RECURSO DIDÁCTICO: OPERADORES Y MATEMÁTICAS EN JAVASCRIPT
// ============================================================================
// Este archivo cubre operadores aritméticos, de asignación, comparación,
// lógicos y funciones matemáticas en JavaScript.
// ============================================================================

console.log('=== BIENVENIDO AL TUTORIAL DE OPERADORES EN JAVASCRIPT ===\n');

// ============================================================================
// 1. OPERADORES ARITMÉTICOS BÁSICOS
// ============================================================================
// Los operadores aritméticos realizan cálculos matemáticos básicos.
// Analogía: Son como las operaciones que harías con una calculadora.

console.log('--- 1. OPERADORES ARITMÉTICOS BÁSICOS ---');

const number1 = 10;
const number2 = 5;

console.log('Suma (+):', number1 + number2); // 15
console.log('Resta (-):', number1 - number2); // 5
console.log('Multiplicación (*):', number1 * number2); // 50
console.log('División (/):', number1 / number2); // 2
console.log('Módulo (%):', number1 % number2); // 0 (resto de la división)

// CONCEPTO CLAVE: El módulo (%) devuelve el RESTO de una división
console.log('\n💡 Ejemplo práctico del módulo:');
console.log('10 % 3 =', 10 % 3); // 1 (porque 10 ÷ 3 = 3 con resto 1)
console.log('Uso común: Determinar si un número es par o impar');
console.log('7 % 2 =', 7 % 2, '(impar, resto = 1)');
console.log('8 % 2 =', 8 % 2, '(par, resto = 0)\n');

// ============================================================================
// 2. OPERADORES DE ASIGNACIÓN
// ============================================================================
// Permiten asignar valores y realizar operaciones en una sola línea.
// Analogía: Son atajos para actualizar variables de forma más eficiente.

console.log('--- 2. OPERADORES DE ASIGNACIÓN ---');

let resultado = 20;
console.log('Valor inicial:', resultado); // 20

// += es equivalente a: resultado = resultado + 5
resultado += 5; 
console.log('Después de += 5:', resultado); // 25

resultado -= 3; // resultado = resultado - 3
console.log('Después de -= 3:', resultado); // 22

resultado *= 2; // resultado = resultado * 2
console.log('Después de *= 2:', resultado); // 44

resultado /= 4; // resultado = resultado / 4
console.log('Después de /= 4:', resultado); // 11

resultado %= 3; // resultado = resultado % 3
console.log('Después de %= 3:', resultado, '\n'); // 2

// ============================================================================
// 3. OPERADORES DE INCREMENTO Y DECREMENTO
// ============================================================================
// Aumentan o disminuyen un valor en 1 unidad.
// IMPORTANTE: Hay diferencia entre pre-incremento (++x) y post-incremento (x++)

console.log('--- 3. INCREMENTO Y DECREMENTO ---');

let contador = 0;
console.log('Contador inicial:', contador); // 0

contador++; // Post-incremento: usa el valor y luego incrementa
console.log('Después de contador++:', contador); // 1

contador--; // Post-decremento
console.log('Después de contador--:', contador); // 0

// Diferencia entre pre y post incremento
console.log('\n💡 Diferencia entre ++ antes y después:');
let a = 5;
console.log('a++ devuelve:', a++, ', ahora a =', a); // devuelve 5, a = 6
let b = 5;
console.log('++b devuelve:', ++b, ', ahora b =', b, '\n'); // devuelve 6, b = 6

// ============================================================================
// 4. OPERADORES DE COMPARACIÓN
// ============================================================================
// Comparan valores y devuelven true o false.
// CONCEPTO CLAVE: == vs === (débil vs estricta)

console.log('--- 4. OPERADORES DE COMPARACIÓN ---');

const valor1 = 10;
const valor2 = '10'; // String, no número

console.log('valor1 == valor2:', valor1 == valor2); // true (compara solo valor)
console.log('valor1 === valor2:', valor1 === valor2); // false (compara valor Y tipo)
console.log('valor1 != valor2:', valor1 != valor2); // false
console.log('valor1 !== valor2:', valor1 !== valor2); // true

console.log('\n⚠️ BUENA PRÁCTICA: Usa siempre === y !== para evitar errores');
console.log('Ejemplo del problema con ==:');
console.log('0 == false:', 0 == false); // true (conversión automática)
console.log('0 === false:', 0 === false, '\n'); // false (tipos diferentes)

console.log('Otros operadores de comparación:');
console.log('10 > 5:', 10 > 5); // true
console.log('10 < 5:', 10 < 5); // false
console.log('10 >= 10:', 10 >= 10); // true
console.log('10 <= 9:', 10 <= 9, '\n'); // false

// ============================================================================
// 5. OPERADORES LÓGICOS
// ============================================================================
// Combinan condiciones booleanas.
// Analogía: Piensa en AND como "ambas deben ser verdad" y OR como "al menos una"

console.log('--- 5. OPERADORES LÓGICOS ---');

const llueve = true;
const tieneParaguas = false;

console.log('¿Llueve Y tiene paraguas?', llueve && tieneParaguas); // false (AND)
console.log('¿Llueve O tiene paraguas?', llueve || tieneParaguas); // true (OR)
console.log('¿NO llueve?', !llueve); // false (NOT)

console.log('\n💡 Tabla de verdad de AND (&&):');
console.log('true && true =', true && true); // true
console.log('true && false =', true && false); // false
console.log('false && false =', false && false); // false

console.log('\n💡 Tabla de verdad de OR (||):');
console.log('true || false =', true || false); // true
console.log('false || false =', false || false, '\n'); // false

// ============================================================================
// 6. FUNCIONES MATEMÁTICAS CON Math
// ============================================================================
// El objeto Math proporciona funciones y constantes matemáticas.

console.log('--- 6. FUNCIONES MATEMÁTICAS ---');

// 6.1 Redondeo
console.log('📊 Funciones de redondeo:');
console.log('Math.round(4.7):', Math.round(4.7)); // 5 (redondeo normal)
console.log('Math.round(4.4):', Math.round(4.4)); // 4
console.log('Math.ceil(4.1):', Math.ceil(4.1)); // 5 (siempre hacia arriba)
console.log('Math.floor(4.9):', Math.floor(4.9), '\n'); // 4 (siempre hacia abajo)

// 6.2 Valor absoluto
console.log('📏 Valor absoluto (distancia desde cero):');
console.log('Math.abs(-10):', Math.abs(-10)); // 10
console.log('Math.abs(10):', Math.abs(10), '\n'); // 10

// 6.3 PROBLEMA IMPORTANTE: Precisión con decimales
console.log('⚠️ PROBLEMA DE PRECISIÓN CON DECIMALES:');
console.log('0.1 + 0.2 =', 0.1 + 0.2); // 0.30000000000000004
console.log('¿Es igual a 0.3?', (0.1 + 0.2) === 0.3, '\n'); // false

console.log('✅ SOLUCIONES:');
console.log('toFixed(2):', (0.1 + 0.2).toFixed(2)); // "0.30" (string)
console.log('toPrecision(2):', (0.1 + 0.2).toPrecision(2)); // "0.30" (string)
console.log('Multiplicar y dividir:', Math.round((0.1 + 0.2) * 100) / 100, '\n'); // 0.3

// 6.4 Potencias y raíces
console.log('🔢 Potencias y raíces:');
console.log('Math.sqrt(16):', Math.sqrt(16)); // 4 (raíz cuadrada)
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 8 (2 elevado a 3)
console.log('2 ** 3:', 2 ** 3, '(operador de exponente ES6)\n'); // 8

// 6.5 Números aleatorios
console.log('🎲 Números aleatorios:');
console.log('Math.random():', Math.random()); // entre 0 (incluido) y 1 (excluido)

// Función útil para generar números aleatorios en un rango
function generarNumeroAleatorio(min, max) {
  // Math.random() * (max - min + 1) da un número entre 0 y (max-min+1)
  // Math.floor() redondea hacia abajo
  // + min ajusta el rango al mínimo deseado
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Número aleatorio entre 1 y 10:', generarNumeroAleatorio(1, 10));
console.log('Número aleatorio entre 5 y 15:', generarNumeroAleatorio(5, 15), '\n');

// 6.6 Máximo y mínimo
console.log('📈 Máximo y mínimo:');
console.log('Math.max(3, 7, 2, 9):', Math.max(3, 7, 2, 9)); // 9
console.log('Math.min(3, 7, 2, 9):', Math.min(3, 7, 2, 9), '\n'); // 2

// 6.7 Constantes matemáticas
console.log('🔢 Constantes matemáticas importantes:');
console.log('Math.PI:', Math.PI); // 3.141592653589793
console.log('Math.E:', Math.E); // 2.718281828459045 (número de Euler)
console.log('Math.SQRT2:', Math.SQRT2, '\n'); // √2 ≈ 1.414

// ============================================================================
// 7. EJERCICIOS PRÁCTICOS
// ============================================================================

console.log('=== EJERCICIOS PARA PRACTICAR ===\n');

console.log('📝 EJERCICIO 1: Calculadora de propinas');
console.log('Implementa una función que calcule propina (15%) y total');
function calcularPropina(cuentaBase) {
  const propina = cuentaBase * 0.15;
  const total = cuentaBase + propina;
  return { propina, total };
}
const ejemplo1 = calcularPropina(100);
console.log('Cuenta: $100, Propina:', ejemplo1.propina, ', Total:', ejemplo1.total, '\n');

console.log('📝 EJERCICIO 2: Determinar si un número es par');
function esPar(numero) {
  return numero % 2 === 0;
}
console.log('¿Es 7 par?', esPar(7)); // false
console.log('¿Es 8 par?', esPar(8), '\n'); // true

console.log('📝 EJERCICIO 3: Calcular área de un círculo');
function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}
console.log('Área de círculo con radio 5:', areaCirculo(5).toFixed(2), '\n');

// ============================================================================
// 8. PREGUNTAS PARA REFLEXIONAR
// ============================================================================

console.log('=== PREGUNTAS PARA REFLEXIONAR ===\n');
console.log('❓ 1. ¿Cuál es la diferencia entre == y ===?');
console.log('❓ 2. ¿Por qué 0.1 + 0.2 no es exactamente 0.3?');
console.log('❓ 3. ¿Cuándo usarías Math.floor() vs Math.ceil()?');
console.log('❓ 4. ¿Qué devuelve 5 % 2 y por qué?');
console.log('❓ 5. ¿Cuál es la diferencia entre x++ y ++x?\n');

// ============================================================================
// 9. RETOS ADICIONALES
// ============================================================================

console.log('=== RETOS PARA PRACTICAR ===\n');
console.log('🎯 RETO 1: Crea una función que convierta Celsius a Fahrenheit');
console.log('   Fórmula: F = (C × 9/5) + 32\n');

console.log('🎯 RETO 2: Implementa una función que simule lanzar dos dados');
console.log('   y devuelva la suma de ambos\n');

console.log('🎯 RETO 3: Crea una función que determine si un año es bisiesto');
console.log('   (divisible por 4, pero no por 100, excepto si es divisible por 400)\n');

console.log('🎯 RETO 4: Implementa una función que calcule el IMC (Índice de Masa Corporal)');
console.log('   Fórmula: IMC = peso(kg) / altura(m)²\n');

// ============================================================================
// 10. RESUMEN FINAL
// ============================================================================

console.log('=== RESUMEN DE CONCEPTOS CLAVE ===\n');
console.log('✅ OPERADORES ARITMÉTICOS: +, -, *, /, % (módulo)');
console.log('✅ OPERADORES DE ASIGNACIÓN: =, +=, -=, *=, /=, %=');
console.log('✅ INCREMENTO/DECREMENTO: ++, --');
console.log('✅ COMPARACIÓN: Usa === y !== (estricta) en lugar de == y !=');
console.log('✅ LÓGICOS: && (AND), || (OR), ! (NOT)');
console.log('✅ Math.round/ceil/floor: Diferentes formas de redondear');
console.log('✅ Math.random(): Genera números aleatorios entre 0 y 1');
console.log('✅ PRECAUCIÓN: Los decimales tienen problemas de precisión');
console.log('✅ BUENA PRÁCTICA: Usa funciones auxiliares para cálculos comunes\n');

console.log('=== FIN DEL TUTORIAL ===');
console.log('💪 ¡Sigue practicando y experimentando con estos conceptos!');