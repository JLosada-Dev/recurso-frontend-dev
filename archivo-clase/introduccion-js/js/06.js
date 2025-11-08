// ============================================================================
// RECURSO DIDÁCTICO: OBJETOS EN JAVASCRIPT
// ============================================================================
// Los objetos son como cajas organizadoras que guardan información relacionada.
// Por ejemplo, si pensamos en una persona, tiene nombre, edad, ciudad, etc.
// En lugar de crear variables separadas, agrupamos todo en un objeto.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. CREACIÓN DE OBJETOS
// ----------------------------------------------------------------------------
// Un objeto se crea con llaves {} y contiene pares clave:valor
// Analogía: Es como una ficha de datos donde cada campo tiene un nombre y un valor

const persona = {
  nombre: 'Jose',           // Propiedad: nombre
  edad: 30,                 // Propiedad: edad
  ciudad: 'Madrid',         // Propiedad: ciudad
  saludar: function () {    // Método: función dentro del objeto
    console.log(`Hola, mi nombre es ${this.nombre}`);
    // 'this' hace referencia al objeto actual (persona)
  },
};

console.log('\n=== 1. CREACIÓN DE OBJETOS ===');
console.log('Objeto persona:', persona);
console.log('Tipo de dato de persona:', typeof persona); // Devuelve "object"
console.table(persona); // Visualización en tabla (útil para debugging)

// 💡 CONCEPTO CLAVE: Los objetos pueden contener datos (propiedades) 
//    y acciones (métodos)

// ----------------------------------------------------------------------------
// 2. ACCESO A PROPIEDADES
// ----------------------------------------------------------------------------
// Hay dos formas de acceder a las propiedades de un objeto:

console.log('\n=== 2. ACCESO A PROPIEDADES ===');

// Notación de punto (más común y legible)
console.log('Nombre (notación punto):', persona.nombre);

// Notación de corchetes (útil cuando el nombre tiene espacios o es dinámico)
console.log('Edad (notación corchetes):', persona['edad']);

// Llamar a un método
persona.saludar(); // Ejecuta la función saludar

// 💡 CONCEPTO CLAVE: Usa notación de punto siempre que puedas.
//    Usa corchetes cuando el nombre de la propiedad esté en una variable.

// ----------------------------------------------------------------------------
// 3. DESTRUCTURING (DESESTRUCTURACIÓN)
// ----------------------------------------------------------------------------
// Permite extraer propiedades de un objeto y asignarlas a variables
// Analogía: Es como desempacar una caja y etiquetar cada cosa por separado

console.log('\n=== 3. DESTRUCTURING ===');

const { nombre, edad, ciudad } = persona;
// Esto es equivalente a:
// const nombre = persona.nombre;
// const edad = persona.edad;
// const ciudad = persona.ciudad;

console.log('Nombre extraído:', nombre);
console.log('Edad extraída:', edad);
console.log('Ciudad extraída:', ciudad);

// 💡 CONCEPTO CLAVE: El destructuring hace el código más limpio y legible

// ----------------------------------------------------------------------------
// 4. MODIFICACIÓN DE PROPIEDADES
// ----------------------------------------------------------------------------
// Los objetos son mutables: podemos cambiar sus propiedades después de crearlos

console.log('\n=== 4. MODIFICACIÓN DE PROPIEDADES ===');

persona.edad = 31;                    // Modificar con notación de punto
persona['ciudad'] = 'Barcelona';      // Modificar con notación de corchetes

console.log('Persona después de modificar:', persona);

// 💡 CONCEPTO CLAVE: Las propiedades de objetos pueden cambiar en cualquier momento

// ----------------------------------------------------------------------------
// 5. AGREGAR Y ELIMINAR PROPIEDADES
// ----------------------------------------------------------------------------

console.log('\n=== 5. AGREGAR Y ELIMINAR PROPIEDADES ===');

// Agregar nueva propiedad (simplemente asigna un valor a una clave nueva)
persona.profesion = 'Desarrollador';
console.log('Después de agregar profesión:', persona);

// Eliminar propiedad con el operador 'delete'
delete persona.ciudad;
console.log('Después de eliminar ciudad:', persona);

// 💡 CONCEPTO CLAVE: JavaScript permite agregar/eliminar propiedades dinámicamente

// ----------------------------------------------------------------------------
// 6. MÉTODOS DE OBJETOS
// ----------------------------------------------------------------------------
// JavaScript ofrece métodos útiles para trabajar con objetos

console.log('\n=== 6. MÉTODOS DE OBJETOS ===');

// Object.keys() - Devuelve un array con las claves del objeto
console.log('Claves del objeto:', Object.keys(persona));

