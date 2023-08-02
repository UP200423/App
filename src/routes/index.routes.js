import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import HomePage from "../views/Home/HomePage.jsx";
import  Carta  from "../views/Carta/Carta.jsx";
import  CartaTabla  from "../views/Carta/CartaTabla.jsx";
import  CartaTablaDetalle  from "../views/Carta/CartaTablaDetalle.jsx";
import PedidosPage from "../views/Pedidos/PedidosPage.jsx";
import InsumosPage from "../views/Insumos/InsumosPage.jsx";
import PedidosNuevo from "../views/Pedidos/PedidosNuevos.jsx";
import PedidosDetalles from "../views/Pedidos/PedidosDetalles.jsx";
import PersonalizarCuenta from "../views/Pedidos/PersonalisarCuenta.jsx";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
function Autho() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/insumos" element={<InsumosPage/>}></Route>
        <Route path="/Carta" element={<Carta/>}></Route>
        <Route path="/CartaTabla" element={<CartaTabla/>}></Route>
        <Route path="/CartaTablaDetalle/:id_producto" element={<CartaTablaDetalle/>}></Route>
        <Route path="/Pedidos" element={<PedidosPage/>}></Route>
        <Route path="/Pedidos/nuevo" element={<PedidosNuevo/>}></Route>
        <Route path="/Pedidos/detalles/:id" element={<PedidosDetalles/>}></Route>
        <Route path="/Pedidos/cuenta/:id" element={<PersonalizarCuenta/>}></Route>
        <Route
          path="/*"
          element={
            <div> Pagina no encontrada</div>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Autho;