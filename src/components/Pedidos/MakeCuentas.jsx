import React from "react";
import { useContext, useState } from "react";
import { CuentasContext } from "../../views/Pedidos/PedidosDetalles";
import { downloadPDF } from "./ticket";
import { MdRemoveCircle } from 'react-icons/md'
import { PagarSeleccionados } from "./fetch";
export default function MakeCuentas() {
  let total = 0;

  const [metodo, setMetodo] = useState("Efectivo");


  // const [cuentas, setCuentas] = useState([]);
  // const [CuentaActiva, setCuentaActiva] = useState([]);
  const { nota, RemoveProduct, id, tiposDePagos, ClearNota } = useContext(CuentasContext)
  // console.log(tiposDePagos)
  if (nota) {
    return (
      <div className="text-center">
        <table style={{ width: "100%" }}>
          <thead className="table table-striped table-hover table-dark table-responsive-sm text-center sticky-top">
            <tr>
              <th><h2>Dividir la cuenta</h2></th>
              <th>
                <label htmlFor="tiposDePagos">Método de pago</label>
                <select className="form-select" name="tiposDePagos" id="tiposDePagos" value={metodo} onChange={(e) => setMetodo(e.target.value)}>
                  {/* <option value="" disabled hidden  ></option> */}
                  {tiposDePagos.map((tipo, index) => {
                    return (
                      <option key={index} value={tipo}>{tipo}</option>
                    )
                  })}

                </select>
              </th>
            </tr>
          </thead>
        </table>
        <table style={{ width: "100%" }} id="personalizada">
          <thead className="table table-striped table-hover table-dark table-responsive-sm text-center sticky-top">
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Cant</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {nota.map((no, index) => {
              total += no.precio_unitario * no.cantidad
              return (
                <tr key={index}>
                  <td>
                    <button onClick={() => RemoveProduct(no)}>
                      <MdRemoveCircle />
                    </button>
                  </td>
                  <td>{no.nombre}</td>
                  <td>{no.cantidad}</td>
                  <td>{no.precio_unitario}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot><tr><td colSpan={4}>Total: {total}</td></tr></tfoot>
        </table>
        <button className="btn btn-outline-primary" onClick={async () => {
          if (window.confirm("Usted pagará $" + total + " pesos\nAl aceptar, se registrarán pagados los productos en esta lista y se imprimirá una nota de pago")) {
            // console.log(CuentaActiva)
            const response = await PagarSeleccionados(id, nota, metodo)
            // console.log(response.serverStatus)
            if (response.serverStatus === 2) {
              // console.log(afectedRows.afectedRows)
              window.alert("Se registró con éxito el pago")
              await downloadPDF('personalizada', 5, id)
              ClearNota()
            } else alert("No fue posible registrar el pago, inetentelo en unos momentos")

          } else {
            window.alert("Cancelando...")
          }

        }} >Ticket</button>
      </div>
    );
  } else return <h1>No hay productos</h1>;
}
