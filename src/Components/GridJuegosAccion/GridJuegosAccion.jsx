import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clientAxios from '../../Config/clientAxios';
import Cards from '../Cards/Cards';
import styles from './GridJuegosAccion.module.css';

const GridJuegosAccion = () => {
    const [juego, setJuego] = useState([]);
    useEffect(() => {
        clientAxios.get('/verJuegos/accion')
            .then(response => setJuego(response.data))
    }, [])
    return (
        <>
            <div className="container">
                <div className={`row justify-content-around shadow rounded my-3 pb-3`}>
                <p className='fs-1 text-center text-light'>Accion</p>
                    {
                        juego.map((juego) => {
                            return <Cards juego={juego} key={juego._id} />
                        })
                    }
                <Link to={'/'}><button className={`${styles.boton} text-end mt-4`}>Ver todos</button></Link> 
                </div>
            </div>
        </>
    )
}

export default GridJuegosAccion