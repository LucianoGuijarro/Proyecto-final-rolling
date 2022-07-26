import React, { useEffect, useState } from 'react';
import clientAxios from '../../Config/clientAxios';
import Cards from '../Cards/Cards';

const Grid = () => {
  const [juego, setJuego] = useState([]);
  useEffect(() => {
    clientAxios.get('/verJuegos')
      .then(response => setJuego(response.data))
  }, [])

  return (
    <>
      <div className="container">
        <h2 className='text-center'>Accion</h2>
        <div className="row justify-content-between">
          {
            juego.map((juego) => {
              return <Cards juego={juego} key={juego._id} />
            })
          }
        </div>
        <p className='text-end fw-bold mt-4 text-primary'>Ver todos</p>
      </div>
    </>
  )
}

export default Grid