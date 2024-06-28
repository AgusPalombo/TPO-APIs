import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Login.css';
import logo from '../assets/images/Logo.png';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
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
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      const user = response.data.user;
      console.log('User logged in:', user); 
      setUser(user);
      if (user.isProvider) {
        navigate('/home-proveedores');
      } else {
        navigate('/');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
};

  return (
    <Container fluid className="login-container">
      <Row className="align-items-center min-vh-100">
        <Col md={{ span: 6, offset: 3 }} className="d-flex flex-column justify-content-center align-items-center">
          <Link to="/" className="logo-link mb-4">
            <img src={logo} alt="Woofly Logo" className="logo" />
          </Link>
          <div className="login-box">
            <div className="text-center mb-4">
              <h2 className="title">Iniciar sesión en <span className="highlight">Woofly</span></h2>
              <p className="subtitle">Bienvenido de nuevo, por favor ingresa tus datos</p>
            </div>
            <Form onSubmit={handleSubmit}>
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
              {error && <Alert variant="danger">{error}</Alert>}
              <Button type="submit" className="w-100 custom-button">
                Iniciar sesión
              </Button>
            </Form>
            <div className="mt-4 text-center">
              <p className="small-text">¿No tienes una cuenta? <Link to="/register" className="link">Regístrate aquí</Link></p>
              <p className="small-text">¿Eres un proveedor? <Link to="/register-provider" className="link">Regístrate aquí</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
