import React from "react";
import Cards from "../components/Cards";
import sushi from "./../images/sushi.jpg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    // 👇️ navigate to /menu
    navigate("/menu");
  };

  const sushiBackground = {
    backgroundImage: `url(${sushi})`,
    height: "65vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <header className="test">
        <h1 className="testA">Deleita tu paladar con Sushi Royal</h1>
        <button
          type="button"
          class="btn btn-success buttonMenu btn-lg"
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
            <Cards
              nombre={"Guamuchilito"}
              descr={"Alga, camaron y tocino"}
              imagen={sushi}
            />
            <Cards
              nombre={"Mar y Tierra"}
              descr={"Alga, camaron y tocino"}
              imagen={sushi}
            />
            <Cards
              nombre={"Blankito"}
              descr={"Alga, camaron y tocino"}
              imagen={sushi}
            />
            <Cards
              nombre={"Toka"}
              descr={"Alga, camaron y tocino"}
              imagen={sushi}
            />
          </div>
        </article>
      </main>
    </>
  );
};

export default Main;
