import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import VerTodos from './Pages/VerTodo/VerTodos';
import PaginaDetalle from './Pages/PaginaDetalle/PaginaDetalle.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/categoria/:categoria' element={<VerTodos />} />
      <Route path='/verJuego/:id' element={< PaginaDetalle />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
