var usuarios = [
    {correo: "admin@gaselvolcan.cl", pass: "admin123", rol: "admin"}
];

var g = localStorage.getItem("usuarios");
if(g!= null){
    usuarios = JSON.parse(g);
} else {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function mostrarUsuarios(){
    var cuerpo = document.getElementById("cuerpoUsuarios");
    if(cuerpo == null) return;
    cuerpo.innerHTML = "";
    for(var i=0; i < usuarios.length; i++){
        cuerpo.innerHTML += "<tr><td>"+usuarios[i].correo+"</td><td>"+usuarios[i].rol+"</td><td><button onclick='eliminarUsuario("+i+")'>Eliminar</button></td></tr>";
    }
}

function eliminarUsuario(i){
    if(usuarios[i].correo == "admin@gaselvolcan.cl"){
        alert("No se puede eliminar admin principal");
        return;
    }
    usuarios.splice(i,1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mostrarUsuarios();
}

mostrarUsuarios();