import React from "react";

const Reserva = () => {
  return (
    <>
      <header>
        <h1 className="mt-5">Reservaciones</h1>
      </header>
      <main>
        <article>
            <div className="input-group p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Nombre"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Correo electrónico"
                aria-label="Correo electrónico"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 ms-3 mt-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Horario de elección
                </label>
              </div>
              <select className="custom-select" id="inputGroupSelect01">
                <option>Disponibles</option>
                <option value={1}>18:00 Hrs</option>
                <option value={2}>19:00 Hrs</option>
                <option value={3}>20:00 Hrs</option>
                <option value={4}>21:00 Hrs</option>
                <option value={5}>22:00 Hrs</option>
              </select>
            </div>
        </article>
      </main>
    </>
  );
};

export default Reserva;
