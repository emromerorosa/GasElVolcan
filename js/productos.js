
const contenedor = document.getElementById("grid-productos");

let html= "";
PRODUCTOS.forEach(function (producto) {
    html += `
    <div class="tarjeta-producto">
    ${obtenerImagenHtml(producto, "imagen-producto")}
    <h3>${producto.nombre}</h3>
    <p>$${producto.precioResidencial}</p>
    <a href="producto-detalle.html?codigo=${producto.codigo}">Ver detalle</a>
  </div>`;
});
contenedor.innerHTML = html;