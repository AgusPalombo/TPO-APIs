import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarProveedores from './NavbarProveedores';
import '../assets/css/CrearServicio.css'; // Asegúrate de importar los estilos

const CrearServicio = ({ user }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    duracion: '',
    frecuencia: '',
    costo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/services', { ...formData, providerEmail: user.email });
      navigate('/mis-servicios');
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  return (
    <>
      <NavbarProveedores user={user} />
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h2 className="text-center mb-4">Crear Servicio</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Categoría</label>
                  <select
                    className="form-control"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar categoría</option>
                    <option value="baños">Baños</option>
                    <option value="petsitting">Petsitting</option>
                    <option value="adiestramiento">Adiestramiento</option>
                    <option value="paseo">Paseo</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label>Duración</label>
                  <select
                    className="form-control"
                    name="duracion"
                    value={formData.duracion}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar duración</option>
                    <option value="una semana">Una semana</option>
                    <option value="dos semanas">Dos semanas</option>
                    <option value="tres semanas">Tres semanas</option>
                    <option value="un mes">Un mes</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label>Frecuencia</label>
                  <select
                    className="form-control"
                    name="frecuencia"
                    value={formData.frecuencia}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar frecuencia</option>
                    <option value="diario">Diario</option>
                    <option value="dia por medio">Día por medio</option>
                    <option value="semanal">Semanal</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label>Costo</label>
                  <input
                    type="number"
                    className="form-control"
                    name="costo"
                    value={formData.costo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Publicar Servicio</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearServicio;