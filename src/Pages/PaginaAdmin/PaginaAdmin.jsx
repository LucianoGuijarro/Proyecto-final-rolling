import React from 'react'
import { Link } from 'react-router-dom'

const PaginaAdmin = () => {
  return (
    <>
      <h1 className='text-light text-center mt-5'>¿Que tarea quieres realizar?</h1>
      <div className="container vh-100 d-flex flex-column align-items-center">
        <Link to={'/agregarJuego'}><button className='btn btn-success'>Agregar Juego</button></Link>
        <Link to={'/verJuegos'}><button className='btn btn-success'>Ver Juegos</button></Link>
        <Link to={'/agregarCategoria'}><button className='btn btn-success'>Agregar Categoria</button></Link>
        <Link to={'/verCategorias'}><button className='btn btn-success'>Ver Categorias</button></Link>
      </div>
    </>
  )
}

export default PaginaAdmin