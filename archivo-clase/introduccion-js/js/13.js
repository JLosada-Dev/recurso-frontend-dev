// DOM

// Seleccionar elementos
// getElementById
const contenedorTecnologias = document.getElementById('tecnologias');
/* console.log(contenedorTecnologias);

console.log(contenedorTecnologias.tagName);
console.log(contenedorTecnologias.id);
console.log(contenedorTecnologias.textContent); */

// querySelector funciona con selectores CSS
const heding = document.querySelector('.heading');
/* console.log(heding);
console.log(heding.textContent);
console.log(heding.classList[0]);
 */
// Modificar elementos
heding.textContent = 'Nuevo Heading desde JS';
console.log(heding.textContent);
heding.classList.add('text-blue-500');

// Seleccionar varios elementos
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

/* console.log(enlaces[0].textContent); */
enlaces.forEach((enlace) => {
  /* console.log(enlace.textContent); */
  /*  enlace.classList.add('text-orange-500'); */
});
enlaces.forEach((enlace) => {
  enlace.textContent = 'Enlace Modificado';
});

// Inyección de HTML
contenedorTecnologias.innerHTML += '<p>VueJS</p>';
/* console.log(contenedorTecnologias.tagName); */

const nuevoParrafo = document.createElement('P');
/* console.log(nuevoParrafo); */
nuevoParrafo.textContent = 'AngularJS';
contenedorTecnologias.appendChild(nuevoParrafo);

// Eventos
heding.addEventListener('click', () => {
  console.log('Diste click en el heading');
  heding.textContent = 'Heading Modificado por Evento de Click';
});
heding.addEventListener('dblclick', () => {
  console.log('Diste doble click en el heading');
  heding.textContent = 'Heading Modificado por Evento de Doble Click';
});

// Mouseover y Mouseout
heding.addEventListener('mouseover', () => {
  heding.style.color = 'red';
});
heding.addEventListener('mouseleave', () => {
  heding.style.color = 'black';
});

// Prevent Event
enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.textContent = 'Click prevenido';
  });
});

// Eventos de Formulario
const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');

inputNombre.addEventListener('input', (e) => {
  console.log(e.target.value);
});

inputPassword.addEventListener('input', (e) => {
  inputPassword.type = 'text';
  setTimeout(() => {
    inputPassword.type = 'password';
  }, 300);
  console.log(e.target.value);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const password = document.getElementById('password').value;

  console.log(`Nombre: ${nombre}, Password: ${password}`);

  const alertPrevia = document.querySelector('.alerta');
  if (alertPrevia) {
    alertPrevia.remove();
  }

  const alert = document.createElement('DIV');
  alert.classList.add(
    'alerta',
    'text-white',
    'uppercase',
    'text-sm',
    'text-center',
    'p-2',
    'font-black',
    'bg-gray-800'
  );

  if (nombre === '' || password === '') {
    console.log('Todos los campos son obligatorios');
    alert.textContent = 'Todos los campos son obligatorios';
    alert.classList.add('bg-red-600');
  } else {
    console.log('Formulario enviado');
    alert.textContent = 'Formulario enviado correctamente';
    alert.classList.add('bg-green-600');
  }

  formulario.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 3000);
});
