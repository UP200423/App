import React from "react";
import "./InsumosList.css";
import { useContext } from "react";
import InsumosIndividual from "./InsumoIndividual";
import { DataContext } from "../../views/Insumos/InsumosGlobal";
function InsumosList() {
  const { dataFiltered } = useContext(DataContext)

  if (dataFiltered.length === 0) {
    return <h1>No hay insumos</h1>;
  } else {
    return (
      <>
        <div className="cont-padre" >
          {
            dataFiltered.map((insumo) => (
              <div key={insumo.id_insumo} className="cont" >
                <InsumosIndividual
                  id={insumo.id_insumo}
                  nombre={insumo.nombre}
                  tipo={insumo.tipo_insumo_id}
                  unidad={insumo.unidad_de_medida_id}
                  descripcion={insumo.descripcion}
                  cantidad={insumo.cantidad}
                  nombre_tipo={insumo.nombre_tipo}
                  nombre_unidad={insumo.nombre_unidad}
                  abreviacion={insumo.abreviacion}
                />
              </div>
            ))
          }
        </div>
        <div>
          {
          }
        </div>
      </>
    );
  }
}
export default InsumosList;
