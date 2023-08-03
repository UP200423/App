import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddProducto.css";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function UpdateProductoModal(props) {

    const id = props.id;
    const [nombre, setNombre] = useState(props.nombre);

    console.log(id + nombre);

    const handleSubmit = () => {
        // e.preventDefault();

        const UpdatedProducto = {
            nombre: nombre
        };
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedProducto),
        };
        const ruta = "http://localhost:3001/api/tiposProductos/" + id
        // console.log(ruta);
        fetch(ruta, requestOptions)
            .then((res) => res.json())
            //.then((producto) => setInserted(producto));
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
                    Actualizar Tipo producto
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
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
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
export default UpdateProductoModal;