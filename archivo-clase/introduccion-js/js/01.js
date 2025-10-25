// ============================================
// DIFERENCIAS ENTRE VAR, LET Y CONST
// ============================================

// --- VAR (antigua forma, evitar usar) ---
// var permite hoisting (usar variable antes de declararla)
console.log(nombre); // undefined (no da error)
var nombre = 'Juan';
console.log(nombre); // 'Juan'

// --- LET (forma moderna) ---
// let NO permite hoisting (daría error si descomentamos)
/* 
console.log(nombre1); // Error: Cannot access before initialization
let nombre1 = 'Juan';
console.log(nombre1);
*/

// let permite reasignar valores
let nombre1 = 'Juan';
nombre1 = 'Pedro'; // ✓ Permitido
nombre1 = 1;       // ✓ Permitido (cambia tipo)

// --- CONVENCIÓN: Variables en camelCase ---
let booleanoTestUno = true;
let numberTestUno = 1;
let suma = booleanoTestUno + numberTestUno;
console.log(suma); // 2 (true se convierte a 1)

// --- CONST (valores constantes) ---
// CONVENCIÓN: Constantes en MAYUSCULA_SNAKE_CASE
const PI = 3.14;
const NOMBRE_PAIS = 'Argentina';

// const NO permite reasignación
// PI = 3.15; // ❌ Error: Assignment to constant variable

// ============================================
// TIPOS DE COMENTARIOS
// ============================================
// comentario de una sola línea
/* comentario de 
  varias líneas */
