import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/MisServicios.css';
import Navbar from '../components/NavbarProveedores';
import '../assets/css/NavbarProvider.css';

const MisServicios = ({ user }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/services/${user.email}`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [user.email]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/services', { ...formData, providerEmail: user.email });
    navigate('/MisServicios');
  } catch (error) {
    console.error('Error creating service:', error);
  }
};

  return (

    <div className="mis-servicios">
    <Navbar />
      <h2>Mis Servicios</h2>
      <button className="crear-servicio-btn" onClick={() => window.location.href = '/CrearServicio'}>Crear Servicio</button>
      <div className="servicios-container">
        {services.map(service => (
          <div className="card" key={service._id}>
            <h3>{service.nombre}</h3>
            <p>Categoría: {service.categoria}</p>
            <p>Duración: {service.duracion}</p>
            <p>Frecuencia: {service.frecuencia}</p>
            <p>Costo: ${service.costo}</p>
            <button className="finalizar-btn" onClick={() => handleDelete(service._id)}>Finalizar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisServicios;
