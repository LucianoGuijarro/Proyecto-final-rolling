import './App.css';
import React from 'react';
// import components
// import App from './App';
// import pages
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import css
import './index.css';
import VerTodos from './Pages/VerTodo/VerTodos';
import PaginaDetalle from './Pages/PaginaDetalle/PaginaDetalle.jsx';
import PaginaAdmin from './Pages/PaginaAdmin/PaginaAdmin';
import AgregarJuego from './Components/AgregarJuego/AgregarJuego';
import VerTodosJuegos from './Components/VerTodosJuegos/VerTodosJuegos';
import AgregarCategoria from './Components/AgregarCategoria/AgregarCategoria';
import CreateNewUserPage from './Pages/CreateNewUserPage.jsx'
import LoginPage from './Pages/LoginPage.jsx';
import VerCategorias from './Components/VerCategorias/VerCategorias';
// import Grid from './Components/Grid/Grid';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import VerUsuarios from './Components/VerUsuarios/VerUsuarios';
import EditarJuego from './Components/EditarJuego/EditarJuego';


function App() {
  const usuarioLogeado = localStorage.getItem('nickName');
  const rolUsuario = localStorage.getItem('rol');
  return (
    <>
      <BrowserRouter>
        <Navbar rol={rolUsuario} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CreateNewUser' element={<CreateNewUserPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/categoria/:categoria' element={<VerTodos />}/>
          <Route path='/verJuego/:id' element={< PaginaDetalle />}/>
          <Route path='/admin' element={ rolUsuario === 'admin' ? (<PaginaAdmin />) : <Navigate to={'/'} />} />
          <Route path='/agregarJuego' element={<AgregarJuego />} />
          <Route path='/verJuegos' element={<VerTodosJuegos />} />
          <Route path='/agregarCategoria' element={<AgregarCategoria />} />
          <Route path='/verCategorias' element={<VerCategorias />} />
          <Route path='/verUsuarios' element={<VerUsuarios />} />
          <Route path='/editarJuego' element={<EditarJuego />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
