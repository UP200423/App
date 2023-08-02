import React from 'react';
// import './Carta.css';
import Header from '../../components/header/header.jsx';
import Footer from "../../components/footer/footer.jsx";
import Container from '../../components/Card_container/Card_Container.jsx';
import Container2 from '../../components/Card_container2/Card_Container2.jsx';
import Container3 from '../../components/Card_container3/Card_Container3.jsx';


function Carta(){
    return(
        <>
        <Header/>
        <Container3/>
        <Container2/>
        <Container/>
        <Footer/>
    </>

    );
}

export default Carta;



