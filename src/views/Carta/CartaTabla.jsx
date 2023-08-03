import React from 'react';
// import './Carta.css';

import CartaTabla from '../../components/Productos/carta_tabla.jsx';
import OpcionesProductos from "../../components/Opciones_Productos/OpcionesProductos.jsx";

function CartaTablaView() {
    return (
        <React.Fragment>
            
            <OpcionesProductos />
            <CartaTabla />
            
            </React.Fragment>

    );
}

export default CartaTablaView;



