import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../assets/css/Contacto.css';

const Contacto = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_01pgmtr', 'template_zjzormv', e.target, 'JLl5GsaakN1czhdiV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }

  return (
    <Container className="contacto-container" id='contacto'>
      <h1 className="text-center">Contacto</h1>
      <Form onSubmit={sendEmail}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" name="nombre" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" name="email" required />
        </Form.Group>

        <Form.Group controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" name="mensaje" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contacto;
