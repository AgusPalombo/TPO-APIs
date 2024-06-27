import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Servicios.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const query = useQuery();

  useEffect(() => {
    const fetchResults = async () => {
      const searchQuery = query.get('q');
      const response = await axios.get(`/api/search?q=${searchQuery}`);
      setResults(response.data);
    };
    fetchResults();
  }, [query]);

  return (
    <Container className="services-container">
      <h2 className="text-center services-title">Resultados de la búsqueda</h2>
      <Row className="justify-content-center">
        {results.map(service => (
          <Col xs={12} md={6} lg={3} key={service._id}>
            <Card className="service-card fondo">
              <Card.Body>
                <Card.Title className="services-title">{service.name}</Card.Title>
                <Card.Text className='services-text'>
                  {service.description}
                </Card.Text>
                <Button variant="primary" className="service-button">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
