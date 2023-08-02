import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProdcutosAgregados = ({
  pedidos,
  eliminarPedido,
  restarProducto,
  createPedido,
}) => {
  return (
    <table className="table table-striped table-hover table-success table-responsive-sm">
      <thead>
        <tr><th colSpan={5} className="table-primary">Agregar</th></tr>
      </thead>
      <thead>
        <tr>
          <th>Producto</th>
          <th></th>
          <th>Cantidad</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>
              <Button
                variant="danger"
                onClick={(e) => {
                  e.preventDefault();
                  restarProducto(item);
                }}
              >
                -
              </Button>
            </td>
            <td>{item.cantidad}</td>
            <td>
              <Button
                variant="success"
                onClick={(e) => {
                  e.preventDefault();
                  createPedido({
                    id_producto: item.id_producto,
                    nombre: item.nombre,
                    descipcion: item.descipcion,
                    precio: item.precio,
                    cantidad: 1,
                  });
                }}
              >
                +
              </Button>
            </td>
            <td>
              <span
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => eliminarPedido(item.id_producto)}
              >
                &#215;
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProdcutosAgregados;
