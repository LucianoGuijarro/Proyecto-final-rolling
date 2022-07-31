import React from 'react';
import styles from './Crads.module.css';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";

const Cards = ({ juego }) => {
    // hola soy maxi
    return (
        <>
            <div className={`${styles.card} col-sm-7 col-md-3 col-lg-2 d-flex flex-wrap justify-content-center me-1 mt-5 p-0`}>
                <Link to={`/verJuego/${juego._id}`}>
                    <img className={`${styles.img} rounded-top img-fluid`} src={juego.portada} alt={juego.nombre} />
                    <div className='d-flex justify-content-around w-100'>
                        <button className={`${styles.boton} rounded-bottom w-100 opacity-75`}><TiShoppingCart size={35} color='white' /></button>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Cards