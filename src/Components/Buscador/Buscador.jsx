import React, { useState } from "react";
import clientAxios from "../../Config/clientAxios";
import styles from "../Buscador/Buscador.module.css";

const Buscador = () => {
  const [search, setSearch] = useState(""); //guardo lo que busco en la tabla
  const [juegos, setJuegos] = useState([]); //almaceno los juegos que encontre

  const handleChange = async ({ target }) => {
    setSearch(target.value)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setJuegos(response)
        console.log(response);
      })
      .catch((error) => console.log(error));
    // await clientAxios.get('/juegos/verJuegos')
  };

  const handleSubmit = (e) => {
    alert(`Buscando Resultados para ${search}`);
    console.log(e);
  };

  return (
    <div className={`mb-3 container mt-4 d-flex col-6 `}>
      <input
        type="text"
        className="form-control col-2"
        placeholder="Buscar Juego"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleChange}
      />
      <button
        type="button"
        className={`${styles.buton} px-2 ms-4`}
        onClick={handleSubmit}
      >
        Buscar
      </button>

      <ul className="dropdown-menu ">
        <li>
          <a className="dropdown-item" href="/">
            Regular link
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/" aria-current="true">
            Active link
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Another link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Buscador;
