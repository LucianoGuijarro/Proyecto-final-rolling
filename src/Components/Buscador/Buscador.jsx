import React, { useState, useEffect } from "react";
import clientAxios from "../../Config/clientAxios";
import styles from "../Buscador/Buscador.module.css";
import { Link } from "react-router-dom";

const Buscador = () => {
  const [search, setSearch] = useState(""); //guardo el text que busco
  const [juegos, setJuegos] = useState([]); //almaceno todos los juegos de la base de datos
  const [resultsSerch, setResultsSerch] = useState([]); //almacenar los juegos filtrados

  useEffect(() => {
    clientAxios.get("/juegos/verJuegos").then((response) => {
      setJuegos(response.data);
    });
  }, []);

  useEffect(() => {
    const filterNames = (juegoToSearch) => {
      if (search.length < 1) {
        setResultsSerch([]);
      } else {
        setResultsSerch(
          juegos.filter((elemento) => {
            if (
              elemento.nombre
                .toString()
                .toLowerCase()
                .includes(juegoToSearch.toLowerCase())
            ) {
              return elemento;
            }
            return null;
          })
        );
      }
    };
    filterNames(search);
  }, [search, juegos]);

  const handleChange = async ({ target }) => {
    setSearch(target.value);
  };

  const captureInfo = (e) => {};
  return (
    <div className={`container dropdown`}>
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

      <ul className="dropdown-menu container">
        <li>
          {resultsSerch.length <= 0 ? (
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
    </div>
  );
};

export default Buscador;
