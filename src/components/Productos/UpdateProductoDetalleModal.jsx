import React from "react";
// import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddProducto.css";
import Form from "react-bootstrap/Form";
import { useState} from "react";

function UpdateProductoDetalleModal(props) {


    const id_detalle = props.id_detalle
    const id_producto = props.id_producto
    const [nombre_insumo, setNombre] = useState(props.nombre_insumo);
    const [cantidad, setPrecio] = useState(props.cantidad);
    const [insertedInsumo, setInserted] = useState({})  ;

    const handleSubmit = () => {
        // e.preventDefault();

        const UpdatedProducto = {
            cantidad : cantidad
        };
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedProducto),
        };
        const ruta= `http://localhost:3001/api/producto_detalle/${id_detalle}/${id_producto}`
        // console.log(ruta);
        fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((producto) => setInserted(producto));
        // console.log(insertedInsumo);
        // .then((data) => console.log(data))

        // console.log(newInsumo);
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
                    Actualizar producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Producto:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="Producto"
                            autoFocus
                            readOnly
                            value={nombre_insumo}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cantidad">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                            required
                            min={0}
                            type="number"
                            value={cantidad}
                            pattern="[0-9]"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </Form.Group>
                    
                        <Button variant="danger" onClick={props.onHide}>
                            Cancelar
                        </Button>
                        <Button type="submit" >Actualizar</Button>

                    
                </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
export default UpdateProductoDetalleModal;