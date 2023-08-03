import React from "react";
// import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddProducto.css";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import SubirImagen from './SubirImagen';

function AddProductoModal(props) {
    const { tipoproducto } = props;
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState(null);
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [prioridad, setPrioriad] = useState(1);
    const [nuevo_tipo_id, setNuevoTipoId] = useState({});
    const [nuevo_tipo, setNuevoTipo] = useState("");

    useEffect(() => {
        if (tipoproducto && tipoproducto.length > 0) {
            var tamano = tipoproducto.length;
            var last_reg = tipoproducto[tamano - 1];
            setNuevoTipoId(last_reg["id_tipo_prod"] + 1);
        }
    }, [tipoproducto]);


    console.log("id nuevo" + nuevo_tipo_id);
    //console.log(tamanio);

    //const XD = nuevoTipo["id_tipo_prod"];

    console.log("el nuevo tipo_id es: " + nuevo_tipo_id);
    console.log("el nuevo tipo es: " + nuevo_tipo);
    //console.log(XD);
    //console.log("hola");
    //console.log(tipoproducto[0]);

    //console.log("el tamaño es:" + tipoproducto.length);
    //const tamanoTipoProducto = tipoproducto.length;
    //console.log("tamaño tipo producto:" + tamanoTipoProducto);

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
            prioridad: prioridad,
            nombre_tipo: nuevo_tipo
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProducto),
        };

        fetch("http://localhost:3001/api/productos", requestOptions)
            .then((res) => res.json())
            .then((producto) => setInserted(producto));
        //console.log(insertedProducto);
        // .then((data) => console.log(data))

        ////console.log(newProducto);
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
                                setMostrarOtro(e.target.value == nuevo_tipo_id);
                                //setMostrarOtro(true);
                                console.log("ntid " + nuevo_tipo_id);
                                console.log("mo " + mostrarOtro);
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
                            <option value={nuevo_tipo_id} name="otro">
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
