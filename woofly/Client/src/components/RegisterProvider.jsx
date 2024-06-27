import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import '../assets/css/RegisterProvider.css';

const RegisterProvider = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register-provider', formData);
      alert('Provider registered successfully');
    } catch (error) {
      console.error('Error registering provider:', error);
      alert('Error registering provider');
    }
  };

  return (
    <Container className="register-provider-container">
      <h1>Register Provider</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" onChange={handleChange} required />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterProvider;
