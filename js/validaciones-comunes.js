// Funciones compartidas por los 4 formularios de administración
// Escriben/borran el mensaje de error en el <span class="error-mensaje"> de cada campo

function mostrarError(idSpan, mensaje) {
    const span = document.getElementById(idSpan);
    if (span) span.textContent = mensaje;
}

function limpiarError(idSpan) {
    const span = document.getElementById(idSpan);
    if (span) span.textContent = "";
}