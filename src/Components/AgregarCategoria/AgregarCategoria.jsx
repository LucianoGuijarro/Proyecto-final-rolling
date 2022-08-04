import React, { useState } from 'react';
import clientAxios from '../../Config/clientAxios';
import Swal from 'sweetalert2';

const AgregarCategoria = () => {
    const [categoriaNueva, setCategoriaNueva] = useState({
        nombre: ""
    });
    const handleForm = (e) => {
        e.preventDefault();
        clientAxios.post('/categorias/agregarCategoria', {
            nombre: categoriaNueva.nombre
        }).then(response => {
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Categoria creada correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error y no se pudo agregar la categoria',
                })
            }
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error y no se pudo agregar la categoria',
            })
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setCategoriaNueva((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <>
            <div className="container">
                <form className='d-flex justify-content-center' onSubmit={handleForm}>
                    <div className='my-4'>
                        <label className='text-light' htmlFor="nombre">Nombre</label>
                        <input maxLength={20} className={`ms-3`} type="text" id='nombre' onChange={handleChange} name='nombre' placeholder='Ej: Accion' required />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AgregarCategoria