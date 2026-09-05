
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
