import React, {useEffect, useState, createContext} from 'react';
// import './Carta.css';

import Container from '../../components/Card_container/Card_Container.jsx';
import Container2 from '../../components/Card_container2/Card_Container2.jsx';
import Container3 from '../../components/Card_container3/Card_Container3.jsx';
import { defaultrequestOptions } from '../../data.js';

export const DataContext = createContext()


function Carta(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
        fetch('http://localhost:3000/api/productos', defaultrequestOptions)
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data)
                // setDataFiltered(data)
            })
            .catch(error => console.log(error));
        // setDataFiltered(dataOrigin)
    }, []);


    return(
        <DataContext.Provider
            value={ data}
        >
        
        <Container3/>
        <Container2/>
        <Container/>
       
    </DataContext.Provider>

    );
}

export default Carta;



