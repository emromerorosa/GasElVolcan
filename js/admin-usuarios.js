// Estructura oficial Acuerdo C+D - pág 2 guia_equipo.pdf
const usuarios = [
  { 
    run: "12.345.678-9", 
    nombre: "Juan", 
    apellidos: "Pérez González", 
    correo: "juan@gmail.com", 
    fechaNacimiento: "1998-04-15",
    tipoUsuario: "Cliente", 
    region: "Ñuble", 
    comuna: "Chillán", 
    direccion: "Av. Libertad 123",
    regionComunaOk: true
  },
  { 
    run: "98.765.432-1", 
    nombre: "María", 
    apellidos: "Gómez Soto", 
    correo: "maria@volcan.cl", 
    fechaNacimiento: "1990-10-20",
    tipoUsuario: "Administrador", 
    region: "Ñuble", 
    comuna: "Chillán Viejo", 
    direccion: "Calle Prat 456",
    regionComunaOk: true
  }
];

const tablaUser = document.getElementById("tablaUsuariosBody");

if (tablaUser) {
  usuarios.forEach(u => {
    tablaUser.innerHTML += `
      <tr>
        <td>${u.run}</td>
        <td>${u.nombre}</td>
        <td>${u.apellidos}</td>
        <td>${u.correo}</td>
        <td>${u.tipoUsuario}</td>
        <td><a href="usuario-editar.html?run=${u.run}">Editar</a></td>
      </tr>
    `;
  });
}


localStorage.setItem('usuarios', JSON.stringify(usuarios));