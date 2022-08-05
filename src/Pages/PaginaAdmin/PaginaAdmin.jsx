import React from 'react'
import { Link } from 'react-router-dom'

const PaginaAdmin = () => {
  return (
    <>
    <Link to={'/agregarJuego'}><button className='btn btn-success'>Agregar Juego</button></Link>
    <Link to={'/verJuegos'}><button className='btn btn-success'>Ver Juegos</button></Link>
    <Link to={'/agregarCategoria'}><button className='btn btn-success'>Agregar Categoria</button></Link>
    <Link to={'/verCategorias'}><button className='btn btn-success'>Ver Categorias</button></Link>
    </>
  )
}

export default PaginaAdmin