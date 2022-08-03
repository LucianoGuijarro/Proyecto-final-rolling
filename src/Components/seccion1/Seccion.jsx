import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Seccion.module.css';

function Seccion() {
    return (
    <div className={ `${styles.promo} promo text-center` } >
            <h2> ¿Buscando Promociones?</h2>
            <p> ¿Quieres ser el primero en enterarte de nuestros descuentos y promociones? Completa tu email
                para recibir mas info.</p>
            <button> Iniciar Sesion </button>
            <p> o <Link to='/'>Registrate</Link> y unete a NawenGames de forma gratuita </p>
        </div>
    )
}

export default Seccion