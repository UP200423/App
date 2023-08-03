import React, { useContext} from 'react';
import RowTableInsumos from './RowTableDetalleInsumos';
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContext } from '../../views/Insumos/InsumosGlobal';
const TablaInsumos = () => {
  const { dataFiltered } = useContext(DataContext)
  if (dataFiltered.length > 0) {
  return (
    <React.Fragment>
      <br></br>
      <div className="card">
        <div className="card-header">
          <h2>Insumos</h2>
        </div>
        <div className="overflow-scroll">
          <table width="1000" className="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID insumo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo de insumo</th>
                <th scope="col">Unidad de medida</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col" colSpan="3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataFiltered.map(tipo => (
                <RowTableInsumos key={tipo.id_insumo}
                id_insumo = {tipo.id_insumo}
                nombre = {tipo.nombre}
                tipo_insumo = {tipo.nombre_tipo}
                unidad_de_medida = {tipo.nombre_unidad}
                descripcion = {tipo.descripcion}
                cantidad = {tipo.cantidad}
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

export default TablaInsumos;