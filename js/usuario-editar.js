// Lee el usuario a editar desde localStorage (índice que pone editarUsuario() en admin-usuarios.js)
// y precarga el formulario con sus datos actuales

const indice = localStorage.getItem("indiceUsuarioEditar");
const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

if (indice === null || !usuarios[indice]) {
    alert("No se encontró el usuario a editar");
    window.location.href = "usuarios.html";
} else {
    const u = usuarios[indice];

    document.getElementById("run").value = u.run || "";
    document.getElementById("nombre").value = u.nombre || "";
    document.getElementById("apellidos").value = u.apellidos || "";
    document.getElementById("correo").value = u.correo || "";
    document.getElementById("fechaNacimiento").value = u.fecha || "";
    document.getElementById("tipoUsuario").value = u.tipo || "";
    document.getElementById("region").value = u.region || "";

    // La comuna depende de la región, así que la cargamos con la función del HTML
    cargarComunas(u.region || "", u.comuna || "");

    document.getElementById("direccion").value = u.direccion || "";
    // La contraseña se deja en blanco a propósito, no se precarga
}