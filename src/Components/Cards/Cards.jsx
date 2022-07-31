import React from 'react';
import styles from './Crads.module.css';
import { TiShoppingCart } from "react-icons/ti";

const Cards = ({ juego }) => {
    // hola soy maxi
    return (
        <>
            <div className={`${styles.card} col-sm-7 col-md-3 col-lg-2 d-flex flex-wrap justify-content-center me-1 mt-5 p-0`}>
                <img className={`${styles.img} rounded-top img-fluid`} src={juego.portada} alt={juego.nombre} />
                <div className='d-flex justify-content-around w-100'>
                    <button className={`${styles.boton} rounded-bottom w-100 opacity-75`}><TiShoppingCart size={35} color='white' /></button>
                </div>
            </div>
        </>
    )
}
export default Cards