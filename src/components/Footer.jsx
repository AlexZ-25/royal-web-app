import React from 'react'


// Images
import Whatsapp from "./../images/whatsapp.png";
import Facebook from "./../images/facebook.png";
import Instagram from "./../images/instagram.png";

const Footer = () => {
  return (
    <>
        <footer className="footer">
        <a className="navbar-brand" href="#main">
            <h2>SUSHI ROYAL</h2>
            {/* <img id="logo-ING3NIO" src="assets/images/ING3NIO B_Negativo Blanco.png" alt="Logo ING3NIO" height={60} /> */}
        </a>
        <div className="d-flex ms-2 justify-content-center">
            <a href="#" className='me-4'><img src={Facebook} alt="Logo facebook" height={40} /></a>
            <a href="#" className='me-4'><img src={Instagram} alt="Logo instagram" height={40} /></a>
            <a href="https://wa.me/526672309535" target="_blank"><img src={Whatsapp} alt="Logo whatsapp" height={40} /></a>
        </div>
        <p>2022, Sushi Royal. Creado por: Alexis Antonio Castillo Pimienta.</p>
        </footer>
    </>
  )
}

export default Footer