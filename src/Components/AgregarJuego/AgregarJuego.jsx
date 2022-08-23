import React, { useState } from 'react';
import clientAxios from '../../Config/clientAxios';
import Swal from 'sweetalert2';
import styles from './AgregarJuego.module.css';

const AgregarJuego = () => {
    const [juegoNuevo, setJuegoNuevo] = useState({
        nombre: "", fechaLanzamiento: "", categoria: "", precio: "", portada: "", trailer: "", sinopsis: "", destacado: "false", slider: ""
    });
    const handleForm = (e) => {
        e.preventDefault();
        console.log(juegoNuevo)
        clientAxios.post('/juegos/agregarJuego', {
            nombre: juegoNuevo.nombre,
            fechaLanzamiento: juegoNuevo.fechaLanzamiento,
            categoria: juegoNuevo.categoria,
            precio: juegoNuevo.precio,
            portada: juegoNuevo.portada,
            trailer: juegoNuevo.trailer,
            sinopsis: juegoNuevo.sinopsis,
            destacado: juegoNuevo.destacado,
            slider: juegoNuevo.slider
        }).then(response => {
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Juego agregado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error y no se pudo agregar el juego',
                })
            }
            e.target.reset()
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error y no se pudo agregar el juego',
            })
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJuegoNuevo((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <>
            <div className="container">
                <h2 className='text-light text-center'>¿Que juego desea agregar?</h2>
                <form onSubmit={handleForm} className='d-flex justify-content-center'>
                    <div className="row flex-column">
                        <div className='my-4'>
                            <label className='text-light' htmlFor="nombre">Nombre</label>
                            <input clas maxLength={40} className={`${styles.inputJuego} form-control ms-3`} type="text" id='nombre' name='nombre' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light' htmlFor="fechaLanzamiento">Fecha de Lanzamiento</label>
                            <input className={`${styles.inputJuego} form-control ms-3`} type="date" max={'2024-01-01'} min={'1990-01-01'} id='fechaLanzamiento' name='fechaLanzamiento' onChange={handleChange} required />
                        </div>
                        {/* <div className='my-4'>
                            <label className='text-light' htmlFor="categoria">Categoria</label>
                            <input maxLength={15} className={` ${styles.inputJuego} ms-3`} type="text" id='categoria' name='categoria' onChange={handleChange} required />
                        </div> */}
                        <div className='my-4'>
                            <label className='text-light form-label' htmlFor="categoria">Categoria</label>
                            <select className={`${styles.inputJuego} form-control ms-3`} id='categoria' name='categoria' onChange={handleChange}>
                                <option selected>Seleccione una categoria</option>
                                <option value="accion">Accion</option>
                                <option value="aventura">Aventura</option>
                                <option value="deportes">Deportes</option>
                            </select>
                        </div>
                        <div className='my-4'>
                            <label className='text-light form-label' htmlFor="precio">Precio</label>
                            <input maxLength={5} className={` ${styles.inputJuego} form-control ms-3`} min={1} type="number" id='precio' name='precio' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light form-label' htmlFor="portada">Portada</label>
                            <input className={`${styles.inputJuego} form-control ms-3`} type="url" id='portada' name='portada' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light form-label' htmlFor="slider">Slider</label>
                            <input className={`${styles.inputJuego} form-control ms-3`} type="url" id='slider' name='slider' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light form-label' htmlFor="trailer">Trailer</label>
                            <input className={` ${styles.inputJuego} form-control ms-3`} type="url" id='trailer' onChange={handleChange} name='trailer' />
                        </div>
                        <div className='my-4'>
                            <label className='text-light form-label' htmlFor="sinopsis">Sinopsis</label>
                            <textarea cols={40} maxLength={500} rows={6} className={`ms-3 form-control`} type="text" id='sinopsis' onChange={handleChange} name='sinopsis' required />
                        </div>
                        <button className='btn btn-success' type='submit'>Agregar Juego</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AgregarJuego