import React from 'react';
import Carousel from '../Components/carousel/carousel';
import GridCategorias from '../Components/GridCategorias/GridCategorias';
// import Seccion from '../Components/seccion1/Seccion';


function Home() {
    return (
        <>
            <Carousel />
            {/* <Seccion /> */}
            <GridCategorias />
        </>
    )
}

export default Home;