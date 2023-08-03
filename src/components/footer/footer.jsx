import React from "react";
import './footer.css'


function Footer(){
    return(
        
        <footer className="wrap-footer">
            <section className="info ">
                <div className="networks">
                
                <a href="https://web.facebook.com/CrazyFryer/?_rdc=1&_rdr">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                </a>

                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                    </svg>
                </a>

                <a className="Correo_Crazy" href="mailto:crazyfryer2020@gmail.com">crazyfryer2020@gmail.com</a>
                
                </div>
                <div className='general'>
                    <p>info del lugar</p>
                </div>
                <div className="otros">
                    <p>Al ingresar a Crazy Fryer, serás recibido por una decoración animada y colorida, con murales de arte urbano que adornan las paredes. El ambiente es alegre y enérgico, con música animada y un personal amable que te hará sentir como en casa.</p>
                </div>
            </section>
        </footer>
        
    ); 
}


export default Footer;