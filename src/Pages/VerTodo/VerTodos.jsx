import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../../Components/Cards/Cards';
import clientAxios from '../../Config/clientAxios';


const VerTodos = () => {
    const { categoria } = useParams();
    const [juegos, setJuegos] = useState([])
    useEffect(() => {
        clientAxios.get(`/juegos/verTodos/${categoria}`)
            .then(response => setJuegos(response.data))
    }, [categoria])
    console.log(juegos)
    return (
        <>
            <div className="container">
                <p className='fs-1 text-center text-light'>Seccion de {categoria}</p>
                <div className={`row justify-content-around shadow rounded my-3 pb-3`}>
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

export default VerTodos