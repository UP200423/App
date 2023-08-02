import React, { useEffect, useState } from 'react';
import RowTableDetalleProd from './RowTableDetalleProd';

const CartaTablaDetalle = (props) => {
  const [data, setData] = useState([]);
  const {id_producto} = props;

  console.log("hola pibes" + id_producto);

  useEffect(() => {
    // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
    fetch(`http://localhost:3001/api/producto_detalle/${id_producto}`)
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
          <h2>Productos</h2>
        </div>
        <div class="overflow-scroll">
          <table width="1000" class="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID Producto</th>
                <th scope="col">ID Detalle</th>
                <th scope="col">Producto</th>
                <th scope="col">Tipo de Producto</th>
                <th scope="col">ID Insumo</th>
                <th scope="col">Insumo</th>
                <th scope="col">Tipo de Insumo</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <RowTableDetalleProd 
                id_producto = {item.id_producto}
                id_detalle = {item.id_detalle}
                nombre_producto = {item.nombre_producto}
                tipo_producto = {item.tipo_producto}
                id_insumo = {item.id_insumo}
                nombre_insumo = {item.nombre_insumo}
                tipo_insumo = {item.tipo_insumo}
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

export default CartaTablaDetalle;