// Object.values() - Devuelve un array con los valores del objeto
console.log('Valores del objeto:', Object.values(persona));

// Object.entries() - Devuelve un array de arrays [clave, valor]
console.log('Entradas del objeto:', Object.entries(persona));

// hasOwnProperty() - Verifica si el objeto tiene una propiedad específica
console.log('¿Tiene propiedad "nombre"?', persona.hasOwnProperty('nombre'));
console.log('¿Tiene propiedad "ciudad"?', persona.hasOwnProperty('ciudad'));

// 💡 CONCEPTO CLAVE: Estos métodos son fundamentales para iterar y analizar objetos

// ----------------------------------------------------------------------------
// 7. RECORRER OBJETOS
// ----------------------------------------------------------------------------

console.log('\n=== 7. RECORRER OBJETOS ===');

// Forma 1: Usando Object.entries() y forEach
console.log('Método 1 - Object.entries():');
Object.entries(persona).forEach(([clave, valor]) => {
  console.log(`  ${clave}: ${valor}`);
});

// Forma 2: Usando for...in (más clásica)
console.log('Método 2 - for...in:');
for (const clave in persona) {
  if (persona.hasOwnProperty(clave)) {
    console.log(`  ${clave}: ${persona[clave]}`);
  }
}

// 💡 CONCEPTO CLAVE: Siempre verifica hasOwnProperty() en for...in 
//    para evitar propiedades heredadas

// ----------------------------------------------------------------------------
// 8. COPIAR Y COMBINAR OBJETOS
// ----------------------------------------------------------------------------

console.log('\n=== 8. COPIAR Y COMBINAR OBJETOS ===');

// Opción 1: Object.assign() - Copia propiedades de uno o más objetos
const personaCopia = Object.assign({}, persona);
console.log('Copia con Object.assign():', personaCopia);

// Opción 2: Spread Operator (...) - Forma moderna y más legible
const personaSpread = { ...persona, pais: 'España' };
console.log('Copia con spread operator:', personaSpread);

// Modificar usando spread operator (crea nuevo objeto sin modificar el original)
const personaModificada = {
  ...persona,
  edad: 35,                      // Sobrescribe la edad
  direccion: 'Calle Falsa 123',  // Agrega nueva propiedad
};
console.log('Persona modificada:', personaModificada);
console.log('Persona original sin cambios:', persona);

// Combinar múltiples objetos
const datosPersonales = { telefono: '123456789', email: 'jose@example.com' };
const datosTrabajo = { empresa: 'Tech Solutions', puesto: 'Ingeniero de Software' };

const perfilCompleto = { ...persona, ...datosPersonales, ...datosTrabajo };
console.log('Perfil completo (spread):', perfilCompleto);

const perfilCompletoAssign = Object.assign({}, persona, datosPersonales, datosTrabajo);
console.log('Perfil completo (assign):', perfilCompletoAssign);

// 💡 CONCEPTO CLAVE: Usa spread operator (...) en código moderno.
//    Es más legible que Object.assign()

// ----------------------------------------------------------------------------
// 9. ESTRUCTURAS ANIDADAS
// ----------------------------------------------------------------------------
// Los objetos pueden contener otros objetos o arrays
// Analogía: Es como una carpeta que contiene subcarpetas y archivos

console.log('\n=== 9. ESTRUCTURAS ANIDADAS ===');

const estudiante = {
  nombre: 'Luis',
  edad: 22,
  cursos: ['Matemáticas', 'Física', 'Programación'], // Array dentro del objeto
  direccion: {                                         // Objeto dentro del objeto
    calle: 'Av. Siempre Viva',
    ciudad: 'Springfield',
    pais: 'USA',
  },
};

// Acceso a propiedades anidadas
console.log('Nombre del estudiante:', estudiante.nombre);
console.log('Segundo curso:', estudiante.cursos[1]);
console.log('Ciudad del estudiante:', estudiante.direccion.ciudad);

// Destructuring en estructuras anidadas
const {
  nombre: nombreEstudiante,                    // Renombrar variable
  direccion: { ciudad: ciudadEstudiante },     // Acceder a propiedad anidada
} = estudiante;

console.log('Nombre (destructuring):', nombreEstudiante);
console.log('Ciudad (destructuring):', ciudadEstudiante);

// 💡 CONCEPTO CLAVE: Usa encadenamiento de propiedades con cuidado.
//    Si una propiedad intermedia es undefined, causará un error.

// ----------------------------------------------------------------------------
// 10. PROTECCIÓN DE OBJETOS
// ----------------------------------------------------------------------------

