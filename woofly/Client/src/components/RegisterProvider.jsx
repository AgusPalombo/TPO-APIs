import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/RegisterProvider.css';
import logo from '../assets/images/Logo.png';

const RegisterProvider = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    services: ''
  });
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailBlur = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/check-email', { email: formData.email });
      setEmailExists(response.data.exists);
    } catch (error) {
      console.error('Error checking email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailExists) {
      alert('El email ya está en uso.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/auth/register-provider', formData);
      setUser(response.data.provider);
      navigate('/');
    } catch (error) {
      console.error('Error registering provider:', error);
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
              <h2 className="title">Registrate como Proveedor en <span className="highlight">Woofly</span></h2>
              <p className="subtitle">Únete a la mejor opción para tus servicios de cuidado de mascotas</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

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

export default RegisterProvider;
