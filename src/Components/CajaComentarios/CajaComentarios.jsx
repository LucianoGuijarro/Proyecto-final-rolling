import React from 'react';
import styles from './CajaComentarios.module.css';

const CajaComentarios = ({comentarios}) => {
    console.log(comentarios)
  return (
    <div className={`${styles.fondoComentarios} rounded col-xs-10 col-sm-10 col-md-10 col-xl-10 shadow my-5`}>
        <p className='text-light fw-bold pt-2'>{`${comentarios.usuario}:`}</p>
        <p className='ps-5 text-light'>{comentarios.contenido}</p>
    </div>
  )
}

export default CajaComentarios