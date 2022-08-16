import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import clientAxios from '../../Config/clientAxios';
import styles from '../Login/Login.module.css';

const Login = ({ flag, setFlag }) => {
  const [userInit, setUserInit] = useState({
    correoUser: "",
    passwordUser: ""
  })
  const [isLoged, setIsLoged] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    clientAxios.post('/login', userInit)
      .then(response => {
        if (response.status === 401) {
          return alert('El usuario o la contraseña ingresados no son correctos')
        } else if (response.status === 400) {
          return alert('No tiene autorizacion para logearse')
        } else {
          e.target.reset()
          setIsLoged(true)
          setFlag(!flag)
          localStorage.setItem("token", `${response.data.token}`)
          localStorage.setItem("nickName", `${response.data.nickName}`)
          localStorage.setItem('rol', `${response.data.rol}`)
          alert(`Bienvenido/a ${response.data.nickName}`)
        }
      })
      .catch(error => {
        console.log(error)
      })
      .catch(error =>{console.log(error)})
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
        {isLoged ? <Navigate to={"/"} /> : false}
        <button type="submit" className={`btn ${styles.btnIniciarSesion} container-fluid mt-3`}>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default Login