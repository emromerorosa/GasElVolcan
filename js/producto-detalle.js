
// Actualiza el número del carrito (🛒) en el menú, sumando las unidades totales
const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("codigo");

// Busca ese producto en el catálogo
const producto = PRODUCTOS.find(function (p) {
  return p.codigo === codigo;
});

// Arma el breadcrumb de navegación (Home > Categoría > Producto)
document.getElementById("breadcrumb").textContent = `Home > ${producto.categoria} > ${producto.nombre}`;


// Muestra la imagen, nombre, precio, descripción, selector de cantidad y botón de agregar al carrito
document.getElementById("detalleProducto").innerHTML = `
  ${obtenerImagenHtml(producto, "imagen-producto-grande")}
  <h2>${producto.nombre}</h2>
  <p>$${producto.precioResidencial}</p>
  <p>${producto.descripcion}</p>
  <label for="inputCantidad">Cantidad:</label>
  <input type="number" id="inputCantidad" value="1" min="1">
  <button type="button" class="btn-primario" onclick="agregarAlCarrito('${producto.codigo}', Number(document.getElementById('inputCantidad').value)); actualizarContadorCarrito(); alert('Producto agregado al carrito');">Añadir al carrito</button>
`;

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

document.getElementById("grid-relacionados").innerHTML = filasRelacionados;