var productosBase = [
    {id: 1, nombre: "Gas 5kg", precio: 12000, stock: 30},
    {id: 2, nombre: "Gas 15kg", precio: 25000, stock: 50},
    {id: 3, nombre: "Gas 45kg", precio: 65000, stock: 20}
];

var productos = productosBase;

try {
    var guardado = localStorage.getItem("productos");
    if(guardado){
        var temp = JSON.parse(guardado);
        if(temp && temp.length > 0){
            // Si el guardado viene sin ID, le ponemos ID automaticamente
            for(var j=0; j<temp.length; j++){
                if(!temp[j].id){
                    temp[j].id = j+1;
                }
            }
            productos = temp;
        }
    }
} catch(e){
    productos = productosBase;
}

var tabla = document.getElementById("tabla-productos");
tabla.innerHTML = "";

for(var i=0; i<productos.length; i++){
    var id = productos[i].id? productos[i].id : (i+1);
    var nombre = productos[i].nombre? productos[i].nombre : "";
    var precio = productos[i].precio? productos[i].precio : 0;
    var stock = productos[i].stock? productos[i].stock : 0;

    tabla.innerHTML += "<tr><td>"+id+"</td><td>"+nombre+"</td><td>"+precio+"</td><td>"+stock+"</td><td><button onclick='editar("+i+")'>Editar</button> <button onclick='eliminar("+i+")'>Eliminar</button></td></tr>";
}

function editar(i){
    localStorage.setItem("indiceEditar", i);
    window.location.href = "producto-editar.html";
}

function eliminar(i){
    if(confirm("¿Eliminar este producto?")){
        productos.splice(i,1);
        localStorage.setItem("productos", JSON.stringify(productos));
        location.reload();
    }
}