import React, { useEffect, useState } from 'react';
import clientAxios from '../../Config/clientAxios';
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import styles from './VerUsuarios.module.css';

const VerUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        clientAxios.get('/users/verTodos')
            .then(response => setUsuarios(response.data))
    }, [])
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-light'>
                            <th scope="col">Email</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((user, i) => (
                                <tr>
                                    <td className='text-light'>{user.correoUser}</td>
                                    <td className='text-light'>{user.nickNameUser}</td>
                                    <td>
                                        <button className={`${styles.boton}`}><FiEdit size={25} color={'white'} /></button>
                                        <button className={`${styles.boton}`}><MdDeleteForever size={25} color={'white'} /></button>
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

export default VerUsuarios