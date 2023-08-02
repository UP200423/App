import React from "react";
import { useContext } from "react";
import { CuentasContext } from "../../views/Pedidos/PedidosDetalles";
const AlreadyAgregados = () => {
  const {alredyInserted } = useContext(CuentasContext)  // console.log(pedidos)

  if (alredyInserted.length > 0) {
    let fecha;
    let design = ["table-primary", "table-success"];
    let usedesign = 0;
    let total = 0;
    return (
      
        <table className="table table-striped table-hover table-dark table-responsive-sm text-center">
          <thead className="sticky-top">
            <tr className="table-secondary">
              <th colSpan={5} className="text-center">
                Cuenta por rondas
              </th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
              <th>Fecha y hora</th>
            </tr>
          </thead>
          <tbody>
            {alredyInserted.map((item) => {
              if (!(item.fecha === fecha)) {
                fecha = item.fecha;
                usedesign === 0 ? (usedesign = 1) : (usedesign = 0);
              }
              total = total + item.cantidad * item.precio_unitario;
              return (
                <tr key={item.id_detalle} className={design[usedesign]}>
                  <td> {item.nombre} </td>
                  <td> {item.cantidad} </td>
                  <td> {item.precio_unitario} </td>
                  <td> {item.precio_unitario * item.cantidad} </td>
                  <td> {item.fecha} </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3} className="text-center">Total</td><td>{total}</td><td></td>
            </tr>
          </tbody>
        </table>
     
    );
  } else {
    return <h4>No hay productos en este pedido</h4>;
  }
};

export default AlreadyAgregados;
