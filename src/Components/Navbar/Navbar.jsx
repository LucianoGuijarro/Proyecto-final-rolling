import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Buscador from "../Buscador/Buscador";

function Navbar({ rol, flag, setFlag }) {
  const eliminandoLocalStorage = () => {
    localStorage.clear()
    setFlag(!flag)
  }
  // const [nickNameStorage, setNickNameStorage] = useState()
  // const any = localStorage.getItem('nickName')
  // setNickNameStorage(localStorage.getItem('nickName'))

  // setNickNameStorage(any)
  // console.log(any);
  // console.log(nickNameStorage);

  // console.log(localStorage.getItem("nickName"))

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          {" "}
          <img
            src="./logo2.png"
            className={`${styles.img} d-block w-100`}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`${styles.text} nav-link active text-white`}
                aria-current="page"
                to="/"
              >
                INICIO
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`${styles.text} nav-link dropdown-toggle text`}
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIAS
              </Link>
              <ul
                className={`${styles.bgColorDropdown} dropdown-menu `}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    className={`${styles.text} dropdown-item`}
                    to="/categoria/accion"
                  >
                    Accion
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.text} dropdown-item`}
                    to="/categoria/aventura"
                  >
                    Aventura
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.text} dropdown-item`}
                    to="/categoria/deportes"
                  >
                    Deportes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav d-flex justify-content-end align-items-center col-6">
            <Buscador />
            {localStorage.getItem("nickName") != null ? (
              // nickNameStorage == null
              <>
                <li className="nav-item">
                  <div className="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      className="btn dropdown-toggle text-white"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      User: {localStorage.getItem("nickName")}
                    </button>
                    <ul
                      className={`dropdown-menu ${styles.bgColorDropdown}`}
                      aria-labelledby="btnGroupDrop1"
                    >
                      {/* <li><button className={`{styles.text} dropdown-item text-white`} href="/">Perfil</button></li> */}
                      <li>
                        <li><button className={`{styles.text} dropdown-item text-white`} onClick={() => eliminandoLocalStorage()} href="/">Cerrar sesion</button></li>
                      </li>
                      <li>
                        {" "}
                        {rol === "admin" ? (
                          <li>
                            <Link
                              to={"/admin"}
                              className={`${styles.text} dropdown-item text-white`}
                            >
                              Admin
                            </Link>
                          </li>
                        ) : (
                          false
                        )}
                      </li>
                      {/* <li><a className={`{styles.text} dropdown-item text-white`} href="/">Dropdown link</a></li> */}
                    </ul>
                  </div>
                  {/* <button type="button" className={`btn px-1 py-1  me-2`}>
                    
                      <Link className={`${styles.text} nav-link active text-white`} aria-current="page" to='/login'>User: {localStorage.getItem("nickName")}</Link>
                    </button> */}
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    type="button"
                    className={`btn px-1 py-1 ${styles.butonIniciar} me-2`}
                  >
                    <Link
                      className={`${styles.text} nav-link active text-white`}
                      aria-current="page"
                      to="/login"
                    >
                      Iniciar Sesion
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={`btn px-1 py-1  ${styles.buton}`}
                  >
                    <Link
                      className={`${styles.text} nav-link active text-white`}
                      aria-current="page"
                      to="/createNewUser"
                    >
                      Registrate
                    </Link>
                  </button>
                </li>
              </>
            )
            }
          </ul >
        </div >
      </div >
    </nav >
  );
}

export default Navbar;
