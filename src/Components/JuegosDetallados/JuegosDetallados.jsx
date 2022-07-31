import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clientAxios from '../../Config/clientAxios';
import styles from './JuegosDetallados.module.css';

const JuegosDetallados = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState([])
  useEffect(() => {
    clientAxios.get(`/juegos/verJuego/${id}`)
    .then(response => setJuego(response.data))
  }, [id])
  return (
    <>
    <div className="container mt-5">
      <div className={`row justify-content-center`}>
        <div className="col-sm-10 col-md-4 col-lg-5 d-flex justify-content-center">
          <img src={juego.portada} className={`${styles.imagen} rounded`} alt={juego.nombre} />
        </div>
        <div className="col-sm-10 col-md-4 col-lg-5 d-flex flex-column">
          <p className='fs-2 text-light'><strong>Titulo:</strong> {juego.nombre}</p>
          <p className='fs-5 text-light'><strong className='fs-4 text-light'>Sinopsis:</strong> {juego.sinopsis}</p>
          <p className='fs-5 text-light'><strong className='fs-4 text-light'>Fecha de lanzamiento:</strong> {juego.fechaLanzamiento}</p>
          <p className='fs-5 text-light'><strong className='fs-4 text-light'>Categoria:</strong> {juego.categoria}</p>
          <p className='fs-5 text-light'><strong className='fs--4 text-light'>Precio:</strong> {`€${juego.precio}`}</p>
          <button className='btn btn-success'>Comprar Ahora</button>
        </div>
      </div>
      <div className={`row justify-content-center my-4`}>
        <h2 className='text-light text-center fw-bold my-5'>Trailer Oficial</h2>
        <div className="col-6">
        <iframe width="560" height="315" className='rounded' src={juego.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default JuegosDetallados