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

// Object Literal enhancements
/* const nombre2 = 'Ana';
const edad2 = 25;

const persona2 = {
  nombre2,
  edad2,
}; */

// Metodos objetos

console.log('Persona LLaves: ', Object.keys(persona));
console.log('Persona Valores: ', Object.values(persona));
console.log('Persona Entradas: ', Object.entries(persona));

console.log('¿Tiene propiedad nombre?', persona.hasOwnProperty('nombre'));

console.log('\n Recorrer el objeto: ');
Object.entries(persona).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

// Copias y combinaciones de objetos
const personaCopia = Object.assign({}, persona);
console.log('Copia de persona:', personaCopia);

// Spread operator "..."
const personaSpread = { ...persona, pais: 'España' };
console.log('Copia de persona con spread operator:', personaSpread);

const personaModificada = {
  ...persona,
  edad: 35,
  direccion: 'Calle Falsa 123',
};
console.log('Persona modificada con spread operator:', personaModificada);

// Combinar objetos
const datosPersonales = { telefono: '123456789', email: 'jose@example.com' };
const datosTrabajo = {
  empresa: 'Tech Solutions',
  puesto: 'Ingeniero de Software',
};

const perfilCompleto = { ...persona, ...datosPersonales, ...datosTrabajo };
console.log('Perfil completo combinando objetos:', perfilCompleto);
const perfilCompletoCopia = Object.assign(
  {},
  persona,
  datosPersonales,
  datosTrabajo
);

console.log('Perfil completo combinando objetos:', perfilCompletoCopia);

// Estructuras anidadas

const estudiante = {
  nombre: 'Luis',
  edad: 22,
  cursos: ['Matemáticas', 'Física', 'Programación'],
  direccion: {
    calle: 'Av. Siempre Viva',
    ciudad: 'Springfield',
    pais: 'USA',
  },
};

console.log('nombre del estudiante:', estudiante.nombre);
console.log('Cursos del estudiante:', estudiante.cursos[1]);
console.log('Ciudad del estudiante:', estudiante.direccion.ciudad);

// Destructuring en estructuras anidadas
const {
  nombre: nombreEstudiante,
  direccion: { ciudad: ciudadEstudiante },
} = estudiante;

console.log('Destructuring - Nombre del estudiante:', nombreEstudiante);
console.log('Destructuring - Ciudad del estudiante:', ciudadEstudiante);

// Proteccion de objetos

// Freeze
Object.freeze(estudiante);
estudiante.edad = 23; // No tendrá efecto
estudiante.salon = 'A1'; // No se puede agregar nueva propiedad
console.log(
  'Después de intentar modificar edad en objeto congelado:',
  estudiante
);

// Seal
const curso = {
  titulo: 'JavaScript Avanzado',
  duracion: 40,
};

Object.seal(curso);
curso.duracion = 45; // Se puede modificar propiedad existente
curso.nivel = 'Intermedio'; // No se puede agregar nueva propiedad
console.log('Después de modificar duración en objeto sellado:', curso);

// Recorrer objetos
console.log('\n Recorrer el objeto estudiante: ');
for (const clave in estudiante) {
  if (estudiante.hasOwnProperty(clave)) {
    console.log(`${clave}: ${estudiante[clave]}`);
  }
}

console.log('\n Recorrer el objeto estudiante con Object.entries: ');
Object.entries(estudiante).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});