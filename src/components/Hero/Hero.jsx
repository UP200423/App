import React from 'react';
import "./Hero.css";


function Hero() {
  return (
    <div className='fondo-hero'>
    <section className="hero-container">
      <div className= "hero-page">
        <h1>Bienvenidos</h1>
        <br />
        <p>
          Aquí se come como en casa <span>pero sin tener que lavar los platos</span>
        </p>
        <a href="/" className="cta-main">
          Hacer pedido
        </a>
      </div>
    </section>
    </div>
  );
}

export default Hero;