console.log('\n=== 10. PROTECCIÓN DE OBJETOS ===');

// Object.freeze() - Congela el objeto (no se puede modificar, agregar ni eliminar)
const datosCongelados = {
  nombre: 'Ana',
  edad: 25,
};

Object.freeze(datosCongelados);
datosCongelados.edad = 26;          // ❌ No tendrá efecto
datosCongelados.ciudad = 'Madrid';  // ❌ No se puede agregar
delete datosCongelados.nombre;      // ❌ No se puede eliminar

console.log('Objeto congelado (sin cambios):', datosCongelados);

// Object.seal() - Sella el objeto (se puede modificar, pero no agregar ni eliminar)
const curso = {
  titulo: 'JavaScript Avanzado',
  duracion: 40,
};

Object.seal(curso);
curso.duracion = 45;            // ✅ Se puede modificar
curso.nivel = 'Intermedio';     // ❌ No se puede agregar
delete curso.titulo;            // ❌ No se puede eliminar

console.log('Objeto sellado (solo modificado):', curso);

// 💡 CONCEPTO CLAVE:
//    - freeze() = objeto completamente inmutable
//    - seal() = se pueden modificar propiedades existentes, pero no agregar/eliminar

// ============================================================================
// 📚 EJERCICIOS PRÁCTICOS
// ============================================================================

console.log('\n=== 📚 EJERCICIOS PARA PRACTICAR ===');
console.log(`
EJERCICIO 1: Crea un objeto 'libro' con las siguientes propiedades:
  - titulo
  - autor
  - año
  - genero
  Luego imprime cada propiedad usando destructuring.

EJERCICIO 2: Crea dos objetos 'usuario' y 'configuracion'.
  Combínalos en un nuevo objeto 'perfilUsuario' usando spread operator.

EJERCICIO 3: Crea un objeto 'vehiculo' con propiedades anidadas:
  - marca
  - modelo
  - especificaciones (objeto con: motor, color, año)
  Accede a la propiedad 'color' usando destructuring anidado.

EJERCICIO 4: Crea un objeto 'producto' y recórrelo usando:
  a) for...in
  b) Object.entries()
  Imprime solo las propiedades de tipo string.

EJERCICIO 5: Crea un objeto 'configuracionApp' y congélalo.
  Intenta modificarlo y explica qué sucede.
`);

// ============================================================================
// 📝 RESUMEN FINAL
// ============================================================================

console.log('\n=== 📝 RESUMEN FINAL ===');
console.log(`
✅ PUNTOS CLAVE SOBRE OBJETOS EN JAVASCRIPT:

1️⃣ DEFINICIÓN:
   - Los objetos almacenan datos relacionados en pares clave:valor
   - Pueden contener propiedades (datos) y métodos (funciones)

2️⃣ ACCESO:
   - Notación de punto: objeto.propiedad
   - Notación de corchetes: objeto['propiedad']

3️⃣ DESTRUCTURING:
   - Extrae propiedades de forma limpia: const { nombre, edad } = persona

4️⃣ MODIFICACIÓN:
   - Los objetos son mutables por defecto
   - Puedes agregar, modificar y eliminar propiedades

5️⃣ MÉTODOS IMPORTANTES:
   - Object.keys() → claves
   - Object.values() → valores
   - Object.entries() → pares [clave, valor]

6️⃣ COPIAR Y COMBINAR:
   - Spread operator (...): { ...obj1, ...obj2 }
   - Object.assign(): Object.assign({}, obj1, obj2)

7️⃣ ESTRUCTURAS ANIDADAS:
   - Los objetos pueden contener objetos y arrays
   - Acceso con encadenamiento: objeto.subObjeto.propiedad

8️⃣ PROTECCIÓN:
   - Object.freeze() → inmutable completo
   - Object.seal() → solo modificar propiedades existentes

💡 BUENAS PRÁCTICAS:
   ✓ Usa destructuring para código más limpio
   ✓ Prefiere spread operator sobre Object.assign()
   ✓ Verifica hasOwnProperty() en bucles for...in
   ✓ Usa const para objetos (aunque sean mutables)
   ✓ Documenta estructuras complejas con comentarios
`);

// ============================================================================
// 🎯 PRÓXIMOS PASOS
// ============================================================================

console.log('\n=== 🎯 PARA SEGUIR APRENDIENDO ===');
console.log(`
- Investiga sobre JSON (JavaScript Object Notation)
- Aprende sobre clases y prototipos (POO en JavaScript)
- Explora Optional Chaining (?.) para acceso seguro
- Estudia métodos avanzados: Object.create(), Object.defineProperty()
- Practica con APIs que devuelven objetos JSON
`);