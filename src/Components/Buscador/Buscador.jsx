import React from 'react'
import styles from '../Buscador/Buscador.module.css'

const Buscador = () => {
  const handleChange = () => {

  }

  return (
    <div className={`mb-3 container mt-4 d-flex col-6 `}>
      <input type="text" className="form-control col-2" placeholder="Buscar Juego" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <button type="button" className={`${styles.buton} px-2 ms-4`}>Buscar</button>
    </div>
  )
}

export default Buscador