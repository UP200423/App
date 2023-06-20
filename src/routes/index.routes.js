import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/Home/HomePage.jsx";
import  Carta  from "../views/Carta/Carta.jsx";
import PedidosPage from "../views/Pedidos/PedidosPage.jsx";
import InsumosPage from "../views/Insumos/InsumosPage.jsx";


function Autho() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/insumos" element={<InsumosPage/>}></Route>
        <Route path="/Carta" element={<Carta/>}></Route>
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