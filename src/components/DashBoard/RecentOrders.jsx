import React from 'react';

const RecentOrders = () => {
  // Supongamos que tienes un arreglo de pedidos recientes
  const recentOrdersData = [
    {
      nombre: 'Chela',
      precio: '$1200',
      totalGanado: '$25,000',
      status: 'Up'
    },
    {
      nombre: 'Barbie chela',
      precio: '$110',
      totalGanado: '$12,000',
      status: 'Equal'
    },
    
  ];

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Recent Orders</h2>
          <a href="#" className="btn">View All</a>
        </div>

        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Precio</td>
              <td>Total ganado</td>
              <td>Status</td>
            </tr>
          </thead>

          <tbody>
            {recentOrdersData.map((order, index) => (
              <tr key={index}>
                <td>{order.nombre}</td>
                <td>{order.precio}</td>
                <td>{order.totalGanado}</td>
                <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
