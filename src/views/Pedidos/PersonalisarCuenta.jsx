import AlreadyAgregados from "../../components/Pedidos/AlreadyAgregados";
import AlreadyAgregadosByProduct from "../../components/Pedidos/AlreadyAgregadosByProduct";
import MakeCuentas from "../../components/Pedidos/MakeCuentas";
import { useContext } from "react";
import React from 'react';

import { CuentasContext } from "./PedidosDetalles";


const PersonalizarCuenta = () => {
  const { Rondas, UpdateRondas,  } = useContext(CuentasContext)

  return (
    
      <div className="container-fluid p-0 text-center" >

        <div className="d-flex justify-content-end bg-dark" >
          <ul className="nav nav-tabs text-center">
            <li className="nav-item">
              <button className={`btn nav-link ${Rondas ? "active" : ""}`} onClick={() => UpdateRondas(true)}>Rondas</button>
            </li>
            <li className="nav-item">
              <button className={`btn nav-link ${!Rondas ? "active" : ""}`} onClick={() => UpdateRondas(false)}>Productos</button>
            </li>

          </ul>
        </div>


        <div className="row">
          <div
            style={{ height: "600px", overflowY: "auto" }}
            className="col-md-6 text-center bg-dark text-white"
          >
            <MakeCuentas />
            
          </div>
          <div
            style={{ height: "600px", overflowY: "auto" }}
            className="col-md-6 text-center bg-dark text-white"
            hidden={Rondas}
          >
            <AlreadyAgregadosByProduct

            />
          </div>
          {Rondas && (
            <div
              style={{ height: "600px", overflowY: "auto" }}
              className="col-md bg-secondary text-center text-white"
            >
              <AlreadyAgregados />
            </div>
          )}


        </div>
      </div>
  );
};
export default PersonalizarCuenta;
