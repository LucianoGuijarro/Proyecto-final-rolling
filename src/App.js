import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import VerUsuarios from './Components/VerUsuarios/VerUsuarios';
import PaginaError from './Pages/PaginaError/PaginaError';

function App() {
  const rolUsuario = localStorage.getItem('rol');
  const [flag, setFlag] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Navbar rol={rolUsuario} flag={flag} setFlag={setFlag}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CreateNewUser' element={<CreateNewUserPage />} />
          <Route path='/Login' element={<LoginPage flag={flag} setFlag={setFlag}/>} />
          <Route path='/categoria/:categoria' element={<VerTodos />}/>
          <Route path='/verJuego/:id' element={< PaginaDetalle />}/>
          <Route path='/admin' element={ rolUsuario === 'admin' ? (<PaginaAdmin />) : <Navigate to={'/'} />} />
          <Route path='/agregarJuego' element={ rolUsuario === 'admin' ? (<AgregarJuego />) : <Navigate to={'/'} /> } />
          <Route path='/verJuegos' element={ rolUsuario === 'admin' ?  (<VerTodosJuegos />) : <Navigate to={'/'} /> } />
          <Route path='/agregarCategoria' element={ rolUsuario === 'admin' ? (<AgregarCategoria />) : <Navigate to={'/'} /> } />
          <Route path='/verCategorias' element={ rolUsuario === 'admin' ? (<VerCategorias />) : <Navigate to={'/'} /> } />
          <Route path='/verUsuarios' element={ rolUsuario === 'admin' ? (<VerUsuarios />) : <Navigate to={'/'} />} />
          <Route path='/*' element={<PaginaError />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
