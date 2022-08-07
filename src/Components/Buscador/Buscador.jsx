import React, { useState } from "react";
// import clientAxios from "../../Config/clientAxios";
import styles from "../Buscador/Buscador.module.css";
import { Link } from 'react-router-dom';

const Buscador = () => {

  const [search, setSearch] = useState(""); //guardo el text que busco
  const [juegos, setJuegos] = useState([]); //almaceno todos los juegos de la base de datos
  const [resultsSerch, setResultsSerch] = useState([]); //almacenar los juegos filtrados

  const handleChange = async ({ target }) => {
    setSearch(target.value);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        filterNames(search);
        setJuegos(response);
        // console.log(response);
      })
      .catch((error) => console.log(error));
    // await clientAxios.get('/juegos/verJuegos')
  };

  if (resultsSerch.length <= 1) {
    console.log("resultsSerch esta vacio");
  }


  const filterNames = (juegoToSearch) => {
    let resultadoBusqueda = juegos.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(juegoToSearch.toLowerCase())
      ) {
        return elemento;
      }
      return null;
    });
    setResultsSerch(resultadoBusqueda);
    // console.log(resultadoBusqueda);
  };

  const handleSubmit = (e) => {
    alert(`Buscando Resultados para ${search}`);
    console.log(e);
  };

  const captureInfo = (e) => {};
  return (
    <div className={`mb-3 container mt-4 d-flex col-6 dropdown `}>
      <input
        type="text"
        className="form-control col-2 dropdown-toggle"
        value={search}
        placeholder="Buscar Juego"
        data-bs-toggle="dropdown"
        arial-expanded="false"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleChange}
      />
      <ul className="dropdown-menu container">
        <li>
          {resultsSerch.length <= 1 ? (
            <p
              className={`${styles.sinResultados} text-uppercase fw-bold my-0`}            
            >
              Sin resultados
            </p>
          ) : (
            resultsSerch.map((juego) => {
              return (
                <Link className="dropdown-item" to={'/'} onClick={captureInfo} key={juego.id}>
                  {juego.name}
                </Link>
              );
            })
          )}
        </li>
      </ul>
      <button
        type="button"
        className={`${styles.buton} px-2 ms-4`}
        onClick={handleSubmit}
      >
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
