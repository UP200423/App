import React from "react";
import { DeleteInsumo } from "./funciones";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import UpdateInsumo from "./UpdateInsumo";

const RowTableDetalleInsumos = (props) => {
    const { id_insumo, nombre, tipo_insumo, tipo_insumo_id, unidad_de_medida, unidad_id, descripcion, cantidad } = props;
    return (
        <tr key={id_insumo}>
            <td>{id_insumo}</td>
            <td>{nombre}</td>
            <td>{tipo_insumo}</td>
            <td>{unidad_de_medida}</td>
            <td>{descripcion}</td>
            <td>{cantidad}</td>

            <td>
                <Button variant="danger" onClick={() => DeleteInsumo(id_insumo, nombre)}
                    type="submit">Eliminar</Button>
            </td>
            <td>
                <UpdateInsumo
                    nombre={nombre}
                    id={id_insumo}
                    tipo={tipo_insumo}
                    id_tipo={tipo_insumo_id}
                    unidad={unidad_de_medida}
                    unidad_id={unidad_id}
                    descripcion={descripcion}
                    cantidad={cantidad}
                />
            </td>
        </tr>

    )
}

export default RowTableDetalleInsumos;