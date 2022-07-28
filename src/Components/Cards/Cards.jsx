import React from 'react';
import styles from './Crads.module.css';
import { TiShoppingCart } from "react-icons/ti";

const Cards = ({ juego }) => {
    return (
        <>
            <div className={`${styles.card} col-sm-12 col-md-5 col-lg-2 d-flex flex-wrap justify-content-center mt-5  p-0`}>
                {/* <h2 className={`${styles.titulo} text-center`}>{juego.nombre}</h2> */}
                <img className={`${styles.img} img-fluid`} src={juego.portada} alt={juego.nombre} />
                <div className='d-flex justify-content-around w-100'>
                    {/* <p className='fw-bold fs-3'>{`€${juego.precio}`}</p> */}
                    <button className={`${styles.boton} w-100 opacity-75`}><TiShoppingCart size={35} color='white'/></button>
                </div>
            </div>
        </>
    )
}

export default Cards