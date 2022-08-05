import React, { useEffect, useState } from 'react'
import clientAxios from '../../Config/clientAxios';
import { MdDeleteForever } from "react-icons/md";
import styles from './VerCategorias.module.css';

const VerCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        clientAxios.get('/categorias/verCategorias')
            .then(response => setCategorias(response.data))
    }, [])
    return (
        <>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categorias.map((cat, i) => (
                                <tr>
                                    <td>{cat.nombre}</td>
                                    <td>
                                        <button className={`${styles.botonEliminar}`}><MdDeleteForever size={25} color={'white'}/></button>
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