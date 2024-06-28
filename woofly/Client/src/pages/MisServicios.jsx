import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarProveedores from '../components/NavbarProveedores';
import '../assets/css/MisServicios.css';

const MisServicios = ({ user }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/services/${user._id}`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, [user._id]);

  const handleDelete = async (serviceId) => {
    try {
      await axios.delete(`http://localhost:5000/api/services/${serviceId}`);
      setServices(services.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div className="mis-servicios">
      <NavbarProveedores user={user} />
      <div className="mis-servicios-content">
        <h2>Mis Servicios</h2>
        <button onClick={() => window.location.href = '/crear-servicio'}>Crear Servicio</button>
        <div className="services-grid">
          {services.map(service => (
            <div key={service._id} className="service-card">
              <h3>{service.name}</h3>
              <p>Categoría: {service.category}</p>
              <p>Duración: {service.duration}</p>
              <p>Frecuencia: {service.frequency}</p>
              <p>Costo: ${service.cost}</p>
              <button onClick={() => handleDelete(service._id)}>Finalizar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisServicios;
