import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../../Config/clientAxios";
import Cards from "../Cards/Cards";
import styles from "./grid.module.css";

const Grid = ({ categoria }) => {
  const [juego, setJuego] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    clientAxios.get(`/juegos/verJuegos/${categoria}`).then((response) => {
      setJuego(response.data);
      setIsLoading(false);
    });
  }, [categoria]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div
            className={`row justify-content-around shadow rounded my-3 pb-3`}
          >
            <p className="fs-1 text-center text-light text-uppercase">
              {categoria}
            </p>
            {juego.map((juego) => {
              return <Cards juego={juego} key={juego._id} />;
            })}
            <Link to={`/categoria/${categoria}`} className={`d-flex`}>
              <button className={`${styles.boton} px-2 p2-1 mt-4`}>
                Ver todos
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Grid;
