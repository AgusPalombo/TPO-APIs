import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/RegisterUser.css';
import logo from '../assets/images/Logo.png';

const petTypes = [
  'Perro',
  'Gato',
  'Ave',
  'Roedor',
  'Reptil',
  'Pez'
];

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    pets: [{ type: '', quantity: '' }]
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
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
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFirstName" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      name="firstName"
                      value={formData.firstName}
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
                  required
                />
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
                  <Col md={6}>
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
                  <Col md={6}>
                    <Form.Control
                      type="number"
                      placeholder="Cantidad"
                      name="quantity"
                      value={pet.quantity}
                      onChange={(e) => handlePetChange(index, e)}
                      required
                    />
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
              <p className="small-text">¿Ya tienes una cuenta? <a href="/login" className="link">Inicia sesión aquí</a></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterUser;
