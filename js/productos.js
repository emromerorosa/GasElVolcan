var productos = [
    {id: 1, nombre: "Gas 5kg", precio: 12000, stock: 30},
    {id: 2, nombre: "Gas 15kg", precio: 25000, stock: 50},
    {id: 3, nombre: "Gas 45kg", precio: 65000, stock: 20}
];

var guardado = localStorage.getItem("productos");
if(guardado!= null){
    productos = JSON.parse(guardado);
}