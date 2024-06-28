import React from 'react';
import NavbarProveedores from '../components/NavbarProveedores';
import '../assets/css/HomeProveedores.css';

const HomeProveedores = ({ user, setUser }) => {
  return (
    <div className="home-proveedores">
    <NavbarProveedores user={user} setUser={setUser} />
      <div className="welcome-section">
        <h1 className="welcome-title">Bienvenid@ {user?.name}</h1>
        <p className="welcome-subtitle">Portal proveedores de servicios</p>
      </div>
    </div>
  );
};

export default HomeProveedores;
