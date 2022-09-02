import React from 'react';
import styles from './CajaComentarios.module.css';
import clientAxios from "../../Config/clientAxios";
import Swal from "sweetalert2";

const CajaComentarios = ({flag, setFlag, comentarios }) => {
    const eliminarComentario = (id) => {
        if (window.confirm('¿Estas seguro de eliminar este comentario?')) {
            clientAxios.delete(`/comentarios/eliminarComentario/${id}`)
                .then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            icon: "success",
                            title: "Comentario Eliminado",
                            showConfirmButton: false,
                            timer: 1500,
                        })
                        setFlag(!flag)
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "Ha ocurrido un error y no se pudo eliminar el comentario",
                        })
                    }
                }).catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Ha ocurrido un error y no se pudo eliminar el comentario",
                    })
                })
        }
    }
    return (
        <div className={`${styles.fondoComentarios} rounded col-xs-10 col-sm-10 col-md-10 col-xl-10 shadow my-5`}>
            <p className='text-light fw-bold pt-2'>{`${comentarios.usuario}:`}</p>
            <p className='ps-5 text-light'>{comentarios.contenido}</p>
            {localStorage.getItem('rol') === 'admin' ? <button onClick={() => eliminarComentario(comentarios._id)} className={`${styles.boton} mb-2`}>Eliminar Comentario</button> : false}
        </div>
    )
}

export default CajaComentarios