/**
 * js/login.js
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof actualizarContadorCarrito === "function") {
    actualizarContadorCarrito();
  }

  // Elementos del DOM
  const form = document.getElementById("formLogin");
  const inputCorreo = document.getElementById("correo");
  const inputPassword = document.getElementById("password");

  const errorCorreo = document.getElementById("error-correo");
  const errorPassword = document.getElementById("error-password");
  const mensajeGeneral = document.getElementById("mensaje-general");

  // Dominios permitidos según la pauta
  const dominiosValidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  // FUNCIONES DE VALIDACIÓN

  function validarCorreo() {
    const valor = inputCorreo.value.trim().toLowerCase();

    // 1 Requerido
    if (valor === "") {
      mostrarError(inputCorreo, errorCorreo, "El correo electronico es obligatorio.");
      return false;
    }

    // 2 Máximo 100 caracteres
    if (valor.length > 100) {
      mostrarError(inputCorreo, errorCorreo, "El correo no puede exceder los 100 caracteres.");
      return false;
    }

    // 3 Estructura general de un email (texto@dominio.extension)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(valor)) {
      mostrarError(inputCorreo, errorCorreo, "Ingresa un formato de correo válido.");
      return false;
    }

    // 4 Solo dominios permitidos: @duoc.cl, @profesor.duoc.cl o @gmail.com
    const tieneDominioPermitido = dominiosValidos.some(dominio => valor.endsWith(dominio));
    if (!tieneDominioPermitido) {
      mostrarError(
        inputCorreo, 
        errorCorreo, 
        "Dominio no permitido. Solo se acepta @duoc.cl, @profesor.duoc.cl o @gmail.com"
      );
      return false;
    }

    limpiarError(inputCorreo, errorCorreo);
    return true;
  }

  function validarPassword() {
    const valor = inputPassword.value;

    // 1. Requerido
    if (valor.trim() === "") {
      mostrarError(inputPassword, errorPassword, "La contraseña es obligatoria.");
      return false;
    }

    // 2. Entre 4 y 10 caracteres
    if (valor.length < 4 || valor.length > 10) {
      mostrarError(inputPassword, errorPassword, "La contraseña debe tener entre 4 y 10 caracteres.");
      return false;
    }

    limpiarError(inputPassword, errorPassword);
    return true;
  }

  // HELPERS VISUALES (Mensajes de error)
  function mostrarError(input, elementoError, mensaje) {
    input.classList.add("input-invalido");
    input.classList.remove("input-valido");
    elementoError.textContent = mensaje;
  }

  function limpiarError(input, elementoError) {
    input.classList.remove("input-invalido");
    input.classList.add("input-valido");
    elementoError.textContent = "";
  }

  // EVENTOS EN TIEMPO REAL (input y blur)
  inputCorreo.addEventListener("input", validarCorreo);
  inputCorreo.addEventListener("blur", validarCorreo);

  inputPassword.addEventListener("input", validarPassword);
  inputPassword.addEventListener("blur", validarPassword);

  // ENVÍO DEL FORMULARIO
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página

    // Ejecutar ambas validaciones
    const correoOk = validarCorreo();
    const passwordOk = validarPassword();

    if (correoOk && passwordOk) {
      // Éxito: Simular inicio de sesión
      mensajeGeneral.className = "mensaje-alerta exito";
      mensajeGeneral.textContent = "Sesión iniciada correctamente Redirigiendo...";

      // Guardar simulación de sesión en localStorage para persistencia
      localStorage.setItem("usuarioActivo", JSON.stringify({
        correo: inputCorreo.value.trim(),
        rol: "Cliente"
      }));

      // Redirigir al home tras 1.5 segundos
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } else {
      mensajeGeneral.className = "mensaje-alerta error";
      mensajeGeneral.textContent = "Por favor, corrige los campos marcados en rojo.";
    }
  });
});