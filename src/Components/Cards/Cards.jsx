import React from 'react';
import styles from './Crads.module.css';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { TiDelete } from 'react-icons/ti';
import clientAxios from '../../Config/clientAxios';
import Swal from 'sweetalert2';
import { FiEdit } from "react-icons/fi";

const Cards = ({ juego }) => {
    const rolUsuario = localStorage.getItem('rol');
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
                {
                    rolUsuario === 'admin' ? <div className='col-sm-12 col d-flex justify-content-center'>
                        <button onClick={() => eliminarProducto()} className={`${styles.botonEliminar} me-4`}><TiDelete color="red" size={40} /></button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className={`${styles.botonEditar}`}><FiEdit color='white' size={28} /></button>
                        <div class="form-check form-switch m-2">
                            <label className="form-check-label text-light" htmlFor="destacado">Destacado</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="destacado" name='destacado' />
                        </div>
                    </div>
                        : false
                }
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Editar Juego</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form class="modal-body">
                        <div className='my-4'>
                            <label htmlFor="precio">Precio</label>
                            <input maxLength={5} className={` ${styles.inputJuego} ms-3`} type="number" id='precio' name='precio'  />
                        </div>
                        <div className='my-4'>
                            <label htmlFor="portada">Portada</label>
                            <input className={`${styles.inputJuego} ms-3`} type="text" id='portada' name='portada'  />
                        </div>
                        <div className='my-4'>
                            <label htmlFor="trailer">Trailer</label>
                            <input className={` ${styles.inputJuego} ms-3`} type="text" id='trailer' name='trailer' />
                        </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards