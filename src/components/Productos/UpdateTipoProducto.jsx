import React from "react";
//import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import AddInsumoModal from "./AddInsumoModal";
import UpdateProductoModal from "./UpdateTipoProductoModal";

function UpdateProducto({id, nombre}) {
  
  const [modalShow, setModalShow] = React.useState(false);
  // console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        ACTUALIZAR
      </Button>

      <UpdateProductoModal

        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        nombre={nombre}
        id={id}
      />
    </>
  );
}
export default UpdateProducto;