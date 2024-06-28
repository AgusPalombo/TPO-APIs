import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Servicios.css';

const Servicios = () => {
  return (
    <Container className="services-container">
      <h1 className="text-center title">Nuestros Servicios</h1>
      <p className="text-center title">
        Contamos con una amplia gama de servicios para brindarles una mejor calidad de vida a tus mascotas
      </p>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body className="card-body service-card">
              <Card.Title className="services-title">Petsitting</Card.Title>
              <Card.Text className='services-text'>
                ¡Ahora puedes viajar tranquilo! De tus mascotas se encarga <span className="highlight">Woofly</span>
              </Card.Text>
              <Button className="service-button">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body className="card-body service-card">
              <Card.Title className="services-title">Baños</Card.Title>
              <Card.Text className='services-text'>
                Deja su diversión en manos de <span className="highlight">Woofly</span>. Tus mascotas más sociables y relajadas.
              </Card.Text>
              <Button className="service-button">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body className="card-body service-card">
              <Card.Title className="services-title">Paseos</Card.Title>
              <Card.Text className='services-text'>
                Deja su diversión en manos de <span className="highlight">Woofly</span>. Tus mascotas más sociables y relajadas.
              </Card.Text>
              <Button className="service-button">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card className="service-card">
            <Card.Body className="card-body service-card">
              <Card.Title className="services-title">Adiestramiento</Card.Title>
              <Card.Text className='services-text'>
                Entrenamiento personalizado para mejorar el comportamiento de tu mascota.
              </Card.Text>
              <Button className="service-button">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
