import React from 'react';
import { useEffect, useState } from 'react';

const RecentOrders = () => {

  const [recentOrdersData, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/estadisticas/lastmax")
      .then((res) => res.json())
      .then((insumos) => setData(insumos));
    // .then((data) => console.log(data))
    // console.log(recentOrdersData)
  }, []);
  // Supongamos que tienes un arreglo de pedidos recientes
  // const recentOrdersData = [
  //   {
  //     nombre: 'Chela',
  //     precio: '$1200',
  //     totalGanado: '$25,000',
  //     status: 'Up'
  //   },
  //   {
  //     nombre: 'Barbie chela',
  //     precio: '$110',
  //     totalGanado: '$12,000',
  //     status: 'Equal'
  //   },
    
  // ];

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Más vendidos</h2>
          <h3>Últimas 2 semanas</h3>
          {/* <a href="#" className="btn">mas vendidos</a> */}
        </div>

        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Precio actual</td>
              <td>Ventas</td>
              <td>Ingresos generados</td>
              {/* <td>Status</td> */}
            </tr>
          </thead>

          <tbody>
            {recentOrdersData.map((order, index) => (
              <tr key={index}>
                <td>{order.nombre}</td>
                <td>{order.precio_actual}</td>
                <td>{order.total_vendido}</td>
                <td>{order.Ingresos}</td>
                {/* <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
