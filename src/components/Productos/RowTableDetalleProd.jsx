import React from "react";
import { DeleteProductoDetalle } from "./funciones";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import UpdateProductoDetalle from "./UpdateProductoDetalle";

const RowTableProductos = (props) => {
    const {id_producto, id_detalle, nombre_producto, tipo_producto, id_insumo, nombre_insumo, tipo_insumo, cantidad, abreviacion} = props;
    return (
        <tr key={id_detalle}>
            <td>{id_producto}</td>
            <td>{id_detalle}</td>
            <td>{nombre_producto}</td>
            <td>{tipo_producto}</td>
            <td>{id_insumo}</td>
            <td>{nombre_insumo}</td>
            <td>{tipo_insumo}</td>
            <td>{cantidad + " " + abreviacion}</td>
            <td>
                <Form onSubmit={() => DeleteProductoDetalle(id_detalle, id_producto)}>
                    <Form.Group>
                        <Button variant="danger"
                            type="submit"
                        >Eliminar</Button>

                    </Form.Group>
                </Form>
            </td>
            <td>
                <UpdateProductoDetalle
                    nombre_insumo={nombre_insumo}
                    id_producto={id_producto}
                    cantidad={cantidad}
                    id_detalle={id_detalle}
                />
            </td>
        </tr>
        
    )
}

export default RowTableProductos