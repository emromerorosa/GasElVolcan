

const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("codigo");

const producto = PRODUCTOS.find(function (p) {
  return p.codigo === codigo;
});

document.getElementById("breadcrumb").textContent = `Home > ${producto.categoria} > ${producto.nombre}`;

document.getElementById("detalleProducto").innerHTML = `
  ${obtenerImagenHtml(producto, "imagen-producto-grande")}
  <h2>${producto.nombre}</h2>
  <p>$${producto.precioResidencial}</p>
  <p>${producto.descripcion}</p>
  <label for="inputCantidad">Cantidad:</label>
  <input type="number" id="inputCantidad" value="1" min="1">
  <button type="button" onclick="agregarAlCarrito('${producto.codigo}', Number(document.getElementById('inputCantidad').value)); actualizarContadorCarrito(); alert('Producto agregado al carrito');">Añadir al carrito</button>
`;

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
        <a href="producto-detalle.html?codigo=${p.codigo}">Ver detalle</a>
    </div>
  `;
});

document.getElementById("grid-relacionados").innerHTML = filasRelacionados;