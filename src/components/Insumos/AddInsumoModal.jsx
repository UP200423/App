import React from "react";
import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddInsumo.css";
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';

import { useState, useContext, useEffect } from "react";
// import { SourseContext } from "../../views/Insumos/InsumosTabla";
import { GetTiposDeInsumos, GetUnidades } from "./funciones.js";

function AddInsumoModal() {
    const [sourse, setSourse] = useState({ hola: "" })
    const [modalShow, setModalShow] = useState(false);
    const [unidades, setUnidades] = useState([])
    const [tiposInsumodata, setTipoData] = useState([])
    useEffect(() => {

        fetch("http://localhost:3001/api/unidades_de_medida")
            .then((res) => res.json())
            .then((data) => setUnidades(data))
            .catch((error) => {
                console.error("Error fetching tipos de insumos:", error);

            });
        fetch("http://localhost:3001/api/tiposInsumo")
            .then((res) => res.json())
            .then((data) => setTipoData(data))
            .catch((error) => {
                console.error("Error fetching tipos de insumos:", error);

            });


    }, []);
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState(null);
    const [unidad, setUnidad] = useState(null);
    const [cantidad, setCantidad] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [nuevo_tipo_id, setNuevoTipoId] = useState({});
    const [nuevo_tipo, setNuevoTipo] = useState("");
    const [mostrarOtro, setMostrarOtro] = useState(false);

    //console.log(tiposInsumodata);
    //console.log(nuevo_tipo_id)

    useEffect(() => {
        if (tiposInsumodata && tiposInsumodata.length > 0) {
            var tamano = tiposInsumodata.length;
            var last_reg = tiposInsumodata[tamano - 1];
            setNuevoTipoId(last_reg["id_tipo"] + 1);
        }
    }, [tiposInsumodata]);

    const [insertedInsumo, setInserted] = useState([]);

    // console.log("Tipo de insumos:" + tipoInsumo)

    const handleSubmit = () => {
        // e.preventDefault();

        const newInsumo = {
            nombre: nombre,
            tipo_insumo_id: tipo,
            unidad_de_medida_id: unidad,
            descripcion: descripcion,
            cantidad: cantidad,
            nombre_tipo: nuevo_tipo
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newInsumo),
        };

        fetch("http://localhost:3001/api/insumos", requestOptions)
            .then((res) => res.json())
            .then((insumo) => setInserted(insumo));
        console.log(insertedInsumo);
        // .then((data) => console.log(data))

        console.log(newInsumo);
    };

    const handleClose = () => setModalShow(false);

    return (
        <>
            <Nav.Link variant="primary" onClick={() => setModalShow(true)}>
                Agregar insumo
            </Nav.Link>
            <Modal
                // size="md"
                // backdrop="static"
                // centered
                // className="AddModal"
                // show={modalShow}
                // onHide={handleClose}
                size="md"
                backdrop={true} // Change "static" to "true"
                centered
                className="AddModal"
                show={modalShow}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Agregar nuevo insumo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="AddInsumoId">
                            <Form.Label>Insumo:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                maxLength={49}
                                placeholder="Insumo"
                                autoFocus
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tipo de insumo:</Form.Label>
                            <Form.Select
                                required
                                defaultValue={-1}
                                aria-label="tipo_de_insumo"
                                onChange={(e) => {
                                    setTipo(e.target.value);
                                    setMostrarOtro(e.target.value == nuevo_tipo_id);
                                }}
                            >
                                <option value={-1} disabled>
                                    Selecciona un tipo de insumo
                                </option>
                                {tiposInsumodata.length > 0 ? (
                                    tiposInsumodata.map((tipo) => (
                                        <option key={tipo.id_tipo} value={tipo.id_tipo}>
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
                                <Form.Label>Escribe el tipo de insumo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa el tipo de insumo"
                                    onChange={(e) => setNuevoTipo(e.target.value)}
                                />
                            </Form.Group>
                        )}
                        </Form.Group>
                        <Form.Group

                        >
                            <Form.Label>Unidad de medida:</Form.Label>
                            <Form.Select
                                required
                                defaultValue={-1}
                                aria-label="unidad_de_medida"
                                onChange={(e) => setUnidad(e.target.value)}
                            >
                                <option value={-1} disabled>
                                    Selecciona una unidad de medida
                                </option>
                                {unidades.map((unidad) => (
                                    <option key={unidad.id_unidad} value={unidad.id_unidad}>
                                        {unidad.nombre} - {unidad.abreviacion}
                                    </option>
                                ))}

                            </Form.Select>
                            <input type="text" id="input_nuevo_unidad" hidden />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Cantidad">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                required
                                min={0}
                                type="number"
                                pattern="[0-9]"
                                onChange={(e) => setCantidad(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="descripcion">
                            <Form.Label>Descipción</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                maxLength={99}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="danger" onClick={() => setModalShow(false)}>
                            Cancelar
                        </Button>
                        <Button type="submit" >Agregar</Button>


                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}
export default AddInsumoModal;
