import React from "react";
// import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddProducto.css";
import Form from "react-bootstrap/Form";
import { useState} from "react";

function AddProductoDetalleModal(props) {
    const {insumo } = props;
    const {id_producto } = props;
    const [id_prod, setIdProducto] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [insumos, setInsumo] = useState(null);

    const [insertedProducto, setInserted] = useState({});

    const handleSubmit = () => {
        // e.preventDefault();

        const newProductoDetalle = {
            id_producto: id_producto,
            id_insumo: insumos,
            cantidad: cantidad,
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProductoDetalle),
        };

        fetch("http://localhost:3001/api/producto_detalle", requestOptions)
            .then((res) => res.json())
            .then((producto) => setInserted(producto));
        console.log(insertedProducto);
        // .then((data) => console.log(data))

        console.log(newProductoDetalle);
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="AddModal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar nuevo producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="AddProductoId">
                        <Form.Label>Producto:</Form.Label>
                        <Form.Control
                            required
                            min={0}
                            type="number"
                            pattern="[0-9]"
                            placeholder="producto"
                            value={id_producto}
                            readonly
                            autoFocus
                            onChange={(e) => setIdProducto(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Insumo:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="tipo_de_producto"
                            onChange={(e) => setInsumo(e.target.value)}
                        >
                            <option value={-1} disabled>
                                Selecciona un tipo de producto
                            </option>
                            {insumo.map((insumos) => (
                                <option key={insumos.id_insumo} value={insumos.id_insumo}>
                                    {insumos.nombre}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Precio">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                            required
                            min={0}
                            type="number"
                            pattern="[0-9]"
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </Form.Group>
                    
                        <Button variant="danger" onClick={props.onHide}>
                            Cancelar
                        </Button>
                        <Button type="submit" >Agregar</Button>

                    
                </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
export default AddProductoDetalleModal;
