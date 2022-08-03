import React, { useState } from 'react'
import './Login.css';

const Login = () => {
  const [userInit, setUserInit] = useState({
    "emailUser": "",
    "passwordUser": ""
  })

  // const [userData, setUserData] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  // hacer un post y la logica de logue se hace en el back
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/Login/logearse', {
      method: 'POST',
      body: JSON.stringify(userInit),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response=> response.json())
    .then(response =>
       console.log(response)
       
       )
  }

  const handleChange = ({ target }) => {
    setUserInit({
      ...userInit,
      [target.name]: target.value
    })
    console.log(target.value);
  }



  return (
    <div className="container col-6 form-styles p-4 mt-5 align-items-center">
      <h5 className="py-3 ">INICIAR SESION</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="emailUser" className="form-label">Correo electronico</label>
          <input type="email" onChange={handleChange} name='emailUser' className="form-control" id="emailUser" aria-describedby="emailHelp" />
        </div>

        <div className="mb-2">
          <label htmlFor="passwordUser" className="form-label">Contraseña</label>
          <input type="password" onChange={handleChange} name='passwordUser' className="form-control" id="passwordUser" />
        </div>
        <button type="submit" className="btn btn-iniciar-sesion container-fluid mt-3">Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default Login