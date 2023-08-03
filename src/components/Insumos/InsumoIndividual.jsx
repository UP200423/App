import React from "react";
// import 'bootstrap'
import Button from 'react-bootstrap/Button';
import { DeleteInsumo} from "./funciones";
import { Form } from "react-bootstrap";
import UpdateInsumo from "./UpdateInsumo";

function InsumosIndividual(props) {
  const { id, nombre, tipo, unidad, descripcion, cantidad, nombre_tipo, nombre_unidad, abreviacion } = props;

  return (

    <div>


      <div key={id}>
        <h2>Nombre del insumo: {nombre} </h2>
        <h3>Id del insumo: {id} </h3>
        <h3>Tipo de insumo: {nombre_tipo} </h3>
        <h3>Unidad de medida: {nombre_unidad} </h3>
        <h3>Descripcion de insumo: {descripcion} </h3>
        <h3>Cantidad del insumo: {cantidad + " " + abreviacion }</h3>

      </div>
      <Form onSubmit={() => DeleteInsumo(id)}>
        <Form.Group>
          <Button variant="danger"
            type="submit"
          >Eliminar</Button>
          
        </Form.Group>
      </Form>
      <UpdateInsumo 
      nombre={nombre}
      id={id}
      tipo={tipo}
      unidad={unidad}
      descripcion={descripcion}
      cantidad={cantidad}
      />

    </div>
  );
}

export default InsumosIndividual;