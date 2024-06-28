import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import RegisterUser from './components/RegisterUser';
import RegisterProvider from './components/RegisterProvider';
import Login from './components/Login';
import HomeProveedores from './pages/HomeProveedores';
import MisServicios from './pages/MisServicios';
import CrearServicio from './components/CrearServicio';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/register" element={<RegisterUser setUser={setUser} />} />
        <Route path="/register-provider" element={<RegisterProvider setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/home-proveedores" element={<HomeProveedores user={user} setUser={setUser} />} />
        <Route path="/crear-servicio" component={CrearServicio} />
      <Route path="/mis-servicios" component={MisServicios} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
