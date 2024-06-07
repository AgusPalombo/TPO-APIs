import React from 'react';
import Navbar from '../components/Navbar';
import Principal from '../sections/Principal';
import Nosotros from '../sections/Nosotros';
import Servicios from '../sections/Servicios';
import Contacto from '../sections/Contacto';
import "../assets/css/Home.css"

const Home = () => {
  return (
    <div className='gradient-background'>
      <Navbar />
      <Principal />
      <Servicios />
      <Nosotros />
      <Contacto />
    </div>
  );
};

export default Home;
