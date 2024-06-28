import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/RegisterUser.css';
import logo from '../assets/images/Logo.png';

const petTypes = [
  'Perro',
  'Gato',
  'Ave',
  'Conejo',
  'Reptil',
  'Pez',
  'Roedor',
  'Otro'
];

const RegisterUser = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    pets: [{ type: '', quantity: '' }]
  });
  const [emailExists, setEmailExists] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePetChange = (index, e) => {
    const newPets = formData.pets.map((pet, i) => {
      if (i === index) {
        return { ...pet, [e.target.name]: e.target.value };
      }
      return pet;
    });
    setFormData({ ...formData, pets: newPets });
  };

  const addPet = () => {
    setFormData({ ...formData, pets: [...formData.pets, { type: '', quantity: '' }] });
  };

  const removePet = (index) => {
    const newPets = formData.pets.filter((pet, i) => i !== index);
    setFormData({ ...formData, pets: newPets });
  };

  const handleEmailBlur = async () => {
    try {
      const response = await axios.post('/api/auth/check-email', { email: formData.email });
      setEmailExists(response.data.exists);
    } catch (error) {
      console.error('Error checking email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailExists) {
      setError('El email ya está en uso.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      setError('Error registering user');
      console.error('Error registering user:', error);
    }
  };

  return (
    <Container fluid className="register-container">
      <Row className="align-items-center min-vh-100">
        <Col md={{ span: 6, offset: 3 }} className="d-flex flex-column justify-content-center align-items-center">
          <Link to="/" className="logo-link mb-4">
            <img src={logo} alt="Woofly Logo" className="logo" />
          </Link>
          <div className="register-box">
            <div className="text-center mb-4">
              <h2 className="title">Registrate en <span className="highlight">Woofly</span></h2>
              <p className="subtitle">Únete a la mejor opción para tus hijos de cuatro patas</p>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFirstName" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Apellido"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                  required
                />
                {emailExists && <Alert variant="danger">El email ya está en uso.</Alert>}
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirmar contraseña"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Teléfono"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAddress" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Dirección"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {formData.pets.map((pet, index) => (
                <Row key={index} className="mb-3">
                  <Col md={5}>
                    <Form.Control
                      as="select"
                      name="type"
                      value={pet.type}
                      onChange={(e) => handlePetChange(index, e)}
                      required
                    >
                      <option value="">Seleccionar tipo de mascota</option>
                      {petTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={5}>
                    <Form.Control
                      type="number"
                      placeholder="Cantidad"
                      name="quantity"
                      value={pet.quantity}
                      onChange={(e) => handlePetChange(index, e)}
                      required
                    />
                  </Col>
                  <Col md={2} className="d-flex align-items-center">
                    <Button
                      variant="danger"
                      onClick={() => removePet(index)}
                      className="btn-sm custom-remove-button"
                    >
                      &times;
                    </Button>
                  </Col>
                </Row>
              ))}

              <Button variant="outline-secondary" onClick={addPet} className="mb-3">
                Agregar otra mascota
              </Button>

              <Button type="submit" className="w-100 custom-button">
                Registrarse
              </Button>
            </Form>

            <div className="mt-4 text-center">
              <p className="small-text">¿Ya tienes una cuenta? <Link to="/login" className="link">Inicia sesión aquí</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterUser;
