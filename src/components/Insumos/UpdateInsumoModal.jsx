import React from "react";
import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddInsumo.css";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function UpdateInsumoModal(props) {


    const { unidadesmedida, tipoinsumo } = props;
    const id = props.id;
    const tipo = props.tipo;
    const [nombre, setNombre] = useState(props.nombre);
    const [id_tipo, setTipo] = useState(props.id_tipo);
    const [unidad, setUnidad] = useState(props.unidad);
    const [unidad_id, setUnidadId] = useState(props.unidad_id);
    const [cantidad, setCantidad] = useState(props.cantidad);
    const [descripcion, setDescripcion] = useState(props.descripcion);
    const [insertedInsumo, setInserted] = useState({});
    const [nuevo_tipo_id, setNuevoTipoId] = useState({});
    const [nuevo_tipo, setNuevoTipo] = useState("");
    const [mostrarOtro, setMostrarOtro] = useState(false);

    //console.log("el id tipo es:" + id_tipo)
    //console.log("nuevo tipo id" + nuevo_tipo_id);
    //console.log("nuevo tipo" + nuevo_tipo);

    useEffect(() => {
        if (tipoinsumo && tipoinsumo.length > 0) {
            var tamano = tipoinsumo.length;
            var last_reg = tipoinsumo[tamano - 1];
            setNuevoTipoId(last_reg["id_tipo"] + 1);
        }
    }, [tipoinsumo]);

    
    /*console.log("id " + id);
    console.log("nombre " + nombre);
    console.log("id tipo " + id_tipo);
    console.log("unidad " + unidad_id);
    console.log("descripcion " + descripcion);
    console.log("cantidad " + cantidad);
    console.log("nombre_tipo " + nuevo_tipo);
    console.log(" ");*/

    const handleSubmit = () => {
        // e.preventDefault();

        const UpdatedInsumo = {
            nombre: nombre,
            tipo_insumo_id: id_tipo,
            unidad_de_medida_id: unidad_id,
            descripcion: descripcion,
            cantidad: cantidad,
            nombre_tipo: nuevo_tipo
        };
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedInsumo),
        };
        const ruta = "http://localhost:3001/api/insumos/" + id
        // console.log(ruta);
        fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((insumo) => setInserted(insumo));
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
                    Actualizar insumo
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
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo de insumo:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="tipo_de_insumo"
                            //value={tipo}
                            onChange={(e) => {
                                setTipo(e.target.value)
                                setMostrarOtro(e.target.value == nuevo_tipo_id) }
                            }

                        >
                            <option value={-1} disabled>
                                {tipo}
                            </option>
                            {tipoinsumo.length > 0 ? (
                                tipoinsumo.map((tipo) => (
                                    <option key={tipo.id_tipo} value={tipo.id_tipo}>
                                        {tipo.nombre}
                                    </option>
                                ))
                            ) : (
                                <option disabled>No hay tipos de producto disponibles</option>
                            )
                            }
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
                        <Form.Label>Unidad de medida:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="unidad_de_medida"
                            value={unidad_id}
                            onChange={(e) => setUnidadId(e.target.value)}
                        >
                            <option value={-1} disabled>
                                Selecciona una unidad de medida
                            </option>
                            {unidadesmedida.map((unidad) => (
                                <option key={unidad.id_unidad} value={unidad.id_unidad}>
                                    {unidad.nombre} - {unidad.abreviacion}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cantidad">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                            required
                            min={0}
                            type="number"
                            value={cantidad}
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
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
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
export default UpdateInsumoModal;