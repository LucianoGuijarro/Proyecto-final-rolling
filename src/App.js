import './App.css';
import Grid from './Components/Grid/Grid';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/> 
   <Routes>
     <Route path="/" element={<Home />}/>
   </Routes>
   <Footer/>
   <Grid />
   </BrowserRouter>
    
    
  );
}

export default App;
