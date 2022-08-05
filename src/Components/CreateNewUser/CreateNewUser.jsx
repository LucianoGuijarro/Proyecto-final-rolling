import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
// import css
import './CreateNewUser.css';

const CreateNewUser = () => {
  const [newUserData, setNewUserData] = useState({
    "correoUser": "",
    "nickNameUser": "",
    "passwordUser": "",
    "countryUser": ""
  })
  const [confirmPasword, setConfirmPasword] = useState("")
  const [errors, setErrors] = useState({
    "correoUser": "*Este campo es obligatorio*",
    "nickNameUser": "*Este campo es obligatorio*",
    "passwordUser": "*Este campo es obligatorio*",
    "confirmPassword": "Las contraseñas deben ser iguales",
    "countryUser": "*Este campo es obligatorio*"
  })
  const [loading, setLoading] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  // const [response, setResponse] = useState(null)

  const handleChange = ({ target }) => {
    setNewUserData({
      ...newUserData,
      [target.name]: target.value
    })
    // console.log(newUserData)
  }
  // metodo post
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (Object.keys(errors).length === 0) {
      setLoading(true)
      fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(newUserData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => {
          if(response.status !== 201){
            return alert('Ha ocurrido un error,verifique la informacion')
          }
          return response.json()
        })
        .then((response) => {
          console.log(response)
          setLoading(false)
          e.target.reset()
          alert(response)
          setUserCreated(true)
          //aca deberia llevarte a la ruta de Login
        })
        .catch(error => console.log(error))
    } else alert("Hay campos incompletos")
  }

  const handleBlur = ({ target }) => {
    handleChange({ target })
    setErrors(validateForm(newUserData))
  }

  const validateForm = () => {
    let errores = {}
    const emailValidation = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const passwordValidation = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

    if (!newUserData.correoUser.trim()) {
      errores.correoUser = "*Este Campo es obligatorio*"
    } else
      if (!emailValidation.test(newUserData.correoUser.trim())) {
        errores.correoUser = "El email ingresado es incorrecto"
      }

    if (!newUserData.nickNameUser) {
      errores.nickNameUser = "*Este campo es obligatorio*"
    }

    if (!newUserData.passwordUser.trim()) {
      errores.passwordUser = "*Este Campo es obligatorio*"
    } else if (!passwordValidation.test(newUserData.passwordUser.trim())) {
      errores.passwordUser = "Ingrese entre 8 y 16 caracteres, minusculas, mayusculas y digitos"
    }

    if (newUserData.passwordUser !== confirmPasword) {
      errores.confirmPassword = "Las contraseñas no coinciden"
      console.log("valido confirm");
    }
    if (!newUserData.countryUser) {
      errores.countryUser = "*Este campo es obligatorio*"
    }
    return errores
  }

  return (
    <>
      {
        loading ?
          <div className="text-center pt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div className="container col-6 form-styles p-4 align-items-center">
            <h5 className="py-3 ">CREAR TU NUEVA CUENTA</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="NewUserInputEmail1" className="form-label">Correo electronico</label>
                <input type="email" onChange={handleChange} onBlur={handleBlur} name='correoUser' className="form-control" id="NewUserInputEmail1" aria-describedby="emailHelp" />
                {errors.correoUser ? <p className='text-danger m-0'>{errors.correoUser}</p> : null}
              </div>
              <div className="mb-2">
                <label htmlFor="nickNameUser" className="form-label">Nick Name</label>
                <input type="text" onChange={handleChange} onBlur={handleBlur} name='nickNameUser' className="form-control" id="nickNameUser" aria-describedby="nickNameUser" />
                {errors.nickNameUser ? <p className='text-danger m-0'>{errors.nickNameUser}</p> : null}
              </div>
              <div className="mb-2">
                <label htmlFor="newUserInputPassword" className="form-label">Contraseña</label>
                <input type="text" onChange={handleChange} onBlur={handleBlur} name='passwordUser' className="form-control" id="newUserInputPassword" />
                {errors.passwordUser ? <p className='text-danger py-0'>{errors.passwordUser}</p> : null}
              </div>
              <div className="mb-2">
                <label htmlFor="newUserPasswordConfirm" className="form-label">Confirmar Contraseña</label>
                <input type="text" onChange={event => setConfirmPasword(event.target.value)} onBlur={handleBlur} className="form-control" id="newUserPasswordConfirm" />
                {errors.confirmPassword ? <p className='text-danger m-0'>{errors.confirmPassword}</p> : null}
              </div>
              <div className="mb-2">
                <label htmlFor="userCountry" className="form-label">Pais de residencia</label>
                <input type="text" onChange={handleChange} onBlur={handleBlur} name='countryUser' className="form-control" id="userCountry" />
                {errors.countryUser ? <p className='text-danger m-0'>{errors.countryUser}</p> : null}
              </div>
              <div className="mb-2 form-check">
                <input type="checkbox" className="form-check-input" id="checkConditions" />
                <label className="form-check-label" htmlFor="checkConditions">Confirmo que tengo 13 años o mas y acepto los terminos y condiciones</label>
              </div>
              {userCreated ?  <Navigate to="/Login" /> : null}
              <button type="submit" className="btn btn-crear-cuenta container-fluid">Crear Cuenta</button>
            </form>
          </div>
      }
    </>
  )
}

export default CreateNewUser