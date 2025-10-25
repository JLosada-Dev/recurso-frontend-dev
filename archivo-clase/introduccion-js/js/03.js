// manipulación de Strings
let saludo = 'Hola';
let stringComillasSimples = 'Hola Mundo';

// concatenación
let nombre = 'Jose';
let saludoCompleto = saludo + ', ' + nombre + '!';
console.log(saludoCompleto); // "Hola, Jose!"
console.log(saludo, ', ', nombre, '!'); // "Hola, Jose!"

// template literals (plantillas de texto)
let saludoTemplate = `Mensaje ${saludo}, ${nombre}!`;

// Propiedades y métodos de Strings
let texto = 'JavaScript es genial';

// Longitud del string
console.log(texto.length);

// Convertir a mayúsculas
console.log(texto.toUpperCase());

// Convertir a minúsculas
console.log(texto.toLowerCase());

// TRIM: eliminar espacios al inicio y final
let textoConEspacios = '   Hola Mundo   ';
console.log(textoConEspacios.trim());
console.log(textoConEspacios.trimStart());
console.log(textoConEspacios.trimEnd());

// navegación y extracción
console.log(texto[0]); // 'J'
console.log(texto.charAt(4)); // 'S'

console.log('slice(0-10) :', texto.slice(0, 10)); // 'JavaScript'
console.log('slice (4)', texto.slice(4)); // 'Script es genial'
console.log('slice (-6)', texto.slice(-6));

console.log('substring(0-10) :', texto.substring(0, 10)); // 'JavaScript'

// Metodos de búsqueda
console.log(texto.indexOf('es')); // 11
console.log(texto.lastIndexOf('a')); // 3
console.log(texto.includes('genial')); // true
console.log(texto.startsWith('Java')); // true
console.log(texto.endsWith('genial')); // true

// Reemplazo de texto
let nuevoTexto = texto.replace('genial', 'increíble');
console.log(nuevoTexto); // 'JavaScript es increíble'

// División de strings
let palabras = texto.split(' ');
console.log(palabras); // ['JavaScript', 'es', 'genial']

// Repetición de strings
let repetirTexto = 'Hola! '.repeat(3);
console.log(repetirTexto); // 'Hola! Hola! Hola! '

// Conversión de otros tipos a string

