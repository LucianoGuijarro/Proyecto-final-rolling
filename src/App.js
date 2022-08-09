import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Grid from './Components/Grid/Grid';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import PaginadeError from './Pages/PaginadeError';


function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
   <Routes>
     <Route path="/Home" element={<Home />}/>
     <Route  path="/Error404" element={<PaginadeError />}/>
   </Routes>
   <Footer />
   <Grid />
   </BrowserRouter>
    
    
  );
}

export default App;
