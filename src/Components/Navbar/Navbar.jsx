import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to=''> <img src="./logo2.png" className={`${styles.img} d-block w-100`} alt="Logo" /></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`${styles.text} nav-link active text-white`} aria-current="page" to='/'>INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles.text} nav-link active text-white`} aria-current="page" to='/'>COMUNIDAD</Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles.text} nav-link active text-white`} aria-current="page" to='/'>SOPORTE</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className={`${styles.text} nav-link dropdown-toggle text`} to='/' id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORIAS
              </Link>
              <ul className={`${styles.bgColorDropdown} dropdown-menu `} aria-labelledby="navbarDropdown">
                <li><Link className={`${styles.text} dropdown-item`} to='/'>Accion</Link></li>
                <li><Link className={`${styles.text} dropdown-item`} to='/'>carreras</Link></li>
                <li><Link className={`${styles.text} dropdown-item`} to='/'>Aventura</Link></li>
                <li><Link className={`${styles.text} dropdown-item`} to='/'>Deportes</Link></li>
                <li><Link className={`${styles.text} dropdown-item`} to='/'>Mas</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav me-auto">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
              className="bi bi-cart3" viewBox="0 0 16 16">
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg> */}
            <li className="nav-item">
              <button type="button" class={`btn px-1 py-1 ${styles.butonIniciar} me-2`}>
                <Link className={`${styles.text} nav-link active text-white`} aria-current="page" to='/login'>Iniciar Sesion</Link>
              </button>
            </li>
            <li className="nav-item">
            <button type="button" class={`btn px-1 py-1  ${styles.buton}`}>
              <Link className={`${styles.text} nav-link active text-white`} aria-current="page" to='/createNewUser'>Registrate</Link>
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar