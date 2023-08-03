import React from 'react';
import './restaurant_card.css';
import { useState } from 'react';

function TarjetaRest(props) {
    const { imagen, nombre, descripcion, valor } = props;
    const [show_imagen, setImagen] = useState(null);


    try {
        const response = fetch('http://localhost:3001/api/producto_imagen/12.png');
        if (response.ok) {
            const blob = response.blob();
            const urlImagen = URL.createObjectURL(blob);
            setImagen(urlImagen);
        } else {
            console.error('Error al obtener la imagen desde el backend.');
        }
    } catch (error) {
        console.error('Error en la solicitud GET:', error);
    }


    return (

        <div
            style={{ background: `url(${show_imagen}) center`, backgroundSize: 'cover' }}
            className="tarjeta-rest">
            <div className="wrap-text_tarjeta-rest">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <div className="cta-wrap_tarjeta-rest">
                    <div className="precio_tarjeta-rest">
                        <span>{valor}</span>
                    </div>
                    {/* <div className="cta_tarjeta-rest">
                        <a href=".">Pedir ahora</a>
                    </div> */}
                </div>
            </div>
        </div>

    );
}

export default TarjetaRest;