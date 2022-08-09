import React from 'react';
import { BrowserRouter,} from "react-router-dom";
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