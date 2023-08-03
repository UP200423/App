import React from "react";
import "./PedidosList.css";
import { useState, useEffect } from "react";
import { PedidosActivos } from "./PedidoActivo";

function PedidosList() {
  const [pedidos, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/pedidos")
      .then((res) => res.json())
      .then((pedidos) => setData(pedidos))
      .catch((error) => {
        alert("No fue posible consultar la base de datos, revisa tu conexión a internet, si persisten los problemas contacta a tu técnico")
        console.log(error)
      })
    // .then((data) => console.log(data))
  }, []);

  if (pedidos.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1 className="text-white">No hay pedidos activos</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{ textAlign: "left", fontSize: "150%", marginLeft: "5%"}}>
          <a className="text-lg-left" href="/" style={{ marginBottom: '20px' }}>Inicio</a> /
          <a className="text-lg-left" href="/pedidos/" style={{ marginBottom: '20px' }}>Pedidos</a>
        </div>
        <div className="container vh-100 d-flex flex-column align-items-center justify-content-center"  >

          {
            pedidos.map((pedido) => (
              <div key={pedido.id_pedido} className="cont" >
                <PedidosActivos

                  id_pedido={pedido.id_pedido} fecha={pedido.fecha} total={pedido.total} activo={pedido.activo} mesa={pedido.mesa} pagado={pedido.pagado}

                />
              </div>
            ))
          }
        </div>
      </div>

    );
  }
}
export default PedidosList;
