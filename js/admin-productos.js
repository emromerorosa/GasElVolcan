var productosBase = [
    {id: 1, nombre: "Gas 5kg", precio: 12000, stock: 30},
    {id: 2, nombre: "Gas 15kg", precio: 25000, stock: 50},
    {id: 3, nombre: "Gas 45kg", precio: 65000, stock: 20}
];

var guardado = localStorage.getItem("productos");
var productos = productosBase;

if(guardado){
    var temp = JSON.parse(guardado);
    if(temp.length > 0){
        productos = temp;
    }
}

var tabla = document.getElementById("tabla-productos");
tabla.innerHTML = "";
for(var i=0; i<productos.length; i++){
    tabla.innerHTML += "<tr><td>"+productos[i].id+"</td><td>"+productos[i].nombre+"</td><td>"+productos[i].precio+"</td><td>"+productos[i].stock+"</td><td><button onclick='editar("+i+")'>Editar</button> <button onclick='eliminar("+i+")'>Eliminar</button></td></tr>";
}

function editar(i){ localStorage.setItem("indiceEditar", i); window.location.href = "producto-editar.html"; }
function eliminar(i){
    if(confirm("¿Eliminar?")){
        productos.splice(i,1);
        localStorage.setItem("productos", JSON.stringify(productos));
        location.reload();
    }
}