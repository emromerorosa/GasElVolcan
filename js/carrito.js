
// Guarda el arreglo del carrito en localStorage (convertido a texto)
function guardarCarrito(carrito) {
    const texto = JSON.stringify(carrito);
    localStorage.setItem("carrito", texto);
}
// Lee el carrito guardado en localStorage; si no hay nada, devuelve un arreglo vacío
function obtenerCarrito() {
    const texto = localStorage.getItem("carrito");
    if (texto === null) {
        return [];
    }
    return JSON.parse(texto);
}
// Agrega una cantidad de un producto al carrito, respetando el stock disponible
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
// Elimina por completo un producto del carrito
function quitarDelCarrito(codigo) {
  const carrito = obtenerCarrito();

  const carritoActualizado = carrito.filter(function (item) {
    return item.codigo !== codigo;
  });

  guardarCarrito(carritoActualizado);
}
// Cambia la cantidad de un producto ya agregado; si la nueva cantidad es 0 o menos, lo quita
function actualizarCantidad(codigo, nuevaCantidad) {
  if (nuevaCantidad <= 0) {
    quitarDelCarrito(codigo);
    return;
  }

  const producto = PRODUCTOS.find(function (p) {
    return p.codigo === codigo;
  });

  if (producto === undefined) {
    console.error("Producto no encontrado:", codigo);
    return;
  }

  if (nuevaCantidad > producto.stock) {
    alert("No hay suficiente stock. Disponible: " + producto.stock);
    return;
  }

  const carrito = obtenerCarrito();

  const item = carrito.find(function (i) {
    return i.codigo === codigo;
  });

  if (item) {
    item.cantidad = nuevaCantidad;
    guardarCarrito(carrito);
  }
}
// Calcula el total a pagar sumando precio x cantidad de cada producto del carrito
function calcularTotal() {
  const carrito = obtenerCarrito();

  let total = 0;

  carrito.forEach(function (item) {
    const producto = PRODUCTOS.find(function (p) {
      return p.codigo === item.codigo;
    });

    total = total + producto.precioResidencial * item.cantidad;
  });

  return total;
}
// Actualiza el número del carrito en el menú, sumando las unidades totales
function actualizarContadorCarrito() {
  const carrito = obtenerCarrito();

  let totalUnidades = 0;

  carrito.forEach(function (item) {
    totalUnidades = totalUnidades + item.cantidad;
  });

  const contador = document.getElementById("contadorCarrito");
  contador.textContent = totalUnidades;
}

actualizarContadorCarrito();