import { useContext, useState } from "react";
import { CuentasContext } from "../../views/Pedidos/PedidosDetalles";
import { BsFillFilePlusFill } from 'react-icons/bs';
import { downloadPDF } from "./ticket";
import { PagarSeleccionados } from "./fetch";

const AlreadyAgregadosByProduct = () => {

  const { CuentaActiva, AddProduct, id, tiposDePagos, ClearCuentaActiva } = useContext(CuentasContext)
  const [metodo, setMetodo] = useState("Efectivo");
  // console.log(pedidos)
  if (CuentaActiva.length > 0) {
    let total = 0;
    return (
      <div className=""
        style={{
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <table style={{ width: "100%" }}>
          <thead className="table table-striped table-hover table-dark table-responsive-sm text-center sticky-top">
            <tr>
              <th><h2>Cuenta por productos</h2></th>
              <th>
                <label htmlFor="tiposDePagos">Método de pago</label>
                <select className="form-select" name="tiposDePagos" id="tiposDePagos" value={metodo} onChange={(e) => setMetodo(e.target.value)}>
                  {/* <option value="" disabled hidden  >Método de pago</option> */}
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
        <table className="table table-striped table-hover table-dark table-responsive-sm text-center" id="by_product">
          <thead className="sticky-top" >
           
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Cant</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {CuentaActiva.map((item) => {
              total = total + item.cantidad * item.precio_unitario;
              return (
                <tr key={item.id_producto}>
                  <th>
                    <button type="button" onClick={(e) => {
                      AddProduct(item);
                    }}>
                      <BsFillFilePlusFill />
                    </button>

                  </th>
                  <td> {item.nombre} </td>
                  <td> {item.cantidad} </td>
                  <td> {item.precio_unitario} </td>
                  <td> {item.precio_unitario * item.cantidad} </td>
                </tr>
              );
            })}
            <tr className="table-success sticky-bottom">
              <td colSpan={4} className="text-center">Total</td>

              <td>{total}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-dark" onClick={async () => {
          if (window.confirm("Usted pagará $" + total + " pesos\nAl aceptar, se registrarán pagados los productos en esta lista y se imprimirá una nota de pago")) {
            // console.log(CuentaActiva)
            const response = await PagarSeleccionados(id, CuentaActiva, metodo)
            // console.log(response.serverStatus)
            if (response.serverStatus === 2) {
              // console.log(afectedRows.afectedRows)
              window.alert("Se registró con éxito el pago")
              await downloadPDF('by_product', 5, id)
              ClearCuentaActiva()
            } else alert("No fue posible registrar el pago, inetentelo en unos momentos")

          } else {
            alert("Cancelando...")
          }

        }} >Ticket</button>
      </div>
    );
  } else {
    return <h4>No restan productos en este pedido</h4>;
  }
};

export default AlreadyAgregadosByProduct;
