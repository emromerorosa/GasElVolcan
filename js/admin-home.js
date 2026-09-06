// Actualiza las tarjetas de resumen del dashboard con las cantidades reales
// de productos y usuarios registrados en el sistema
const statProductos = document.getElementById("statProductos");
if (statProductos) {
  statProductos.textContent = PRODUCTOS.length + " productos registrados";
}

const statUsuarios = document.getElementById("statUsuarios");
if (statUsuarios) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  statUsuarios.textContent = usuarios.length + " usuarios registrados";
}