import React, { useEffect, useState } from 'react';
import RowTableProductos from './RowTableProductos';
const CartaTabla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
    fetch('http://localhost:3001/api/productos')
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
          <table WIDTH="1000" class="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Tipo</th>
                <th scope="col">Prioridad</th>
                <th scope="col" colspan="2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <RowTableProductos 
                id_producto={item.id_producto}
                nombre= {item.nombre}
                descripcion= {item.descripcion}
                precio={item.precio}
                tipo={item.tipo}
                id_tipo={item.id_tipo}
                prioridad= {item.prioridad}
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