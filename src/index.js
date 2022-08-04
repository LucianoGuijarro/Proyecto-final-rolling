import React from 'react';
import ReactDOM from 'react-dom/client';
// import components
import App from './App';
// import pages
import CreateNewUserPage from './Components/Pages/CreateNewUserPage'
import LoginPage from './Components/Pages/LoginPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/CreateNewUser' element={ <CreateNewUserPage /> } />
      <Route path='/LogIn' element={ <LoginPage /> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
