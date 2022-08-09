import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PaginadeError.module.css';

function Error() {
    return (
        <div className= {`${styles.container} container`}>
            <img className= {`${styles.img}`} src="./error404.png" alt="error404" />
            <h1>La pagina que ha solicitado no se encuentra disponible</h1>
            <button type="button" class="btn btn-light">
                <Link to='/Home'> Ir a pagina de inicio </Link>
            </button>
        </div>
    )

}

export default Error