import React from "react";
import { DeleteTipoProducto } from "./funciones";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import UpdateTipoProducto from "./UpdateTipoProducto";

const RowTableProductos = (props) => {
    const { id_tipo_prod, nombre } = props;
    return (
        <tr key={id_tipo_prod}>
            <td>{id_tipo_prod}</td>
            <td>{nombre}</td>
            <td>
                <UpdateTipoProducto
                    nombre={nombre}
                    id={id_tipo_prod}
                />
            </td>
        </tr>
    )
}

export default RowTableProductos;