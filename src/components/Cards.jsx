import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={props.imagen}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">
            {props.descr}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
