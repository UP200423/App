import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Pedidos from "../../components/Pedidos/Pedidos.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
// import Button from "react-bootstrap/Button";
import OpcionesPedidos from "../../components/Opciones_Pedidos/OpcionesPedidos.jsx";
// import PedidosList from "../../components/Pedidos/PedidosList.jsx";

function PedidosNuevo() {
  return (
    <div className="pedidospage">
      <OpcionesPedidos/>
      <Pedidos/>
    </div>
  );
}

export default PedidosNuevo;
