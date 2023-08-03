import React from "react";
import Pedidos from "../../components/Pedidos/Pedidos.jsx";
import OpcionesPedidos from "../../components/Opciones_Pedidos/OpcionesPedidos.jsx";
import "./PedidosPage.css";

function PedidosNuevo() {
  return (
    <>
    <div className="pedidos-page">
    
      <OpcionesPedidos/>
      <Pedidos/>
    </div>

    
    </>
  );
}

export default PedidosNuevo;





// <>
// <Header>

//   </Header>
//   {/* {children} */}
  
// <Footer>
//   </Footer>
// </>