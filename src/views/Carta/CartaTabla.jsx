import React from 'react';
// import './Carta.css';
import Header from '../../components/header/header.jsx';
import Footer from "../../components/footer/footer.jsx";
import CartaTabla from '../../components/Productos/carta_tabla.jsx';
import OpcionesProductos from "../../components/Opciones_Productos/OpcionesProductos.jsx";

function CartaTablaView() {
    return (
        <React.Fragment>
            <Header />
            <OpcionesProductos />
            <CartaTabla />
            <Footer />
            </React.Fragment>

    );
}

export default CartaTablaView;



