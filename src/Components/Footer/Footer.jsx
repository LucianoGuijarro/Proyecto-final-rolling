import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';



function Footer() {
    return (
        <div className={`${styles.footer} container-fluid py-3 mt-5`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to='/' className={`${styles.text}`}> Politica de Privacidad </Link>
                        <Link to='/' className={`${styles.text} d-flex`}> Informacion legal </Link>
                        <Link to='/' className={`${styles.text} d-flex`}> Reembolsos </Link>
                        <Link to='/' className={`${styles.text} d-flex`}> Acuerdo de Suscriptor a NawenGames </Link>
                    </div>
                    <div className="col">
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
        </div>

    )
}

export default Footer