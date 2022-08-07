import React, { useEffect, useState } from 'react'
import clientAxios from '../../Config/clientAxios';
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import styles from './VerCategorias.module.css';
import Swal from 'sweetalert2';

const VerCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        clientAxios.get('/categorias/verCategorias')
            .then(response => setCategorias(response.data))
    }, [])
    const eliminarCategoria = (id) => {
        if (window.confirm('Seguro quieres eliminar esta categoria?')) {
            clientAxios.delete(`/categorias/eliminarCategoria/${id}`)
                .then(response => {
                    if (response.status !== 200) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Ha ocurrido un error y no se pudo eliminar esta categoria',
                        })
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Categoria eliminada',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ha ocurrido un error y no se pudo esta categoria',
                      })
                })
        }
    }
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-light'>
                            <th scope="col">Categoria</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categorias.map((cat, i) => (
                                <tr key={i}>
                                    <td className='text-light' >{cat.nombre}</td>
                                    <td>
                                        <button className={`${styles.boton}`}><FiEdit size={25} color={'white'} /></button>
                                        <button className={`${styles.boton}`} onClick={() => eliminarCategoria(cat._id)}><MdDeleteForever size={25} color={'white'} /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VerCategorias