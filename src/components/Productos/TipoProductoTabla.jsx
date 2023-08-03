import React, { useEffect, useState } from 'react';
import RowTableTipoProducto from './RowTableTipoProducto';

const CartaTabla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
    fetch('http://localhost:3001/api/tiposProductos')
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
          <h2>Tipos Productos</h2>
        </div>
        <div class="overflow-scroll" style={{ maxHeight: '600px' }}>
          <table WIDTH="1000" class="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <RowTableTipoProducto 
                id_tipo_prod={item.id_tipo_prod}
                nombre= {item.nombre}
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
      <h1>No hay productos</h1>
    );
  }
};

export default CartaTabla;