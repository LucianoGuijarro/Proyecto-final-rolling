import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import clientAxios from "../../Config/clientAxios";
import styles from "../Login/Login.module.css";
import Swal from 'sweetalert2';

const Login = ({ flag, setFlag }) => {
  const [userInit, setUserInit] = useState({
    correoUser: "",
    passwordUser: "",
  });
  const [error, setError] = useState({});
  const [isLoged, setIsLoged] = useState(false);

  const [isCorreoOk, setIsCorreoOk] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    clientAxios
      .post("/login", userInit)
      .then((response) => {
        if (response.status === 200) {
          e.target.reset();
          setIsLoged(true);
          setFlag(!flag);
          localStorage.setItem("token", `${response.data.token}`);
          localStorage.setItem("nickName", `${response.data.nickName}`);
          localStorage.setItem("rol", `${response.data.rol}`);
          Swal.fire({
            icon: 'success',
            title: `Bienvenido/a ${response.data.nickName}`,
            showConfirmButton: false,
            timer: 1500
        })
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario o la contraseña no son correctos',
        })
        }
        if(error.response.status === 401) {
          return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario se encuentra suspendido momentaneamente',
        })
        }
      })
  };
  const handleChange = ({ target }) => {
    setUserInit({
      ...userInit,
      [target.name]: target.value,
    });
  };

  const handleBlur = ({ target }) => {
    handleChange({ target });
    const emailValidation = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!userInit.correoUser) {
      setError("");
      setIsCorreoOk(false);

    } else if (!emailValidation.test(userInit.correoUser)) {
      let textError = {};
      textError.errorEmail = "Ingrese un email valido";
      setError(textError);
      setIsCorreoOk(false);

    } else {
      setError("");
      setIsCorreoOk(true);

    }
  };
  return (
    <div
      className={`${styles.formStyles} container col-sm-12 col-md-6 col-lg-6  p-4 mt-5 align-items-center mb-5`}
    >
      <h5 className="py-3 ">INICIAR SESION</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="correoUser" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            onChange={handleChange}
            name="correoUser"
            className="form-control"
            id="emailUser"
            aria-describedby="emailHelp"
            onBlur={handleBlur}
          />
          {error.errorEmail ? <p>{`${error.errorEmail}`}</p> : null}
        </div>
        <div className="mb-2">
          <label htmlFor="passwordUser" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            onChange={handleChange}
            name="passwordUser"
            className="form-control"
            id="passwordUser"
          />
        </div>
        {isLoged ? <Navigate to={"/"} /> : false}
        <button
          type="submit"
          className={`btn ${styles.btnIniciarSesion} container-fluid mt-3`}
          disabled={ !isCorreoOk || !userInit.passwordUser }
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
