import React from "react";
//import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import AddInsumoModal from "./AddInsumoModal";
import UpdateProductoModal from "./UpdateProductoModal";

function UpdateProducto({id, nombre, tipo, precio, descripcion, id_tipo}) {
  
  const [modalShow, setModalShow] = React.useState(false);
  const [tipoProducto, setTipoProducto] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tiposProductos")
      .then((res) => res.json())
      .then((tipoProducto) => setTipoProducto(tipoProducto));
  }, []);
  // console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Actualizar producto
      </Button>

      <UpdateProductoModal

        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        tipoproducto = {tipoProducto}
        nombre={nombre}
        id={id}
        tipo={tipo}
        id_tipo={id_tipo}
        precio={precio}
        descripcion={descripcion}
      />
    </>
  );
}
export default UpdateProducto;