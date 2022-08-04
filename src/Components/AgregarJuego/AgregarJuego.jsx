import React, { useState } from 'react';
import clientAxios from '../../Config/clientAxios';
import Swal from 'sweetalert2';

const AgregarJuego = () => {
    const [juegoNuevo, setJuegoNuevo] = useState({
        nombre: "", fechaLanzamiento: "", categoria: "", precio: "", portada: "", trailer: "", sinopsis: ""
    })
    const handleForm = (e) => {
        e.preventDefault();
        clientAxios.post('/juegos/agregarJuego', {
            nombre: juegoNuevo.nombre,
            fechaLanzamiento: juegoNuevo.fechaLanzamiento,
            categoria: juegoNuevo.categoria,
            precio: juegoNuevo.precio,
            portada: juegoNuevo.portada,
            trailer: juegoNuevo.trailer,
            sinopsis: juegoNuevo.sinopsis
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
    console.log(juegoNuevo)
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleForm} className='d-flex justify-content-center'>
                    <div className="row flex-column">
                        <div className='my-4'>
                            <label className='text-light' htmlFor="nombre">Nombre</label>
                            <input maxLength={20} className={`ms-3`} type="text" id='nombre' name='nombre' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light' htmlFor="fechaLanzamiento">Fecha de Lanzamiento</label>
                            <input className={`ms-3`} type="date" id='fechaLanzamiento' name='fechaLanzamiento' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light' htmlFor="categoria">Categoria</label>
                            <input maxLength={15} className={`ms-3`} type="text" id='categoria' name='categoria' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light' htmlFor="precio">Precio</label>
                            <input maxLength={5} className={`ms-3`} type="number" id='precio' name='precio' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light' htmlFor="portada">Portada</label>
                            <input className={`ms-3`} type="text" id='portada' name='portada' onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <label className='text-light' htmlFor="trailer">Trailer</label>
                            <input className={`ms-3`} type="text" id='trailer' onChange={handleChange} name='trailer' />
                        </div>
                        <div className='my-4 d-flex align-items-center'>
                            <label className='text-light' htmlFor="sinopsis">Sinopsis</label>
                            <textarea cols={50} maxLength={500} rows={6} className={`ms-3`} type="text" id='sinopsis' onChange={handleChange} name='sinopsis' required />
                        </div>
                        <button className='btn btn-success' type='submit'>Agregar Juego</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AgregarJuego