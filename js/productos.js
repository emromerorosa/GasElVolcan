
const contenedor = document.getElementById("grid-productos");

let html= "";
PRODUCTOS.forEach(function (producto) {
    html += `<p>${producto.nombre} - $${producto.precioResidencial}</p>`;
});
contenedor.innerHTML = html;