// Objetos

// Tipo de datos complejos que permiten almacenar colecciones de datos y funcionalidades.

// Creación de un objeto
const persona = {
  nombre: 'Jose',
  edad: 30,
  ciudad: 'Madrid',
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

console.log('Objeto persona:', persona);
console.log('Tipo de dato de persona:', typeof persona); // "object"
console.table(persona); // Muestra el objeto en formato tabla

// Acceso a propiedades
console.log('Nombre:', persona.nombre); // Acceso con notación de punto
console.log('Edad:', persona['edad']); // Acceso con notación de corchetes
console.log('Ciudad:', persona.ciudad);
persona.saludar();

// destructuring
const { nombre, edad, ciudad } = persona;

const nombrePersonaDestructuring = nombre;

console.log('Destructuring - Nombre:', nombre);
console.log('Destructuring - Edad:', edad);
console.log('Destructuring - Ciudad:', ciudad);

// Modificación de propiedades
persona.edad = 31;
persona['ciudad'] = 'Barcelona';
console.log('Después de modificar edad y ciudad:', persona);

// Agregar nuevas propiedades
persona.profesion = 'Desarrollador';
console.log('Después de agregar profesión:', persona);

// Eliminar propiedades
delete persona.ciudad;
console.log('Después de eliminar ciudad:', persona);



