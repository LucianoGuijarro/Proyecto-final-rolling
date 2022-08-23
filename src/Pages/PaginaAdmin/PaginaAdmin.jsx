import React from 'react'
import { Link } from 'react-router-dom'

const PaginaAdmin = () => {
  return (
    <>
      <h1 className='text-light text-center mt-5'>¿Que tarea quieres realizar?</h1>
      <div className="container vh-100 d-flex align-items-center justify-content-around">
        <Link to={'/agregarJuego'}><button className='btn btn-success mb-5'>Agregar Juego</button></Link>
        <Link to={'/verJuegos'}><button className='btn btn-success mb-5'>Ver Juegos</button></Link>
        <Link to={'/agregarCategoria'}><button className='btn btn-success mb-5'>Agregar Categoria</button></Link>
        <Link to={'/verCategorias'}><button className='btn btn-success mb-5'>Ver Categorias</button></Link>
        <Link to={'/verUsuarios'}><button className='btn btn-success mb-5'>Ver Usuarios</button></Link>
      </div>
    </>
  )
}

export default PaginaAdmin