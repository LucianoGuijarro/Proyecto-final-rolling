import React, { useState } from "react";
// import clientAxios from "../../Config/clientAxios";
import styles from "../Buscador/Buscador.module.css";

const Buscador = () => {
  const [search, setSearch] = useState(""); //guardo el text que busco
  const [juegos, setJuegos] = useState([]); //almaceno todos los juegos de la base de datos
  const [resultsSerch, setResultsSerch] = useState([]); //almacenar los juegos filtrados

  const handleChange = async ({ target }) => {
    setSearch(target.value);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setJuegos(response);
        filterNames(search);
        // console.log(response);
      })
      .catch((error) => console.log(error));
    // await clientAxios.get('/juegos/verJuegos')
  };

  // const [count, setCount] = useState(0)
  // juegos.map(juego => {
  //   setCount(count + 1)
  //   if(!juego.name){
  //     console.log("no hay resultados");
  //   }
  //   if(count >= 10){
  //     return console.log("tiene mas de 10 opciones");
  //   }
  // return console.log(juego)

  // })
  // if(resultsSerch){
  //   console.log("result tiene");
  //   console.log(resultsSerch);
  // }

  if (resultsSerch.length === 0) {
    console.log("resultsSerch esta vacio");
  }
  // resultsSerch === "" ? console.log(resultsSerch) : console.log("ta vacio");
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
      return null
    })
    console.log(resultadoBusqueda);
    setResultsSerch(resultadoBusqueda);
  };
  const handleSubmit = (e) => {
    alert(`Buscando Resultados para ${search}`);
    console.log(e);
  };

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
          {resultsSerch.length === 0 ? (
            <p className={`${styles.sinResultados} text-uppercase fw-bold my-0`}>Sin resultados</p>
          ) : (
            resultsSerch.map((juego) => {
              return (
                <a className="dropdown-item" href="/">
                  {juego.name}
                </a>
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
