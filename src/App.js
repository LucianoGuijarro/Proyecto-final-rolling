import './App.css';
// import GridJuegosAccion from './Components/GridJuegosAccion/GridJuegosAccion';
// import GridJuegosAventura from './Components/GridJuegosAventura/GridJuegosAventura';
// import GridJuegosCarreras from './Components/GridJuegosCarreras/GridJuegosCarreras';
import Grid from './Components/Grid/Grid';
import GridCategorias from './Components/GridCategorias/GridCategorias';


function App() {
  // const categorias =  ["accion", "carreras", "aventura", "rpg", "mmorpg"]
  return (
    <>

    {/* {categorias.map(categoria => <Grid categoria={categoria} />)} */}
    <GridCategorias />
    <Grid />
    </>
  );
}

export default App;
