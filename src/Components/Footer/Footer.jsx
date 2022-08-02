import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css';



function Footer() {
    return (
        <><div className={ `${styles.promo} promo text-center` } >
            <h2> ¿Buscando Promociones?</h2>
            <p> ¿Quieres ser el primero en enterarte de nuestros descuentos y promociones? Completa tu email
                para recibir mas info.</p>
            <button> Iniciar Sesion </button>
            <p> o <Link to=''>Registrate</Link> y unete a NawenGames de forma gratuita </p>
        </div><div className={ `${styles.footer}` }>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to='/' className={`${styles.text}`}> Politica de Privacidad </Link>
                            <Link to='/' className={`${styles.text} d-flex`}> Informacion legal </Link>
                            <Link to='/' className={`${styles.text} d-flex`}> Reembolsos </Link>
                            <Link to='/' className={`${styles.text} d-flex`}> Acuerdo de Suscriptor a NawenGames </Link>
                        </div>
                        <div className="col ">
                            <Link to='/' className={`${styles.text} d-flex`}> Acerca de NawenGames </Link>
                            <Link to='/' className={`${styles.text} d-flex`}> Soporte </Link>
                            <Link to='/' className={`${styles.text} d-flex`}> Tarjeta de Regalo </Link>
                        </div>
                        <div className="col">
                            <img src="./logo2.png" className={`${styles.img}`} alt="Logo" />
                            <p id="text" className={`${styles.text}`}>® Todos los derechos reservados </p>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default Footer