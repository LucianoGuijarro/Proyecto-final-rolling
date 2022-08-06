import React from 'react';
import Carousel from '../Components/carousel/carousel';
import GridCategorias from '../Components/GridCategorias/GridCategorias';
import Buscador from '../Components/Buscador/Buscador';
// import Seccion from '../Components/seccion1/Seccion';


function Home() {
    return (
        <>
            <Carousel />
            <Buscador />
            {/* <Seccion /> */}
            <GridCategorias />
        </>
    )
}

export default Home;