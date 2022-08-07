import React, { useEffect, useState } from 'react'
import clientAxios from '../../Config/clientAxios'
import Cards from '../Cards/Cards'

const VerTodosJuegos = () => {
    const [juegos, setJuegos] = useState([])
    useEffect(() => {
        clientAxios.get('/juegos/verJuegos')
        .then(response => setJuegos(response.data))
    }, [])
  return (
    <>
    <div className="container">
        <div className="row justify-content-between">
            <h2 className='text-light text-center mt-5'>Todos los juegos</h2>
            {
                juegos.map((juego) => {
                    return <Cards juego={juego} key={juego._id} />
                })
            }
        </div>
    </div>
    </>
  )
}

export default VerTodosJuegos