import React from "react";
// import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddProducto.css";
import Form from "react-bootstrap/Form";
import { useState} from "react";

function UpdateProductoModal(props) {


    const { tipoproducto } = props;
    const id=props.id;
    const tipo = props.tipo;
    const [nombre, setNombre] = useState(props.nombre);
    const [id_tipo, setTipo] = useState(props.id_tipo);
    const [precio, setPrecio] = useState(props.precio);
    const [descripcion, setDescripcion] = useState(props.descripcion);
    const [prioridad, setPrioriad] = useState(props.prioridad);
    const [insertedInsumo, setInserted] = useState({})  ;

    console.log("el tipo es" + id_tipo);

    const handleSubmit = () => {
        // e.preventDefault();

        const UpdatedProducto = {
            nombre: nombre,
            id_tipo_prod : id_tipo,
            descripcion: descripcion,
            precio: precio,
            prioridad: prioridad,
        };
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedProducto),
        };
        const ruta= "http://localhost:3001/api/productos/" + id
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
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo de producto:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="tipo_de_producto"
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option value={-1} disabled>
                                {tipo}
                            </option>
                            {tipoproducto.map((tipo) => (
                                <option key={tipo.id_tipo_prod} value={tipo.id_tipo_prod}>
                                    {tipo.nombre}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Descipción</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            maxLength={254}
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cantidad">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            required
                            min={0}
                            type="number"
                            value={precio}
                            pattern="[0-9]"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Prioridad:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="tipo_de_producto"
                            onChange={(e) => setPrioriad(e.target.value)}
                        >
                            <option value={-1} disabled>
                                Selecciona una prioridad
                            </option>
                            {(() => {
                                const opciones = [];
                                for (var i = 1; i <= 3; i++) {
                                    opciones.push(
                                        <option key={i} value={i}>
                                            {i}
                                        </option>
                                    );
                                }
                                return opciones;
                            })()}

                        </Form.Select>
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