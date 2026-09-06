function mostrarProductos(){
    var cuerpo = document.getElementById("cuerpoTabla");
    if(cuerpo == null) return;
    cuerpo.innerHTML = "";
    for(var i=0; i < productos.length; i++){
        var p = productos[i];
        cuerpo.innerHTML += "<tr><td>"+p.id+"</td><td>"+p.nombre+"</td><td>$"+p.precio+"</td><td>"+p.stock+"</td><td><button onclick='eliminar("+i+")'>Eliminar</button> <button onclick='editar("+i+")'>Editar</button></td></tr>";
    }
}

function eliminar(indice){
    productos.splice(indice, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
}

function editar(indice){
    localStorage.setItem("indiceEditar", indice);
    window.location.href = "producto-editar.html";
}

mostrarProductos();