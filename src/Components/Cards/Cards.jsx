import React from 'react';
import styles from './Crads.module.css';

const Cards = ({ juego }) => {
    return (
        <>
            <div className={`${styles.card} col-sm-12 col-md-5 col-lg-3 d-flex flex-wrap justify-content-center mt-5 py-4 shadow`}>
                <h2 className={`${styles.titulo} text-center`}>{juego.nombre}</h2>
                <div className='d-flex justify-content-center my-3'>
                    <img className={`${styles.img}`} src={juego.portada} alt={juego.nombre} />
                </div>
                <div className='d-flex justify-content-around my-3 w-100'>
                    <p className='fw-bold fs-3'>{`€${juego.precio}`}</p>
                    <button className='btn btn-primary w-50'>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Cards