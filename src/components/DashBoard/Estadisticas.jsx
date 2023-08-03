import React from 'react';
import CardBox from './CardBox';

const Estadisticas = () => {
  const cardData = [
    {
      main: 'Chela',
      cardName: 'El mas vendido',
    },
    {
      main: '$60',
      cardName: 'Precio'
    },
    {
      main: '652',
      cardName: 'Ventas'
    },
    {
      main: '$44,600',
      cardName: 'Ingresos'
    },
  ];

  return (
    <div>
      <h2>Estadísticas</h2>
      <CardBox cardData={cardData} />
    </div>
  );
};

export default Estadisticas;