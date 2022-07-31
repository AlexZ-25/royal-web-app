import React from "react";
import Cards from "../components/Cards";
import sushi from "./../images/sushi.jpg";
import { useNavigate } from "react-router-dom";
// import { sushisFav } from "./../data/sushisFav.json" assert { type: "json" };

const Main = () => {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    // 👇️ navigate to /menu
    navigate("/menu");
  };

  const sushisFav = [
    {
      nombre: "Guamuchilito",
      descripcion: "Camarón, surimi por dentro, tampico y aguacate encima.",
      imagen: sushi,
    },
    {
      nombre: "Blankito",
      descripcion: "Res, tocino y camaron por dentro, gratinado con sriracha.",
      imagen: sushi,
    },
    {
      nombre: "Toca",
      descripcion: "Camarón por dentro, gratinado con surimi, tocino y camarón.",
      imagen: sushi,
    },
  ];

  // Propiedades de la imagen de fondo
  const sushiBackground = {
    backgroundImage: `url(${sushi})`,
    height: "65vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <header className="main">
        <h1 className="textoMain">Deleita tu paladar con Sushi Royal</h1>
        <button
          type="button"
          className="btn btn-success buttonMenu btn-lg"
          onClick={navigateToMenu}
        >
          Menú
        </button>
        <div className="oscurecerImagen" style={sushiBackground}></div>
      </header>
      <main>
        <article>
          <h1 className="text-center">Nuestros favoritos</h1>
          <div className="d-flex p-2 bd-highlight justify-content-around justify-content-center flex-wrap">
            {sushisFav.map((sushi) => (
              <Cards
                nombre = {sushi.nombre}
                descr = {sushi.descripcion}
                imagen = {sushi.imagen}
                />
            )
            )}
          </div>
        </article>
      </main>
    </>
  );
};

export default Main;
