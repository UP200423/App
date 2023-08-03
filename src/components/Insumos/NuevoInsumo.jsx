import React from "react";
import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddInsumoModal from "./AddInsumoModal";



function NuevoInsumo() {
  const [unidadesMedida, setUnidadesMedida] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [tipoInsumo, setTipoInsumo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/unidades_de_medida")
      .then((res) => res.json())
      .then((unidadesMedida) => {
        setUnidadesMedida(unidadesMedida)
        console.log(unidadesMedida)
      });
      console.log("holamundo")
    fetch("http://localhost:3000/api/tiposInsumo")
      .then((res) => res.json())
      .then((tipoI) => { setTipoInsumo(tipoI) })
  }, []);
  // console.log(tipoInsumo)
  useEffect(() => {
    console.log("esto es lo que trae", tipoInsumo)
  }, [tipoInsumo])

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar insumo
      </Button>

      <AddInsumoModal
        unidadesmedida={unidadesMedida}
        show={modalShow}
        backdrop="static"
        tipoInsumo={tipoInsumo}
        onHide={() => setModalShow(false)}



      />
    </>
  );
}
export default NuevoInsumo;