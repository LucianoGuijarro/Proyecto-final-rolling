import React, { useEffect, useState } from "react";
import clientAxios from "../../Config/clientAxios";
import { MdDeleteForever } from "react-icons/md";
import styles from './VerUsuarios.module.css';
import Swal from 'sweetalert2';

const VerUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [flag, setFlag] = useState(true)
    useEffect(() => {
        clientAxios.get('/users/verTodos')
            .then(response => setUsuarios(response.data))
    }, [flag])
    const eliminarUsuario = (id) => {
        if (window.confirm('Estas seguro de eliminar este usuario')) {
            clientAxios.delete(`/users/eliminarUsuario/${id}`)
                .then(response => {
                    if (response.status !== 200) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Ha ocurrido un error y no se pudo eliminar el usuario',
                        })
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Usuario eliminado',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setFlag(!flag)
                    }
                }).catch(error => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario eliminado',
                        showConfirmButton: false,
                        timer: 1500
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
                            <th scope="col">Email</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Eliminar</th>
                            <th scope='col'>Suspendido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((user, i) =>(
                            <tr>
                                <td className='text-light'>{user.correoUser}</td>
                                <td className='text-light'>{user.nickNameUser}</td>
                                <td>
                                    <button className={`${styles.boton}`} onClick={() => eliminarUsuario(user._id)}><MdDeleteForever size={25} color={'white'} /></button>
                                </td>
                                <td>
                                    <div class="form-check form-switch m-2">
                                        <label className="form-check-label text-light" htmlFor="destacado">Ban</label>
                                        <input className="form-check-input" type="checkbox" role="switch" defaultValue={user.suspendido} id="destacado" name='destacado' />
                                    </div>
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

export default VerUsuarios;
