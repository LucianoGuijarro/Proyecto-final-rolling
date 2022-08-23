import React, { useState } from 'react';
import styles from './Crads.module.css';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { TiDelete } from 'react-icons/ti';
import clientAxios from '../../Config/clientAxios';
import Swal from 'sweetalert2';
import { FiEdit } from "react-icons/fi";

const Cards = ({ juego, flag, setFlag }) => {
    const rolUsuario = localStorage.getItem('rol');
    const [infoEditada, setInfoEditada] = useState({
        precio: juego.precio, portada: juego.portada, trailer: juego.trailer, nombre: juego.nombre, categoria: juego.categoria, slider: juego.slider
    });
    const [destacado, setDestacado] = useState(juego.destacado)
    const confirmarDestacado = () => {
        clientAxios.patch(`/juegos/editarJuego/${juego._id}`, {
            destacado: !juego.destacado
        })
            .then(response => {
                if (response.status === 200) {
                    setDestacado(!juego.destacado)
                    alert('Juego editado correctamente')
                } else {
                    alert('Ha ocurrido un error y no se pudo editar el juego')
                }
            }).catch(error => {
                alert('Ha ocurrido un error y no se pudo editar el juego')
            })
    }
    const handleForm = (e) => {
        e.preventDefault();
        clientAxios.patch(`/juegos/editarJuego/${juego._id}`, infoEditada)
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Juego editado correctamente',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ha ocurrido un error y no se pudo editar el juego',
                    })
                }
                e.target.reset();
            }).catch(error => {
                alert('Ha ocurrido un error y no se pudo editar el juego')
            })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfoEditada((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
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
                        setFlag(!flag)
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
                        <button type="button" data-bs-toggle="modal" data-bs-target={`#modal-${juego._id}`} className={`${styles.botonEditar}`}><FiEdit color='white' size={28} /></button>
                        <div className="form-check form-switch m-2">
                            <label className="form-check-label text-light" htmlFor="destacado">Destacado</label>
                            <input className="form-check-input" type="checkbox" onClick={() => confirmarDestacado()} defaultChecked={destacado} role="switch" id="destacado" name='destacado' />
                        </div>
                    </div>
                        : false
                }
            </div>
            <div className="modal fade" id={`modal-${juego._id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Editar Juego</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="modal-body" onSubmit={handleForm}>
                            <div className='my-4'>
                                <label className='form-label' htmlFor="nombre">Nombre</label>
                                <input maxLength={40} className={` ${styles.inputJuego} ms-3`} onChange={handleChange} defaultValue={juego.nombre} type="text" id='nombre' name='nombre' />
                            </div>
                            {/* <div className='my-4'>
                                <label htmlFor="categoria">Categoria</label>
                                <input maxLength={15} className={` ${styles.inputJuego} ms-3`} onChange={handleChange} defaultValue={juego.categoria} type="text" id='categoria' name='categoria' />
                            </div> */}
                            <div className='my-4'>
                                <label className='form-label' htmlFor="categoria">Categoria</label>
                                <select className={`${styles.inputJuego} ms-3`} id='categoria' defaultValue={juego.categoria} name='categoria' onChange={handleChange}>
                                    <option selected>Seleccione una categoria</option>
                                    <option value="accion">Accion</option>
                                    <option value="aventura">Aventura</option>
                                    <option value="deportes">Deportes</option>
                                </select>
                            </div>
                            <div className='my-4'>
                                <label className='form-label' htmlFor="precio">Precio</label>
                                <input maxLength={5} className={` ${styles.inputJuego} ms-3`} onChange={handleChange} defaultValue={juego.precio} type="number" id='precio' name='precio' />
                            </div>
                            <div className='my-4'>
                                <label className='form-label' htmlFor="portada">Portada</label>
                                <input className={`${styles.inputJuego} ms-3`} type="url" onChange={handleChange} defaultValue={juego.portada} id='portada' name='portada' />
                            </div>
                            <div className='my-4'>
                                <label className='form-label' htmlFor="slider">Slider</label>
                                <input className={`${styles.inputJuego} ms-3`} type="url" onChange={handleChange} defaultValue={juego.slider} id='slider' name='slider' />
                            </div>
                            <div className='my-4'>
                                <label className='form-label' htmlFor="trailer">Trailer</label>
                                <input className={` ${styles.inputJuego} ms-3`} type="url" onChange={handleChange} defaultValue={juego.trailer} id='trailer' name='trailer' />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards