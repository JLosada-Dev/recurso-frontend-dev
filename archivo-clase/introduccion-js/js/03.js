// ========================================
// MANIPULACIÓN DE STRINGS EN JAVASCRIPT
// ========================================

// 1. DECLARACIÓN DE STRINGS
// ========================================
let saludo = 'Hola';
let stringComillasSimples = 'Hola Mundo';

// 2. CONCATENACIÓN DE STRINGS
// ========================================
let nombre = 'Jose';

// Forma tradicional con +
let saludoCompleto = saludo + ', ' + nombre + '!';
console.log(saludoCompleto); // "Hola, Jose!"

// Usando console.log con múltiples parámetros
console.log(saludo, ', ', nombre, '!'); // "Hola, Jose!"

// Template literals (FORMA RECOMENDADA)
let saludoTemplate = `Mensaje ${saludo}, ${nombre}!`;
console.log(saludoTemplate);

// 3. PROPIEDADES DE STRINGS
// ========================================
let texto = 'JavaScript es genial';

// Longitud del string
console.log('Longitud:', texto.length); // 20

// 4. MÉTODOS DE TRANSFORMACIÓN
// ========================================

// Convertir a mayúsculas
console.log('Mayúsculas:', texto.toUpperCase()); // 'JAVASCRIPT ES GENIAL'

// Convertir a minúsculas
console.log('Minúsculas:', texto.toLowerCase()); // 'javascript es genial'

// Eliminar espacios (TRIM)
let textoConEspacios = '   Hola Mundo   ';
console.log('trim():', textoConEspacios.trim()); // 'Hola Mundo'
console.log('trimStart():', textoConEspacios.trimStart()); // 'Hola Mundo   '
console.log('trimEnd():', textoConEspacios.trimEnd()); // '   Hola Mundo'

// 5. ACCESO Y EXTRACCIÓN DE CARACTERES
// ========================================

// Acceder a un carácter por índice
console.log('Índice [0]:', texto[0]); // 'J'
console.log('charAt(4):', texto.charAt(4)); // 'S'

// Extraer subcadenas con slice
console.log('slice(0, 10):', texto.slice(0, 10)); // 'JavaScript'
console.log('slice(4):', texto.slice(4)); // 'Script es genial'
console.log('slice(-6):', texto.slice(-6)); // 'genial'

// Extraer subcadenas con substring
console.log('substring(0, 10):', texto.substring(0, 10)); // 'JavaScript'

// 6. MÉTODOS DE BÚSQUEDA
// ========================================

// Encontrar la posición de un texto
console.log('indexOf("es"):', texto.indexOf('es')); // 11
console.log('lastIndexOf("a"):', texto.lastIndexOf('a')); // 18

// Verificar si contiene un texto
console.log('includes("genial"):', texto.includes('genial')); // true
console.log('startsWith("Java"):', texto.startsWith('Java')); // true
console.log('endsWith("genial"):', texto.endsWith('genial')); // true

// 7. MÉTODOS DE MODIFICACIÓN
// ========================================

// Reemplazar texto
let nuevoTexto = texto.replace('genial', 'increíble');
console.log('replace():', nuevoTexto); // 'JavaScript es increíble'

// Dividir un string en array
let palabras = texto.split(' ');
console.log('split(" "):', palabras); // ['JavaScript', 'es', 'genial']

// Repetir un string
let repetirTexto = 'Hola! '.repeat(3);
console.log('repeat(3):', repetirTexto); // 'Hola! Hola! Hola! '
