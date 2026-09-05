
function renderizarCarrito() {
  const carrito = obtenerCarrito();

  const tabla = document.getElementById("tablaCarrito");
  const cuerpo = document.getElementById("cuerpoCarrito");
  const mensajeVacio = document.getElementById("carritoVacio");

  if (carrito.length === 0) {
    tabla.hidden = true;
    mensajeVacio.hidden = false;
    document.getElementById("totalCarrito").textContent = 0;
    actualizarContadorCarrito();
    return;
  }

  tabla.hidden = false;
  mensajeVacio.hidden = true;

  let filas = "";

  carrito.forEach(function (item) {
    const producto = PRODUCTOS.find(function (p) {
      return p.codigo === item.codigo;
    });

    const subtotal = producto.precioResidencial * item.cantidad;

    filas += `
      <tr>
        <td>${producto.nombre}</td>
        <td>$${producto.precioResidencial}</td>
        <td>
          <button type="button" onclick="actualizarCantidad('${item.codigo}', ${item.cantidad - 1}); renderizarCarrito();">-</button>
          ${item.cantidad}
          <button type="button" onclick="actualizarCantidad('${item.codigo}', ${item.cantidad + 1}); renderizarCarrito();">+</button>
        </td>
        <td>$${subtotal}</td>
        <td>
          <button type="button" onclick="quitarDelCarrito('${item.codigo}'); renderizarCarrito();">Quitar</button>
        </td>
      </tr>
    `;
  });

  cuerpo.innerHTML = filas;

  document.getElementById("totalCarrito").textContent = calcularTotal();

  actualizarContadorCarrito();
}

renderizarCarrito();