import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../views/Home/HomePage.jsx";
import PedidosPage from "../views/Pedidos/PedidosPage.jsx";
import PedidosNuevo from "../views/Pedidos/PedidosNuevos.jsx";
import PedidosDetalles from "../views/Pedidos/PedidosDetalles.jsx";
import EstadisticasPage from "../views/EstadisticasPage/EstadisticasPage.jsx";import PersonalizarCuenta from "../views/Pedidos/PersonalisarCuenta.jsx";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import InsumosGlobal from "../views/Insumos/InsumosGlobal.jsx";
import CartaGlobal from "../views/Carta/CartaGlobal.jsx";
function Autho() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/insumos/:variante" element={<InsumosGlobal/>}></Route>
        {/* <Route path="/Carta" element={<Carta/>}></Route> */}
        {/* <Route path="/CartaTabla" element={<CartaTabla/>}></Route> */}
        <Route path="/carta/:variante/:id" element={<CartaGlobal/>}></Route>
        {/* <Route path="/TablaTipoProducto" element={<TablaTipoProducto/>}></Route> */}
        {/* <Route path="/CartaTablaDetalle/:id_producto" element={<CartaTablaDetalle/>}></Route> */}
        <Route path="/Pedidos" element={<PedidosPage/>}></Route>
        <Route path="/Pedidos/nuevo" element={<PedidosNuevo/>}></Route>
        <Route path="/Pedidos/detalles/:id" element={<PedidosDetalles/>}></Route>
        <Route path="/Pedidos/cuenta/:id" element={<PersonalizarCuenta/>}></Route>
        <Route path="/Estadisticas" element={<EstadisticasPage/>}></Route>
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