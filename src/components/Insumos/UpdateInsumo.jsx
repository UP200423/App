import React from "react";
import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import AddInsumoModal from "./AddInsumoModal";
import UpdateInsumoModal from "./UpdateInsumoModal";




function UpdateInsumo({id, nombre, tipo, unidad, descripcion, cantidad}) {
  // nombre={nombre}
  //     id={id}
  //     tipo={tipo}
  //     unidad={unidad}
  //     descripcion={descripcion}
  //     cantidad={cantidad}
  
  const [unidadesMedida, setUnidadesMedida] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [tipoInsumo, setTipoInsumo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/unidades_de_medida")
      .then((res) => res.json())
      .then((unidadesMedida) => setUnidadesMedida(unidadesMedida));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/tiposInsumo")
      .then((res) => res.json())
      .then((tipoInsumo) => setTipoInsumo(tipoInsumo));
  }, []);
  // console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Actualizar insumo
      </Button>

      <UpdateInsumoModal

        unidadesmedida= {unidadesMedida}
        show={modalShow}
        backdrop={true}
        onHide={() => setModalShow(false)}
        tipoinsumo = {tipoInsumo}
        nombre={nombre}
        id={id}
        tipo={tipo}
        unidad={unidad}
        descripcion={descripcion}
        cantidad={cantidad}


      />
    </>
  );
}
export default UpdateInsumo;