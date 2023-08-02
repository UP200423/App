import React from "react";
// import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddProducto.css";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function AddProductoModal(props) {
    const { tipoproducto } = props;
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState(null);
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [prioridad, setPrioriad] = useState(1);
    const [nuevoTipo, setNuevoTipo] = useState('');

    const tamanoTipoProducto = tipoproducto.length;


    //console.log("tamaño tipo producto:" + tamanoTipoProducto);
    //console.log(tipoproducto[tamanoTipoProducto].id_tipo_prod);
    //console.log("el tamaño es " + tipoproducto.length);

    //console.log(tipoProductoMaxId.max_id)

    const [insertedProducto, setInserted] = useState({});

    const [mostrarOtro, setMostrarOtro] = useState(false);

    const handleSubmit = () => {

        const newProducto = {
            nombre: nombre,
            id_tipo_prod: tipo,
            descripcion: descripcion,
            precio: precio,
            prioridad: prioridad
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProducto),
        };

        fetch("http://localhost:3001/api/productos", requestOptions)
            .then((res) => res.json())
            .then((producto) => setInserted(producto));
        console.log(insertedProducto);
        // .then((data) => console.log(data))

        //console.log(newProducto);
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
                            type="text"
                            maxLength={49}
                            placeholder="producto"
                            autoFocus
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>

                        <Form.Label>Tipo de producto:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="tipo_de_producto"
                            onChange={(e) => {
                                setTipo(e.target.value);
                                setMostrarOtro(e.target.value === "otro");
                            }}
                        >
                            <option value={-1} disabled>
                                Selecciona un tipo de producto
                            </option>
                            {tipoproducto.length > 0 ? (
                                tipoproducto.map((tipo) => (
                                    <option key={tipo.id_tipo_prod} value={tipo.id_tipo_prod}>
                                        {tipo.nombre}
                                    </option>
                                ))
                            ) : (
                                <option disabled>No hay tipos de producto disponibles</option>
                            )}
                            <option value="otro">
                                Otro:
                            </option>
                        </Form.Select>
                        {mostrarOtro && (
                            <Form.Group>
                                <Form.Label>Escribe el tipo de producto:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa el tipo de producto"
                                    onChange={(e) => setNuevoTipo(e.target.value)}
                                />
                            </Form.Group>
                        )}
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={254}
                            placeholder="descripcion"
                            autoFocus
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Precio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            required
                            min={0}
                            type="number"
                            pattern="[0-9]"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Prioridad:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="prioridad_de_producto"
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

                    <Form.Group></Form.Group>
                    <br></br>
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
export default AddProductoModal;
