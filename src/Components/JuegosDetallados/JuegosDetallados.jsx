import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clientAxios from '../../Config/clientAxios';
import styles from './JuegosDetallados.module.css';
import Swal from 'sweetalert2';
import CajaComentarios from '../CajaComentarios/CajaComentarios';

const JuegosDetallados = () => {
  const usuarioLogeado = localStorage.getItem('token');
  const [flag, setFlag] = useState(true)
  const { id } = useParams();
  const [juego, setJuego] = useState([])
  const [comentario, setComentario] = useState({
    usuario: "", juegoPerteneciente: "", contenido: ""
  })
  const [comentarios, setComentarios] = useState([])
  useEffect(() => {
    clientAxios.get(`/juegos/verJuego/${id}`)
      .then(response => setJuego(response.data))
  }, [id]);
  useEffect(() => {
    clientAxios.get(`/comentarios/verComentariosPorJuego/${id}`)
      .then(response => setComentarios(response.data))
  }, [id, flag]);
  const handleForm = (e) => {
    e.preventDefault()
    clientAxios.post('/comentarios/agregarComentario', {
      usuario: localStorage.getItem("nickName"), juegoPerteneciente: id, contenido: comentario.contenido
    }).then(response => {
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Comentario enviado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
      setFlag(!flag)
    })
    e.target.reset()
      .catch(error => {
        if (error.response.status !== 201) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ha ocurrido un error y no se pudo enviar el comentario',
          })
        }
      })
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComentario((prevState) => ({
        ...prevState,
        [name]: value
    }))
}
  const redireccion = () => {
    window.open(juego.paginaCompra)
  }
  return (
    <>
      <div className="container mt-5">
        <div className={`row justify-content-center`}>
          <div className="col-sm-10 col-md-4 col-lg-5 d-flex justify-content-center">
            <img src={juego.portada} className={`${styles.imagen} rounded`} alt={juego.nombre} />
          </div>
          <div className="col-sm-10 col-md-4 col-lg-5 d-flex flex-column">
            <p className='fs-2 text-light'><strong>Titulo:</strong> {juego.nombre}</p>
            <p className='fs-5 text-light'><strong className='fs-4 text-light'>Sinopsis:</strong> {juego.sinopsis}</p>
            <p className='fs-5 text-light'><strong className='fs-4 text-light'>Fecha de lanzamiento:</strong> {juego.fechaLanzamiento}</p>
            <p className='fs-5 text-light'><strong className='fs-4 text-light'>Categoria:</strong> {juego.categoria}</p>
            <p className='fs-5 text-light'><strong className='fs--4 text-light'>Precio:</strong> {`€${juego.precio}`}</p>
            {usuarioLogeado ? <button onClick={() => redireccion()} className='btn btn-success'>Comprar Ahora</button> : false}
          </div>
        </div>
        <div className={`row justify-content-center my-4`}>
          <h2 className='text-light text-center fw-bold my-5'>Trailer Oficial</h2>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <iframe width="560" height="315" className='rounded' src={juego.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </div>
      </div>
      <div className='container shadow'>
        <h3 className='text-light text-center pt-3'>Comentarios</h3>
        {comentarios.map(comentario=>
         <div className='container'>
          <div className='row justify-content-center'><CajaComentarios comentarios={comentario} flag={flag} setFlag={setFlag} /></div>
         </div>)}
        {
          usuarioLogeado ? <form className={`row justify-content-center`} onSubmit={handleForm}>
            <div className='d-flex align-items-center justify-content-center'>
            <div className="form-floating w-50 my-4">
              <textarea className="form-control p-0" id="contenido" onChange={handleChange} name='contenido'></textarea>
              <label htmlFor='contenido'></label>
            </div>
            <button type='submit' className={`${styles.boton} ms-5 px-5 btn btn-success`}>Enviar</button>
            </div>
          </form>
            :
            false
        }
      </div>
    </>
  )
}

export default JuegosDetallados