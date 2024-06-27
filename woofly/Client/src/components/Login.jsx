import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Login.css';
import logo from '../assets/images/Logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí
  };

  return (
    <Container fluid className="login-container">
      <Row className="align-items-center min-vh-100">
        <Col md={{ span: 6, offset: 3 }} className="d-flex flex-column justify-content-center align-items-center">
          <Link to="/" className="mb-4">
            <img src={logo} alt="Woofly Logo" className="logo" />
          </Link>
          <div className="login-box">
            <div className="text-center mb-4">
              <h2 className="title">Iniciar sesion en <span className="highlight">Woofly</span></h2>
              <p className="subtitle">La mejor opción para tus hijos de cuatro patas</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="juanperez@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 custom-button">
                Iniciar sesion
              </Button>
            </Form>

            <div className="mt-4 text-center">
              <p className="small-text">¿No tienes una cuenta? <a href="/register" className="link">Registrate aqui</a></p>
              <p className="small-text">¿Eres proveedor de servicios? <a href="/register-provider" className="link">Registrate aqui</a></p>
              <p className="small-text">¿Olvidaste tu contraseña? <a href="/recover" className="link">Recuperala aqui</a></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
