import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import clientAxios from "../../Config/clientAxios";

const VerTodos = () => {
  const { categoria } = useParams();
  const [juegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    clientAxios
      .get(`/juegos/verTodos/${categoria.toLocaleLowerCase()}`)
      .then((response) => {
        setJuegos(response.data);
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
          <p className="fs-1 text-center text-light text-uppercase">
            Seccion de {categoria}
          </p>
          <div
            className={`row justify-content-around shadow rounded my-3 pb-3`}
          >
            {juegos.map((juego) => {
              return <Cards juego={juego} key={juego._id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default VerTodos;
