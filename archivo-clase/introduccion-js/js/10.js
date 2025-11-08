// Opcional Chainning (?.) Permite acceder a propiedades anidadas sin causar un error si alguna propiedad intermedia es null o undefined.
const usuario = {
  nombre: 'Juan',
  direccion: {
    /*  ciudad: 'Madrid', */
    pais: 'España',
  },
};

console.log(usuario.direccion?.ciudad);
//Nulish Coalescing (??) Permite asignar un valor predeterminado cuando una variable es null o undefined.
const page = null ?? 1;
console.log(page); // 1

const page2 = 0 ?? 1;
console.log(page2); // 0

function procesarUsuario(usuario, callback) {
  const nombre = usuario.nombre ?? 'Invitado';
  callback(nombre);
}

procesarUsuario({ nombre: 'Ana' }, (nombre) => {
  console.log(`Hola, ${nombre}`); // Hola, Ana
});

// Truthy y Falsy
const valores = [0, 1, '', 'Hola', null, undefined, [], {}];

valores.forEach((valor) => {
  if (valor) {
    console.log(`${valor} es truthy`);
  } else {
    console.log(`${valor} es falsy`);
  }
});

//Evaluciones de cortocircuito (&& y ||)
const isActive = true;
const mensaje = isActive && 'El usuario está activo';
console.log(mensaje); // El usuario está activo


const esMayorDeEdad = false;
const descuento = esMayorDeEdad && 0.1;
const precioFinal = 100 - (descuento || 0);
console.log(precioFinal); // 100