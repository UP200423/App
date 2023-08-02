export const PagarSeleccionados = async (id_pedido, pedidos, tipo) => {
  const jsonPedidos = {
    id_pedido: id_pedido,
    tipo: tipo,
    productos: [],
  };

  pedidos.map((ped) => {
    // rows = true;
    jsonPedidos.productos.push({
      id_producto: ped.id_producto,
      cantidad: parseInt(ped.cantidad), // Convert to integer
      precio_unitario: parseFloat(ped.precio_unitario),
    });
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonPedidos),
  };
  try {
    const response = await fetch("http://localhost:3000/api/pagos",
      requestOptions
    );
    const resjson = await response.json();
    // console.log(resjson);
    return resjson;
  } catch (error) {
    alert("No fue posible hacer el registro del pedido");
  }
};




export const ClosePedido = async (id_pedido) => {
  

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  };
  try {
    const response = await fetch("http://localhost:3000/api/pedidos/close/" + id_pedido,
      requestOptions
    );
    const resjson = await response.json();
    // console.log(resjson);
    return resjson;
  } catch (error) {
    alert("No fue posible cerrar el pedido");
  }
};
