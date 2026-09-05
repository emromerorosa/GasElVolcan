
const destacados = PRODUCTOS.slice(0, 4);

let html = "";

destacados.forEach(function (producto) {
  html += `
    <div class="tarjeta-producto">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precioResidencial}</p>
      <a href="producto-detalle.html?codigo=${producto.codigo}">Ver detalle</a>
    </div>
  `;
});

document.getElementById("grid-productos").innerHTML = html;