import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Navbar.css';
import logo from '../assets/images/Logo.png';

const MyNavbar = ({ user, setUser }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const handleUserIconClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <Navbar fixed="top" bg="custom" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#principal">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown" className="custom-dropdown nav-item-padding">
              <NavDropdown.Item href="#action/3.1">Petsitting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Baños</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Adiestramiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Paseos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#nosotros" className="nav-item-padding">Nosotros</Nav.Link>
            <Nav.Link href="#contacto" className="nav-item-padding">Contacto</Nav.Link>
            <Form className="d-flex nav-item-padding" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button type="submit" variant="outline-custom">Buscar</Button>
            </Form>
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#services-contracted">Servicios Contratados</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link onClick={handleUserIconClick}>
                <FontAwesomeIcon icon={faUser} className="user-icon" />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
