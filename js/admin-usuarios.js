var usuariosBase = [
    {run:"11111111-1", nombre:"Admin", apellidos:"Gas El Volcan", correo:"admin@gaselvolcan.cl", pass:"admin123", tipo:"admin", rol:"admin", fecha:"", region:"", comuna:"", direccion:""}
];

var usuarios = usuariosBase;

try{
    var g = localStorage.getItem("usuarios");
    if(g!= null){
        var temp = JSON.parse(g);
        if(temp && temp.length > 0) usuarios = temp;
    } else {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}catch(e){
    usuarios = usuariosBase;
}

function mostrarUsuarios(){
    var cuerpo = document.getElementById("cuerpoUsuarios");
    if(cuerpo == null) return;
    cuerpo.innerHTML = "";
    for(var i=0; i < usuarios.length; i++){
        var u = usuarios[i];
        var run = u.run || "-";
        var nombre = (u.nombre || "") + " " + (u.apellidos || "");
        var correo = u.correo || "";
        var tipo = u.tipo || u.rol || "cliente";
        cuerpo.innerHTML += "<tr><td>"+run+"</td><td>"+nombre.trim()+"</td><td>"+correo+"</td><td>"+tipo+"</td><td><button onclick='editarUsuario("+i+")'>Editar</button> <button onclick='eliminarUsuario("+i+")'>Eliminar</button></td></tr>";
    }
}

function editarUsuario(i){
    localStorage.setItem("indiceUsuarioEditar", i);
    window.location.href = "usuario-editar.html";
}

function eliminarUsuario(i){
    if(usuarios[i].correo == "admin@gaselvolcan.cl"){
        alert("No se puede eliminar admin principal");
        return;
    }
    if(confirm("¿Eliminar "+usuarios[i].correo+"?")){
        usuarios.splice(i,1);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();
    }
}

mostrarUsuarios();