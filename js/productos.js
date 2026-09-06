
// Muestra la grilla de productos en productos.html, recorriendo el arreglo PRODUCTOS
const contenedor = document.getElementById("grid-productos");

let html= "";
PRODUCTOS.forEach(function (producto) {
    html += `
    <div class="tarjeta-producto">
    ${obtenerImagenHtml(producto, "imagen-producto")}
    <h3>${producto.nombre}</h3>
    <p>$${producto.precioResidencial}</p>
    <a class="btn-secundario" href="producto-detalle.html?codigo=${producto.codigo}">Ver detalle</a>
    <button type="button" class="btn-primario" onclick="agregarAlCarrito('${producto.codigo}', 1); actualizarContadorCarrito(); alert('Producto agregado al carrito');">Añadir</button>
  </div>`;
});
contenedor.innerHTML = html;