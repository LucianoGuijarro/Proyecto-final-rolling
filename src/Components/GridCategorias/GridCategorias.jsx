import React, { useEffect, useState } from 'react'
import clientAxios from '../../Config/clientAxios';
import Grid from '../Grid/Grid';

const GridCategorias = () => {
  const [categoria, setCategoria] = useState([]);
  useEffect (() => {
    clientAxios.get('/categorias/verCategorias')
    .then(response => setCategoria(response.data))
  }, [])
  return (
    <>
    {
      categoria.map(categoria =>  <Grid categoria={categoria.nombre} key={categoria._id}/>)
    }
    </>
  )
}

export default GridCategorias;