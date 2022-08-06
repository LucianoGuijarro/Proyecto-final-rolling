import React from 'react';
import styles from './Crads.module.css';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { TiDelete } from 'react-icons/ti';
import clientAxios from '../../Config/clientAxios';
import Swal from 'sweetalert2';
import { FiEdit } from "react-icons/fi";

const Cards = ({ juego }) => {
    const eliminarProducto = () => {
        if (window.confirm('Estas seguro de querer eliminar este juego?')) {
            clientAxios.delete(`/juegos/eliminarJuego/${juego._id}`)
                .then(response => {
                    if (response.status !== 200) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Ha ocurrido un error y no se pudo eliminar el juego',
                        })
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Juego eliminado',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ha ocurrido un error y no se pudo eliminar el juego',
                    })
                })
        }
    }
    return (
        <>
            <div className={`col-sm-7 col-md-3 col-lg-2 d-flex flex-wrap justify-content-center me-1 mt-5 p-0`}>
                <Link to={`/verJuego/${juego._id}`}>
                    <img className={`${styles.img} ${styles.card} rounded-top img-fluid`} src={juego.portada} alt={juego.nombre} />
                    <div className='d-flex justify-content-around w-100'>
                        <button className={`${styles.boton} rounded-bottom w-100 opacity-75`}><TiShoppingCart size={35} color='white' /></button>
                    </div>
                </Link>
                <button onClick={() => eliminarProducto()} className={`${styles.botonEliminar} me-4`}><TiDelete color="red" size={40} /></button>
                <button className={`${styles.botonEditar}`}><FiEdit color='white' size={28} /></button>
                <div class="form-check form-switch m-2">
                    <label className="form-check-label text-light" htmlFor="destacado">Destacado</label>
                    <input className="form-check-input" type="checkbox" role="switch" id="destacado" name='destacado' />
                </div>
            </div>
        </>
    )
}
export default Cards