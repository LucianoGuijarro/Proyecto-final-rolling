import React from 'react';
import ReactDOM from 'react-dom/client';
// import components
import App from './App';
// import pages
import {
  BrowserRouter,
  Routes,
  Route,
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/CreateNewUser' element={ <CreateNewUserPage /> } />
      <Route path='/LogIn' element={ <LoginPage /> } />
      <Route path='/categoria/:categoria' element={<VerTodos />} />
      <Route path='/verJuego/:id' element={< PaginaDetalle />} />
      <Route path='/admin' element={<PaginaAdmin />}/>
      <Route path='/agregarJuego' element={<AgregarJuego />}/>
      <Route path='/verJuegos' element={<VerTodosJuegos />}/>
      <Route path='/agregarCategoria' element={<AgregarCategoria />}/>
      <Route path='/verCategorias' element={<VerCategorias />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
