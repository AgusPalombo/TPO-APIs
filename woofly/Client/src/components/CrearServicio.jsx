import React, { useState } from 'react';
import axios from 'axios';
import NavbarProveedores from '../components/NavbarProveedores';
import '../assets/css/CrearServicio.css';

const CrearServicio = ({ user }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('baños');
  const [duration, setDuration] = useState('una semana');
  const [frequency, setFrequency] = useState('diario');
  const [cost, setCost] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/services/create', {
        providerId: user._id,
        name,
        category,
        duration,
        frequency,
        cost
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error creating service');
    }
  };

  return (
    <div className="crear-servicio">
      <NavbarProveedores user={user} />
      <form className="crear-servicio-form" onSubmit={handleSubmit}>
        <h2>Crear Servicio</h2>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="baños">Baños</option>
          <option value="petsitting">Petsitting</option>
          <option value="adiestramiento">Adiestramiento</option>
          <option value="paseo">Paseo</option>
        </select>
        <select value={duration} onChange={(e) => setDuration(e.target.value)} required>
          <option value="una semana">Una semana</option>
          <option value="dos semanas">Dos semanas</option>
          <option value="tres semanas">Tres semanas</option>
          <option value="un mes">Un mes</option>
        </select>
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)} required>
          <option value="diario">Diario</option>
          <option value="dia por medio">Día por medio</option>
          <option value="semanal">Semanal</option>
        </select>
        <input type="number" placeholder="Costo" value={cost} onChange={(e) => setCost(e.target.value)} required />
        <button type="submit">Publicar</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default CrearServicio;
