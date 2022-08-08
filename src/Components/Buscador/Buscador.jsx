import React, { useState } from "react";
import clientAxios from "../../Config/clientAxios";
import styles from "../Buscador/Buscador.module.css";
import { Link } from "react-router-dom";

const Buscador = () => {
  const [search, setSearch] = useState(""); //guardo el text que busco
  const [juegos, setJuegos] = useState([]); //almaceno todos los juegos de la base de datos
  const [resultsSerch, setResultsSerch] = useState([]); //almacenar los juegos filtrados

  const handleChange = async ({ target }) => {
    setSearch(target.value);
    clientAxios.get("/juegos/verJuegos").then((response) => {
      filterNames(search);
      setJuegos(response.data);
    });
  };

  // if (resultsSerch.length <= 1) {
  //   console.log("resultsSerch esta vacio");
  // }else{
  //   console.log("resultsSerch:" + resultsSerch.length)
  // }

  const filterNames = (juegoToSearch) => {
    let resultadoBusqueda = juegos.filter((elemento) => {
      if (
        elemento.nombre
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

  // const handleSubmit = (e) => {
  //   alert(`Buscando Resultados para ${search}`);
  //   console.log(e);
  // };

  const captureInfo = (e) => {};
  return (
    <div className={`container dropdown d-flex align-items-center`}>
      <input
        type="text"
        className="form-control col-2 dropdown-toggle"
        // value={search}
        placeholder="Buscar Juego"
        data-bs-toggle="dropdown"
        arial-expanded="false"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleChange}
      />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="100"
        fill="currentColor"
        class="bi bi-search"
        viewBox="100 100 100 100"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg> */}
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
                <Link
                  className="dropdown-item"
                  to={`verJuego/${juego._id}`}
                  onClick={captureInfo}
                  key={juego._id}
                >
                  {juego.nombre}
                </Link>
              );
            })
          )}
        </li>
      </ul>
      {/* <button
        type="button"
        className={`${styles.buton} px-2 ms-4`}
        onClick={handleSubmit}
      >
        Buscar
      </button> */}
    </div>
  );
};

export default Buscador;
