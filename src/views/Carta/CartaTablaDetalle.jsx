import React from 'react';
// import './Carta.css';

import CartaTablaDetalle from '../../components/Productos/carta_tabla_detalle.jsx';
import OpcionesProductosDetalle from "../../components/Opciones_Detalle_Productos/OpcionesDetalleProductos.jsx";
import { useParams } from 'react-router-dom';

function CartaTablaDetalleView() {

    const { id_producto } = useParams();
    console.log(id_producto);

    return (
        <React.Fragment>

            <OpcionesProductosDetalle />
            <CartaTablaDetalle
                id_producto={id_producto}
            />

        </React.Fragment>

    );
}

export default CartaTablaDetalleView;



