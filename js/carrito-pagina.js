function renderizarCarrito() {
  const carrito = obtenerCarrito();

  const tabla = document.getElementById("tablaCarrito");
  const cuerpo = document.getElementById("cuerpoCarrito");
  const mensajeVacio = document.getElementById("carritoVacio");
  const totalEl = document.getElementById("totalCarrito");
  if(!tabla ||!cuerpo) return;

  if (carrito.length === 0) {
    tabla.hidden = true;
    if(mensajeVacio) mensajeVacio.hidden = false;
    if(totalEl) totalEl.textContent = 0;
    actualizarContadorCarrito();
    return;
  }

  tabla.hidden = false;
  if(mensajeVacio) mensajeVacio.hidden = true;

  let filas = "";

  carrito.forEach(function (item) {
    const producto = PRODUCTOS.find(function (p) {
      return p.codigo === item.codigo;
    });

    if(!producto) return; // si el producto fue eliminado del catalogo, lo saltamos

    const subtotal = producto.precioResidencial * item.cantidad;

    filas += `
      <tr>
        <td>${obtenerImagenHtml(producto, "imagen-producto")}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precioResidencial}</td>
        <td>
          <button type="button" class="btn-cantidad" onclick="actualizarCantidad('${item.codigo}', ${item.cantidad - 1}); renderizarCarrito();">-</button>
          ${item.cantidad}
          <button type="button" class="btn-cantidad" onclick="actualizarCantidad('${item.codigo}', ${item.cantidad + 1}); renderizarCarrito();">+</button>
        </td>
        <td>$${subtotal}</td>
        <td>
          <button type="button" class="btn-secundario" onclick="quitarDelCarrito('${item.codigo}'); renderizarCarrito();">Quitar</button>
        </td>
      </tr>
    `;
  });

  cuerpo.innerHTML = filas;

  if(totalEl) totalEl.textContent = calcularTotal();

  actualizarContadorCarrito();
}

renderizarCarrito();