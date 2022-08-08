import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Carousel from '../Components/carousel/Carousel';




function Home() {
    return (
        <BrowserRouter>
       <Carousel />
       </BrowserRouter>
    )
}

export default Home;