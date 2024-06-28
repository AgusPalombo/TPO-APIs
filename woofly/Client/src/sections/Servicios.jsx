import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../assets/css/Servicios.css';

const Servicios = () => {
  const services = [
    {
      title: "Petsitting",
      text: "¡Ahora puedes viajar tranquilo! De tu mascota se encarga Woofly.",
    },
    {
      title: "Baños",
      text: "Deja su diversión en manos de Woofly, para mascotas más sociables y responsables.",
    },
    {
      title: "Paseos",
      text: "Deja su diversión en manos de Woofly, para mascotas más sociables y responsables.",
    },
    {
      title: "Adiestramiento",
      text: "Entrenamiento personalizado para mejorar el comportamiento de tu mascota.",
    },
  ];

  return (
      <div className="servicios-container">
      {services.map((service, index) => (
        <div className="servicio-card" key={index}>
          <Card.Body>
            <Card.Title>{service.title}</Card.Title>
            <Card.Text>{service.text}</Card.Text>
            <Button>Ver más</Button>
          </Card.Body>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
