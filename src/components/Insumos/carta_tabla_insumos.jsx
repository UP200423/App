import React, { useEffect, useState } from 'react';
import RowTableDetalleInsumos from './RowTableDetalleInsumos';

const TablaInsumos = (props) => {
  const [data, setData] = useState([]);
  const {id_insumo} = props;

  console.log("hola pibes" + id_insumo);

  useEffect(() => {
    // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
    fetch(`http://localhost:3000/api/insumos/${id_insumo}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  console.log(data);

  if (data.length > 0) {
  return (
    <React.Fragment>
      <br></br>
      <div class="card">
        <div class="card-header">
          <h2>Insumos</h2>
        </div>
        <div class="overflow-scroll">
          <table width="1000" class="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID insumo</th>
                <th scope="col">Nombre</th>
                <th scope="col">ID tipo de insumo</th>
                <th scope="col">ID unidad de medida</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <RowTableDetalleInsumos
                id_insumo = {item.id_insumo}
                nombre = {item.nombre}
                tipo_insumo_id = {item.tipo_insumo_id}
                unidad_de_medida_id = {item.unidad_de_medida_id}
                descripcion = {item.descripcion}
                cantidad = {item.cantidad}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </React.Fragment>
  )}
  else {
    return (
      <h1>No hay detalles</h1>
    );
  }
};

export default TablaInsumos;