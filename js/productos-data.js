const PRODUCTOS = [
  {codigo:"GAS5", nombre:"Gas 5kg", precioResidencial:12000, precio:12000, categoria:"Residencial", descripcion:"Balon de gas de 5kg ideal para camping.", imagen:"../img/gas5.jpg"},
  {codigo:"GAS15", nombre:"Gas 15kg", precioResidencial:25000, precio:25000, categoria:"Residencial", descripcion:"Balon de gas de 15kg uso domestico.", imagen:"../img/gas15.jpg"},
  {codigo:"GAS45", nombre:"Gas 45kg", precioResidencial:65000, precio:65000, categoria:"Industrial", descripcion:"Balon de gas de 45kg uso industrial.", imagen:"../img/gas45.jpg"},
  {codigo:"GAS11", nombre:"Gas 11kg", precioResidencial:20000, precio:20000, categoria:"Residencial", descripcion:"Balon de gas de 11kg.", imagen:"../img/gas11.jpg"}
];

function obtenerImagenHtml(producto, clase){
  if(!producto) return "";
  var src = producto.imagen || "../img/no-imagen.jpg";
  return '<img src="'+src+'" alt="'+producto.nombre+'" class="'+clase+'" style="max-width:150px;">';
}

// para que admin-productos pueda leer tambien
if(!localStorage.getItem("productos")){
  localStorage.setItem("productos", JSON.stringify(PRODUCTOS));
}