import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";

const Reserva = () => {

  const initialForm = {
    nombre: "",
    correo: "",
    horario: "",
  };

  useEffect(() => {
    alert('Bienvenido a la pagina de reservas, favor de ingresar la informacion solicitada y dar click en "Reservar"')
  }, [])

  const [form, setForm] = useState(initialForm);

  const crearReservacion = async () => {
    console.log(form);
    const coleccion = collection(db, "reservaciones");
    await addDoc(coleccion, form);
  };

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
              onChange={(e) => {
                setForm({ ...form, nombre: e.target.value });
              }}
            />
          </div>
          <div className="input-group p-3">
            <input
              type="text"
              className="form-control"
              placeholder="Correo electrónico"
              aria-label="Correo electrónico"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setForm({ ...form, correo: e.target.value });
              }}
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
            <select className="custom-select" id="inputGroupSelect01" 
                onChange={(e) => {
                setForm({ ...form, horario: e.target.value });
              }}>
              <option>Disponibles</option>
              <option value={1800}>18:00 Hrs</option>
              <option value={1900}>19:00 Hrs</option>
              <option value={2000}>20:00 Hrs</option>
              <option value={2100}>21:00 Hrs</option>
              <option value={2200}>22:00 Hrs</option>
            </select>
          </div>
          <button type="button" className="btn btn-success mt-3 ms-3 mb-3" onClick={crearReservacion}>Reservar</button>
        </article>
      </main>
    </>
  );
};

export default Reserva;
