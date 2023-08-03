import React from 'react';
import menu from "../../img/menu_icon.png"
import './header.css';


function Header() {
  return (
    <header className="main-header" >
      <div className="header-wrap">
        <div className="wrap-logo-header">
          <a className="logo-header" href="/">
            Crazy Fryer
          </a>
        </div>
        <div className="wrap-nav-header">
          <nav className="nav-header">
            <input type="checkbox" id="check" />
            
            <label htmlFor="check" className="checkbtn">
              <i className="toggle-menu">
              <img src={menu} alt="Menu"/>
              </i>
            </label>
              <ul className="main-menu">
              
                <li className="menu-item"> {/**key para asigar un identificador unico que en este caso seria index */}
              
                  <a href='/Carta'> Carta</a>
                  {/* <a href='/Estadisticas'>Estadisticas</a> */}
                  <a href='/Pedidos'> Pedidos</a>
                  <a href='/insumos/card'> Insumos</a>
                </li>
              
              </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
