import React from "react";
//import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddProductoModal from "./AddProductoModal";

function NuevoProducto() {
  const [tipoProducto, setTipoProducto] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/tiposProductos")
      .then((res) => res.json())
      .then((tipoProdu) => setTipoProducto(tipoProdu));
      
  }, []);

  // console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar producto
      </Button>

      <AddProductoModal
        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        tipoproducto = {tipoProducto}
      />
    </>
  );
}
export default NuevoProducto;