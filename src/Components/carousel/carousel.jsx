import React, { useEffect, useState } from 'react';
import clientAxios from '../../Config/clientAxios';
import styles from './carousel.module.css'


function Carousel() {
    const [juegosDestacados, setJuegosDestacados] = useState([]);
    useEffect(() => {
        clientAxios.get('/juegos/verDestacados')
            .then(response => {
                setJuegosDestacados(response.data)
            })
    }, [])
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./carrusel.jpg" className={`${styles.imagen} d-block w-100`} alt="Carousel1" />
                </div>
                {
                    juegosDestacados.map((juego) => {
                        return <div className="carousel-item ">
                            <img src={juego.slider} className={`${styles.imagen} d-block w-100`} alt="Carousel1" />
                        </div>
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
