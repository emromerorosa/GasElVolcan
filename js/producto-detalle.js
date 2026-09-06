const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("codigo");

// Busca ese producto en el catálogo
const producto = PRODUCTOS.find(function (p) {
  return p.codigo === codigo;
});

const breadcrumbEl = document.getElementById("breadcrumb");
const detalleEl = document.getElementById("detalleProducto");
const relacionadosEl = document.getElementById("grid-relacionados");

// Si no hay codigo o no existe el producto
if(!producto){
  if(breadcrumbEl) breadcrumbEl.textContent = "Home > Producto no encontrado";
  if(detalleEl) detalleEl.innerHTML = "<p>Producto no encontrado</p><a href='../index.html'>Volver al inicio</a>";
  if(relacionadosEl) relacionadosEl.innerHTML = "";
} else {
  // Arma el breadcrumb de navegación (Home > Categoría > Producto)
  if(breadcrumbEl) breadcrumbEl.textContent = `Home > ${producto.categoria} > ${producto.nombre}`;

  // Muestra la imagen, nombre, precio, descripción, selector de cantidad y botón de agregar al carrito
  if(detalleEl){
    detalleEl.innerHTML = `
      ${obtenerImagenHtml(producto, "imagen-producto-grande")}
      <h2>${producto.nombre}</h2>
      <p>$${producto.precioResidencial}</p>
      <p>${producto.descripcion}</p>
      <label for="inputCantidad">Cantidad:</label>
      <input type="number" id="inputCantidad" value="1" min="1">
      <button type="button" class="btn-primario" onclick="agregarAlCarrito('${producto.codigo}', Number(document.getElementById('inputCantidad').value)); actualizarContadorCarrito(); alert('Producto agregado al carrito');">Añadir al carrito</button>
    `;
  }

  // Busca productos de la misma categoría (excluyendo el actual) y los muestra como relacionados
  const relacionados = PRODUCTOS.filter(function (p) {
    return p.categoria === producto.categoria && p.codigo !== producto.codigo;
  });

  let filasRelacionados = "";
  relacionados.forEach(function (p) {
    filasRelacionados += `
      <div class="tarjeta-producto">
          ${obtenerImagenHtml(p, "imagen-producto")}
          <h3>${p.nombre}</h3>
          <p>$${p.precioResidencial}</p>
          <a class="btn-secundario" href="producto-detalle.html?codigo=${p.codigo}">Ver detalle</a>
      </div>
    `;
  });

  if(relacionadosEl) relacionadosEl.innerHTML = filasRelacionados;
}