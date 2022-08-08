import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import styles from '../Login/Login.module.css';

const Login = ({flag, setFlag}) => {
  const [userInit, setUserInit] = useState({
    "correoUser": "",
    "passwordUser": ""
  })
  const [isLoged, setIsLoged] = useState(false)
  // const [nickName, setNickName] = useState()
  // hacer un post y la logica de logue se hace en el back
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch('https://nawen-games-backend.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify(userInit),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response=> {
      if(response.status !== 200){
        return alert('El usuario o la contraseña ingresados no son correctos')
      }
      // console.log(response)
      return response.json()
    })
    .then(response =>{
      e.target.reset()
      // setNickName(response.nickName)
      setIsLoged(true)
      setFlag(!flag)
      localStorage.setItem("token",`${response.token}`)
      localStorage.setItem("nickName",`${response.nickName}`)
      localStorage.setItem('rol', `${response.rol}`)
      alert(`Bienvenido/a ${ response.nickName}`)
    } )
  }
  const handleChange = ({ target }) => {
    setUserInit({
      ...userInit,
      [target.name]: target.value
    })
  }
  return (
    <div className={`${styles.formStyles} container col-sm-12 col-md-6 col-lg-6  p-4 mt-5 align-items-center mb-5`}>
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
        <button type="submit" className={`btn ${styles.btnIniciarSesion} container-fluid mt-3`}>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default Login