import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PaginaError.module.css';

function PaginaError() {
    return (
        <div className= {`${styles.container} container`}>
            <img className= {`${styles.img}`} src="./error404net.jpg" alt="error404" />
            <h1 className='text-light'>La pagina que ha solicitado no se encuentra disponible</h1>
            <button type="button" class={`${styles.boton} btn btn-light`}>
                <Link to='/'> Ir a pagina de inicio </Link>
            </button>
        </div>
    )
}

export default PaginaError