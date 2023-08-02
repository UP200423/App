import React from "react";
import './footer.css'


function Footer(){
    return(
        
        <footer className="wrap-footer">
            <section className="info ">
                <div className="networks">

                <a href="https://web.facebook.com/CrazyFryer/?_rdc=1&_rdr">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                </a>
                <a href="https://disenowebakus.net/url-en-css.php">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                </svg>
                </a>
                
                <p>Aqui va insta</p>
                
                </div>
                <div className='general'>
                    <p>info del lugar</p>
                </div>
                <div className="otros">
                    <p>otros</p>
                </div>
            </section>
        </footer>
        
    ); 
}


export default Footer;