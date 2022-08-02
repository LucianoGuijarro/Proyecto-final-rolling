import './App.css';
import Grid from './Components/Grid/Grid';

function App() {
  return (
    <BrowserRouter>
    <Navbar/> 
    <Grid />
   <Routes>
     <Route path="/" element={<Home />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    
    
  );
}

export default App;
