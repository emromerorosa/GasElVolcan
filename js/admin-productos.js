const productos = [
  { codigo: "CG-001", nombre: "Cilindro 15 Kg", precio: 15990, stock: 42 },
  { codigo: "CG-002", nombre: "Cilindro 11 Kg", precio: 12990, stock: 25 },
  { codigo: "CG-003", nombre: "Cilindro 5 Kg", precio: 7990, stock: 15 }
];

const tablaProd = document.getElementById("tablaProductosBody");

if (tablaProd) {
  productos.forEach(p => {
    tablaProd.innerHTML += `
      <tr>
        <td>${p.codigo}</td>
        <td>${p.nombre}</td>
        <td>$${p.precio}</td>
        <td>${p.stock}</td>
        <td><a href="producto-editar.html">Editar</a></td>
      </tr>
    `;
  });
}