import React, { useEffect, useState } from 'react'
import clientAxios from '../../Config/clientAxios';

const VerCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        clientAxios.get('/categorias/verCategorias')
            .then(response => setCategorias(response.data))
    }, [])
    return (
        <>
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
                                <td>button</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default VerCategorias