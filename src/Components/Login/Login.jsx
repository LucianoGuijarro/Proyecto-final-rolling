import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [userInit, setUserInit] = useState({
    "correoUser": "",
    "passwordUser": ""
  })
  const [isLoged, setIsLoged] = useState(false)

  // hacer un post y la logica de logue se hace en el back
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(userInit),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response=> {
      if(response.status !== 200){
        return alert('Ha ocurrido un error, verifique la informacion')
      }
      return response.json()
    })
    .then(response =>{
      e.target.reset()
      setIsLoged(true)
      alert("Usuario Logueado")
      console.log(response)
    } )
  }

  const handleChange = ({ target }) => {
    setUserInit({
      ...userInit,
      [target.name]: target.value
    })
    console.log(target.value);
  }



  return (
    <div className={`container ${styles.form-styles} col-6  p-4 mt-5 align-items-center`}>
      <h5 className="py-3 ">INICIAR SESION</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="correoUser" className="form-label">Correo electronico</label>
          <input type="email" onChange={handleChange} name='correoUser' className="form-control" id="emailUser" aria-describedby="emailHelp" />
        </div>

        <div className="mb-2">
          <label htmlFor="passwordUser" className="form-label">Contraseña</label>
          <input type="password" onChange={handleChange} name='passwordUser' className="form-control" id="passwordUser" />
        </div>
        {isLoged ? <Navigate to={"/"} /> : false }
        <button type="submit" className={`btn ${'btn-iniciar-sesion'} container-fluid mt-3`}>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default Login