import React, {useState} from "react";

const Ubicacion = () => {
    const [direccion, setDireccion] = useState();
    
    const mostrarDireccion = () => {
        setDireccion('Calle Obregón #150, colonia Centro, C.P. 80000');
    }

  return (
    <>
      <header>
        <h1 className="mt-5">Encuéntranos en:</h1>
        <h2>Culiacán, Sinaloa, México</h2>
        <button type="button" className="btn btn-info" onClick={mostrarDireccion} >Mostrar dirección</button>
        <h3>{direccion}</h3>
        <div className="mapouter">
          <div className="gmap_canvas ">
            <iframe
              width={600}
              height={500}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=culiacan,%20sinaloa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
            <a href="https://fmovies-online.net" />
            <br />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;height:500px;width:600px;}",
              }}
            />
            <a href="https://www.embedgooglemap.net">
              google maps embed generator
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}",
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Ubicacion;
