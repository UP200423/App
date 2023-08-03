import React from 'react';
import { IonIcon } from '@ionic/react';

import './Estadisticas.css';

const CardBox = ({ cardData }) => {
  return (
    <div className="cardBox">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div>
            <div className="numbers">{card.main}</div>
            <div className="cardName">{card.cardName}</div>
          </div>
          <div className="iconBx">
            <IonIcon name={card.iconName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBox;
