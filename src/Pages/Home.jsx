import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Seccion from '../Components/seccion1/Seccion';


function Home() {
    return (
        <BrowserRouter>
        <Carousel/>
        <Seccion />
        </BrowserRouter>
    )
}

export default Home;