import React, { createContext } from "react";
import Detalles from "../../components/Pedidos/Detalles.jsx";
import { useState, useEffect } from "react";
import OpcionesPedidos from "../../components/Opciones_Pedidos/OpcionesPedidos.jsx";
import PersonalizarCuenta from "./PersonalisarCuenta.jsx";
import { useParams } from "react-router-dom";
import Nav_pagar_add from "../../components/Pedidos/Nav_pagar_add.jsx";
export const CuentasContext = createContext();

function PedidosDetalles() {
  const [action, setAction] = useState(true);
  const [Pagados, setPagados] = useState([]);
  const { id } = useParams();
  const url= "/pedidos/detalles/" + id
  const [mesa, setMesa] = useState(0);
  const [alredyInserted, setAlredyInserted] = useState([]);
  const [CuentaActiva, setCuentaActiva] = useState([]);
  const [Rondas, setRondas] = useState(false);
  const [nota, setNota] = useState([])
  const tiposDePagos= [
    "Efectivo", "Tarjeta de debito", "Tarjeta de crédito",
    "Vales", "Cortecía de la casa", "Otro"
  ]


  const UpdateRondas = (inp) => {
    setRondas(inp);
  }


  useEffect(() => {
    fetch("http://localhost:3000/api/detallepedidos/" + id)
      .then((res) => res.json())
      .then((resjson) => setAlredyInserted(resjson))
      .catch((error) => {
        console.error("Error fetching detallepedidos:", error);
      });

    fetch("http://localhost:3000/api/pedidos/" + id)
      .then((res) => res.json())
      .then((resjson) => setMesa(resjson.mesa))
      .catch((error) => {
        console.error("Error fetching pedidos:", error);
      });

    fetch("http://localhost:3000/api/cuenta/" + id)
      .then((res) => res.json())
      .then((pedidos) => setCuentaActiva(pedidos))
      .catch((error) => {
        console.error("Error fetching cuenta:", error);
      });
  }, [id]);

  const ClearNota=()=>{
    setNota([])
  }
  const ClearCuentaActiva=()=>{
    setCuentaActiva([])
  }
  const AddProduct = (jsonProduct) => {
    let ifexist = nota.findIndex((p) => p.id_producto === jsonProduct.id_producto);
    let newNota = [...nota]; // Hacemos una copia del arreglo nota

    if (ifexist !== -1) {
      newNota[ifexist].cantidad++;
    } else {
      // Si no existe, agregamos el producto con cantidad 1 en nota
      newNota.push({ ...jsonProduct, cantidad: "1" });
    }

    setNota(newNota); // Actualizamos el arreglo nota

    if (jsonProduct.cantidad === "1" || jsonProduct.cantidad === 1) { // Cambiamos la comparación a jsonProduct.cantidad === "1"
      // Si la cantidad original era 1, eliminamos el producto de CuentaActiva
      setCuentaActiva(CuentaActiva.filter((p) => p.id_producto !== jsonProduct.id_producto));
    } else {
      // Si la cantidad original era mayor a 1, restamos 1 a la cantidad en CuentaActiva
      let indexToRestar = CuentaActiva.findIndex((p) => p.id_producto === jsonProduct.id_producto);
      if (indexToRestar !== -1) {
        let copia = [...CuentaActiva]; // Hacemos una copia del arreglo CuentaActiva
        copia[indexToRestar].cantidad--;
        setCuentaActiva(copia); // Actualizamos el arreglo CuentaActiva
      }
    }
  };

  const RemoveProduct = (jsonProduct) => {
    let ifexist = CuentaActiva.findIndex((p) => p.id_producto === jsonProduct.id_producto);
    let newNota = [...CuentaActiva]; // Hacemos una copia del arreglo nota

    if (ifexist !== -1) {
      newNota[ifexist].cantidad++;
    } else {
      // Si no existe, agregamos el producto con cantidad 1 en nota
      newNota.push({ ...jsonProduct, cantidad: "1" });
    }

    setCuentaActiva(newNota); // Actualizamos el arreglo nota

    if (jsonProduct.cantidad === "1" || jsonProduct.cantidad === 1) { // Cambiamos la comparación a jsonProduct.cantidad === "1"
      // Si la cantidad original era 1, eliminamos el producto de CuentaActiva
      setNota(nota.filter((p) => p.id_producto !== jsonProduct.id_producto));
    } else {
      // Si la cantidad original era mayor a 1, restamos 1 a la cantidad en CuentaActiva
      let indexToRestar = nota.findIndex((p) => p.id_producto === jsonProduct.id_producto);
      if (indexToRestar !== -1) {
        let copia = [...nota]; // Hacemos una copia del arreglo CuentaActiva
        copia[indexToRestar].cantidad--;
        setNota(copia); // Actualizamos el arreglo CuentaActiva
      }
    }
  };

  const UpdateAction = (newAction) => {
    setAction(newAction);
  }



  return (
    <CuentasContext.Provider value={{ tiposDePagos, ClearNota, ClearCuentaActiva, CuentaActiva, alredyInserted, nota, RemoveProduct, AddProduct, mesa, Rondas, UpdateRondas, action, UpdateAction, id }} >
      <div className="pedidospage  bg-dark" style={{width: '100%'}}>
        
        <OpcionesPedidos />
        <div style={{textAlign: "left", fontSize: "150%"}}>
          <a className="text-lg-left" href="/" style={{ marginBottom: '20px' }}>Inicio</a> /
          <a className="text-lg-left" href="/pedidos/" style={{ marginBottom: '20px' }}>Pedidos</a> /
          <a href={url} > Detalles</a>
          
        </div>
        <Nav_pagar_add />
        <div hidden={action}>
          <Detalles />
        </div>
        <div hidden={!action} style={{width: '100%'}}>
          <PersonalizarCuenta />
        </div>

      </div>
    </CuentasContext.Provider>
  );
}

export default PedidosDetalles;
