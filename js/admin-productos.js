var guardado = localStorage.getItem("productos");
if(guardado){
  productos = JSON.parse(guardado);
}

var tabla = document.getElementById("tabla-productos");
tabla.innerHTML = "";

for(var i=0; i<productos.length; i++){
  tabla.innerHTML +=
  "<tr><td>"+productos[i].id+"</td>"+
  "<td>"+productos[i].nombre+"</td>"+
  "<td>"+productos[i].precio+"</td>"+
  "<td>"+productos[i].stock+"</td>"+
  "<td><button onclick='editar("+i+")'>Editar</button> <button onclick='eliminar("+i+")'>Eliminar</button></td></tr>";
}

function editar(i){
  localStorage.setItem("indiceEditar", i);
  window.location.href = "producto-editar.html";
}

function eliminar(i){
  if(confirm("¿Eliminar?")){
    productos.splice(i,1);
    localStorage.setItem("productos", JSON.stringify(productos));
    location.reload();
  }
}