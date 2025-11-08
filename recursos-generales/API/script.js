/**
 * TABLA CON API - Versión Original Organizada
 * API: https://jsonplaceholder.typicode.com/users
 */

const API_URL = "https://jsonplaceholder.typicode.com/users";

const tablaBody = document.getElementById("tabla-body");
const inputBuscar = document.getElementById("buscar");
const btnRecargar = document.getElementById("recargar");
const infoDiv = document.getElementById("info");

let todosLosUsuarios = [];

// 1. Cargar usuarios
async function obtenerUsuarios() {
  mostrarCargando();
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error de red");
    const usuarios = await res.json();
    todosLosUsuarios = usuarios;
    mostrarUsuarios(usuarios);
    actualizarInfo(usuarios.length, usuarios.length);
  } catch (error) {
    mostrarError("No se pudieron cargar los datos");
  }
}

// 2. Mostrar usuarios en tabla
function mostrarUsuarios(usuarios) {
  tablaBody.innerHTML = "";
  if (usuarios.length === 0) return mostrarVacio();

  usuarios.forEach((u) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><span class="badge">#${u.id}</span></td>
      <td><strong>${u.name}</strong></td>
      <td>${u.email}</td>
      <td>@${u.username}</td>
      <td>${u.address.city}</td>
      <td>${u.company.name}</td>
      <td>
        <button class="btn btn-ver" onclick="verDetalle(${u.id})">Ver</button>
        <button class="btn btn-eliminar" onclick="eliminarUsuario(${u.id})">Eliminar</button>
      </td>
    `;
    tablaBody.appendChild(fila);
  });
}

// 3. Búsqueda
function buscarUsuarios(termino) {
  const t = termino.toLowerCase().trim();
  if (!t) {
    mostrarUsuarios(todosLosUsuarios);
    actualizarInfo(todosLosUsuarios.length, todosLosUsuarios.length);
    return;
  }

  const filtrados = todosLosUsuarios.filter(
    (u) =>
      u.name.toLowerCase().includes(t) ||
      u.email.toLowerCase().includes(t) ||
      u.username.toLowerCase().includes(t)
  );

  mostrarUsuarios(filtrados);
  actualizarInfo(filtrados.length, todosLosUsuarios.length);
}

// 4. Ver detalle
function verDetalle(id) {
  const u = todosLosUsuarios.find((x) => x.id === id);
  if (!u) return alert("Usuario no encontrado");

  const msg = `
ID: ${u.id}
Nombre: ${u.name}
Usuario: @${u.username}
Email: ${u.email}
Teléfono: ${u.phone}
Ciudad: ${u.address.city}
Empresa: ${u.company.name}
  `.trim();

  alert(msg);
}

// 5. Eliminar usuario
function eliminarUsuario(id) {
  const u = todosLosUsuarios.find((x) => x.id === id);
  if (!u) return;

  if (confirm(`¿Eliminar a ${u.name}?`)) {
    todosLosUsuarios = todosLosUsuarios.filter((x) => x.id !== id);
    const termino = inputBuscar.value;
    termino ? buscarUsuarios(termino) : mostrarUsuarios(todosLosUsuarios);
  }
}

// 6. Estados UI
function mostrarCargando() {
  tablaBody.innerHTML = `
    <tr><td colspan="7" class="cargando">
      <div class="spinner"></div>
      <p>Cargando datos...</p>
    </td></tr>
  `;
}

function mostrarVacio() {
  tablaBody.innerHTML = `
    <tr><td colspan="7" class="vacio">
      <h3>No se encontraron resultados</h3>
      <p>Prueba otro término</p>
    </td></tr>
  `;
}

function mostrarError(msg) {
  tablaBody.innerHTML = `
    <tr><td colspan="7" style="text-align:center;padding:40px;color:#f44336;">
      <h3>Error</h3><p>${msg}</p>
      <button class="btn btn-ver" onclick="obtenerUsuarios()">Reintentar</button>
    </td></tr>
  `;
}

function actualizarInfo(mostrados, total) {
  infoDiv.textContent =
    mostrados === total
      ? `Mostrando ${total} usuarios`
      : `Mostrando ${mostrados} de ${total} usuarios`;
}

// 7. Eventos
inputBuscar.addEventListener("input", (e) => buscarUsuarios(e.target.value));
btnRecargar.addEventListener("click", () => {
  inputBuscar.value = "";
  obtenerUsuarios();
});

// Atajo: Ctrl+K
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    inputBuscar.focus();
  }
});

// 8. Iniciar
document.addEventListener("DOMContentLoaded", obtenerUsuarios);
