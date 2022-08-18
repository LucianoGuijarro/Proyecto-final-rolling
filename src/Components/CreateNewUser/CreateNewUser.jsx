import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "../CreateNewUser/CreateNewUser.module.css";
import Swal from "sweetalert2";
import clientAxios from "../../Config/clientAxios";
import country from "country-list-js";
import Select from "react-select";


const CreateNewUser = () => {
  const [countrySelect, setCountrySelect] = useState("")
  const navigate = useNavigate();
  const [newUserData, setNewUserData] = useState({
    correoUser: "",
    nickNameUser: "",
    passwordUser: "",
    countryUser: countrySelect,
  });

  const [confirmPasword, setConfirmPasword] = useState("");
  const [errors, setErrors] = useState({
    correoUser: "*Este campo es obligatorio*",
    nickNameUser: "*Este campo es obligatorio*",
    passwordUser: "*Este campo es obligatorio*",
    confirmPassword: "Las contraseñas deben ser iguales",
    countryUser: "*Este campo es obligatorio*",
  });
  const [loading, setLoading] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleChange = ({ target }) => {
    setNewUserData({
      ...newUserData,
      [target.name]: target.value,
    });
    // console.log(target.name);
  };
  
  const countries = country.names().map(nombrePais => {
    let newObject = {
     value: nombrePais,
     label: nombrePais
   }
   return newObject
 })

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      clientAxios
        .post("/users/agregarUsuario", newUserData)
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              icon: "success",
              title: "Usuario creado con exito",
              showConfirmButton: false,
              timer: 1500,
            });
            setUserCreated(true);
            setLoading(false);
            navigate("/login");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Este mail ya esta en uso",
            });
            navigate("./CreateNewUser.jsx");
            setLoading(false);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ha ocurrido un error y el usuario no se creo correcamente",
          });
        });
      e.target.reset();
    } else alert("Hay campos incompletos");
  };

  const handleBlur = ({ target }) => {
    handleChange({ target });
    setErrors(validateForm(newUserData));
  };

  const validateForm = () => {
    let errores = {};
    const emailValidation = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const passwordValidation = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (!newUserData.correoUser.trim()) {
      errores.correoUser = "*Este Campo es obligatorio*";
    } else if (!emailValidation.test(newUserData.correoUser.trim())) {
      errores.correoUser = "El email ingresado es incorrecto";
    }

    if (!newUserData.nickNameUser) {
      errores.nickNameUser = "*Este campo es obligatorio*";
    }

    if (!newUserData.passwordUser.trim()) {
      errores.passwordUser = "*Este Campo es obligatorio*";
    } else if (!passwordValidation.test(newUserData.passwordUser.trim())) {
      errores.passwordUser =
        "Ingrese entre 8 y 16 caracteres, minusculas, mayusculas y digitos";
    }

    if (newUserData.passwordUser !== confirmPasword) {
      errores.confirmPassword = "Las contraseñas no coinciden";
      console.log("valido confirm");
    }
    if (!countrySelect) {
      errores.countryUser = "*Este campo es obligatorio*";
    }
    return errores;
  };
 

  // <div className="d-flex justify-content-center vh-100">
  //   <div className="spinner-border" role="status">
  //     <span className="visually-hidden">Loading...</span>
  //   </div>
  // </div>;


  

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          className={`container col-sm-10 col-md-5 col-6 ${styles.formStyles} p-2 align-items-center`}
        >
          <h5 className="py-3 ">CREAR TU NUEVA CUENTA</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="NewUserInputEmail1" className="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                maxLength={40}
                onChange={handleChange}
                onBlur={handleBlur}
                name="correoUser"
                className="form-control"
                id="NewUserInputEmail1"
                aria-describedby="emailHelp"
              />
              {errors.correoUser ? (
                <p className="text-danger m-0">{errors.correoUser}</p>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="nickNameUser" className="form-label">
                Nick Name
              </label>
              <input
                type="text"
                maxLength={20}
                onChange={handleChange}
                onBlur={handleBlur}
                name="nickNameUser"
                className="form-control"
                id="nickNameUser"
                aria-describedby="nickNameUser"
              />
              {errors.nickNameUser ? (
                <p className="text-danger m-0">{errors.nickNameUser}</p>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="newUserInputPassword" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                maxLength={40}
                onChange={handleChange}
                onBlur={handleBlur}
                name="passwordUser"
                className="form-control"
                id="newUserInputPassword"
              />
              {errors.passwordUser ? (
                <p className="text-danger py-0">{errors.passwordUser}</p>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="newUserPasswordConfirm" className="form-label">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                maxLength={40}
                onChange={(event) => setConfirmPasword(event.target.value)}
                onBlur={handleBlur}
                className="form-control"
                id="newUserPasswordConfirm"
              />
              {errors.confirmPassword ? (
                <p className="text-danger m-0">{errors.confirmPassword}</p>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="userCountry" className="form-label">
                Pais de residencia
              </label>
              {/* <input
                type="text"
                maxLength={20}
                onChange={handleChange}
                onBlur={handleBlur}
                name="countryUser"
                className="form-control"
                id="userCountry"
                data-bs-toggle="dropdown"
              /> */}
              
              <Select
                options={countries}
                name="countryUser"
                onChange={e=>setCountrySelect(e.value)}
                onBlur={handleBlur}
                id="userCountry"
              />
              {errors.countryUser ? (
                <p className="text-danger m-0">{errors.countryUser}</p>
              ) : null}
            </div>
            <div className="mb-2 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkConditions"
                onClick={() => setDisable(!disable)}
              />
              <label className="form-check-label" htmlFor="checkConditions">
                Confirmo que tengo 13 años o mas y acepto los terminos y
                condiciones
              </label>
            </div>
            {userCreated ? <Navigate to="/Login" /> : null}
            <button
              type="submit"
              className={`${styles.btnCreateAcount} btn  container-fluid`}
              disabled={disable}
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateNewUser;
