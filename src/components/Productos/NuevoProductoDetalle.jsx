import React from "react";
//import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddProductoDetalleModal from "./AddProductoDetalleModal";
import { useParams } from 'react-router-dom';

function NuevoProductoDetalle() {
  const [insumos, setTipoProducto] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const { id_producto } = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/api/insumos")
      .then((res) => res.json())
      .then((insumos) => setTipoProducto(insumos));
  }, []);

  // console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar detalle
      </Button>

      <AddProductoDetalleModal
        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        insumo = {insumos}
        id_producto = {id_producto}
      />
    </>
  );
}
export default NuevoProductoDetalle;