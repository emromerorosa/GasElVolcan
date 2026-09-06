// Muestra los productos destacados en la página de inicio (los primeros 4 del catálogo)
const grid = document.getElementById("grid-productos");
if(grid){
  const destacados = PRODUCTOS.slice(0, 4);
  let html = "";

  destacados.forEach(function (producto) {
    html += `
      <div class="tarjeta-producto">
          ${obtenerImagenHtml(producto, "imagen-producto")}
          <h3>${producto.nombre}</h3>
          <p>$${producto.precioResidencial}</p>
          <a class="btn-secundario" href="producto-detalle.html?codigo=${producto.codigo}">Ver detalle</a>
          <button type="button" class="btn-primario" onclick="agregarAlCarrito('${producto.codigo}', 1); actualizarContadorCarrito(); alert('Producto agregado al carrito');">Añadir</button>
      </div>
    `;
  });

  grid.innerHTML = html;
}