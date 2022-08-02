import React,{ useState } from 'react'
// import css
import '../Login/Login.css';

const Login = () => {
  const [newUserData, setNewUserData] = useState({
    "userName": "",
    "paswordUser":"",
    "countryUser":""
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange=( {target} )=>{
    // console.log(target.value)
    setNewUserData({
      ...newUserData,
      [target.name]: target.value
    })
  }
  // metodo post
  const handleSubmit= async (e)=>{
    e.preventDefault()
    fetch('http://localhost:8080/users',{
      method:'POST',
      body: JSON.stringify(newUserData),
      headers:{
        'Content-type':'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then((response)=>{
      console.log(response)
    })
    .catch(error => console.log(error))

    e.target.reset()
  }
  return (
    <div className="container col-4 form-styles p-4 align-items-center">
      <h5 className="py-3 ">CREAR TU NUEVA CUENTA</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="NewUserInputEmail1" name='userName' className="form-label">Correo electronico</label>
          <input type="email" onChange={handleChange} className="form-control" id="NewUserInputEmail1" aria-describedby="emailHelp" />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="newUserInputPassword"  name='paswordUser' className="form-label">Contraseña</label>
          <input type="password" onChange={handleChange} className="form-control" id="newUserInputPassword" />
        </div>
        <div className="mb-3">
          <label htmlFor="newUserPasswordConfirm" className="form-label">Confirmar Contraseña</label>
          <input type="password" onChange={handleChange} className="form-control" id="newUserPasswordConfirm" />
        </div>
        <div className="mb-3">
          <label htmlFor="userCountry" name='countryUser' className="form-label">Pais de residencia</label>
          <input type="text" onChange={handleChange} className="form-control" id="userCountry" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="checkConditions" />
          <label className="form-check-label" for="checkConditions">Confirmo que tengo 13 años o mas y acepto los terminos y condiciones</label>
        </div>
        <button type="submit" className="btn btn-crear-cuenta container-fluid">Crear Cuenta</button>
      </form>
    </div>
  )
}

export default Login