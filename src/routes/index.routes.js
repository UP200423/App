import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/Home/HomePage.jsx";
import  Carta  from "../views/Carta/Carta.jsx";
import  CartaTabla  from "../views/Carta/CartaTabla.jsx";
import  CartaTablaDetalle  from "../views/Carta/CartaTablaDetalle.jsx";
import PedidosPage from "../views/Pedidos/PedidosPage.jsx";
import InsumosPage from "../views/Insumos/InsumosPage.jsx";
import PedidosNuevo from "../views/Pedidos/PedidosNuevos.jsx";


function Autho() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/insumos" element={<InsumosPage/>}></Route>
        <Route path="/Carta" element={<Carta/>}></Route>
        <Route path="/CartaTabla" element={<CartaTabla/>}></Route>
        <Route path="/CartaTablaDetalle/:id_producto" element={<CartaTablaDetalle/>}></Route>
        <Route path="/Pedidos" element={<PedidosPage/>}></Route>
        <Route path="/Pedidos/nuevo" element={<PedidosNuevo/>}></Route>
        <Route
          path="/*"
          element={
            <div> Pagina no encontrada</div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Autho;