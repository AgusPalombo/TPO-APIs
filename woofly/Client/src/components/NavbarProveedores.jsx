import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/Logo.png'
import '../assets/css/NavbarProvider.css';

const NavbarProveedores = ({ user, setUser }) => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      setUser(null);
      navigate('/');
    };
  
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="custom-navbar">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="65"
            height="65"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/mis-servicios" className="nav-item-padding">Mis servicios</Nav.Link>
            <Nav.Link as={Link} to="/comentarios" className="nav-item-padding">Comentarios</Nav.Link>
            <Nav.Link as={Link} to="/peticiones" className="nav-item-padding">Peticiones</Nav.Link>
          </Nav>
          {user ? (
            <Nav>
              <NavDropdown title={user.name} id="collasible-nav-dropdown" className="custom-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login" className="btn btn-outline-custom">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default NavbarProveedores;
