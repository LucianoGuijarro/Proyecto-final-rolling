import React, { useEffect, useState } from "react";
import clientAxios from "../../Config/clientAxios";
import Grid from "../Grid/Grid";

const GridCategorias = () => {
  const [isLoading, setisLoading] = useState(true);
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    clientAxios.get("/categorias/verCategorias").then((response) => {
      setCategoria(response.data);
      setisLoading(false);
    });
  }, []);
  // <div className="d-flex justify-content-center vh-100">
  //   <div className="spinner-border" role="status">
  //     <span className="visually-hidden">Loading...</span>
  //   </div>
  // </div>
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      ) : (
        categoria.map((categoria) => {
          return <Grid categoria={categoria.nombre} key={categoria._id} />;
        })
      )}
    </>
  );
};

export default GridCategorias;
