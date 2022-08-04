import React from 'react';
import styles from './Crads.module.css';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { TiDelete } from 'react-icons/ti';
import clientAxios from '../../Config/clientAxios';
import Swal from 'sweetalert2';

const Cards = ({ juego }) => {
    const eliminarProducto = () => {
        if(window.confirm('Estas seguro de querer eliminar este juego?')) {
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
        })}
    }
    return (
        <>
            <div className={`${styles.card} col-sm-7 col-md-3 col-lg-2 d-flex flex-wrap justify-content-center me-1 mt-5 p-0`}>
                <Link to={`/verJuego/${juego._id}`}>
                    <img className={`${styles.img} rounded-top img-fluid`} src={juego.portada} alt={juego.nombre} />
                    <div className='d-flex justify-content-around w-100'>
                        <button className={`${styles.boton} rounded-bottom w-100 opacity-75`}><TiShoppingCart size={35} color='white' /></button>
                    </div>
                </Link>
                <button onClick={() => eliminarProducto()} className={`${styles.botonEliminar}`}><TiDelete color="red" size={40} /></button>
            </div>
        </>
    )
}
export default Cards