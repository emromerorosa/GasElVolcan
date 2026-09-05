
function guardarCarrito(carrito) {
    const texto = JSON.stringify(carrito);
    localStorage.setItem("carrito", texto);
}

function obtenerCarrito() {
    const texto = localStorage.getItem("carrito");
    if (texto === null) {
        return [];
    }
    return JSON.parse(texto);
}

function agregarAlCarrito(codigo, cantidad) {
  const producto = PRODUCTOS.find(function (p) {
    return p.codigo === codigo;
  });

  if (producto === undefined) {
    console.error("Producto no encontrado:", codigo);
    return;
  }

  const carrito = obtenerCarrito();

  const itemExistente = carrito.find(function (item) {
    return item.codigo === codigo;
  });

  const cantidadActual = itemExistente ? itemExistente.cantidad : 0;
  const cantidadNueva = cantidadActual + cantidad;

  if (cantidadNueva > producto.stock) {
    alert("No hay suficiente stock. Disponible: " + producto.stock);
    return;
  }

  if (itemExistente) {
    itemExistente.cantidad = cantidadNueva;
  } else {
    carrito.push({ codigo: codigo, cantidad: cantidadNueva });
  }

  guardarCarrito(carrito);
}