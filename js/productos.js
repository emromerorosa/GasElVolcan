var productos = [
    {id: 1, codigo:"GAS5", nombre: "Gas 5kg", precio: 12000, precioResidencial: 12000, stock: 30, categoria:"Residencial", descripcion:"Balon 5kg", imagen:"../img/gas5.jpg"},
    {id: 2, codigo:"GAS15", nombre: "Gas 15kg", precio: 25000, precioResidencial: 25000, stock: 50, categoria:"Residencial", descripcion:"Balon 15kg", imagen:"../img/gas15.jpg"},
    {id: 3, codigo:"GAS45", nombre: "Gas 45kg", precio: 65000, precioResidencial: 65000, stock: 20, categoria:"Industrial", descripcion:"Balon 45kg", imagen:"../img/gas45.jpg"}
];

var guardado = localStorage.getItem("productos");
if(guardado != null){
    try{
        var parseado = JSON.parse(guardado);
        if(Array.isArray(parseado) && parseado.length > 0){
            productos = parseado;
        }
    }catch(e){
        console.log("Error leyendo localStorage productos", e);
    }
}

// Sincroniza con PRODUCTOS global si existe
if(typeof PRODUCTOS === "undefined"){
    var PRODUCTOS = productos;
}