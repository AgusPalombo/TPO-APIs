import React from 'react';
import Principal from '../sections/Principal';
import Nosotros from '../sections/Nosotros';
import Servicios from '../sections/Servicios';
import Contacto from '../sections/Contacto';
import Footer from '../sections/Footer';
import MyNavbar from '../components/Navbar';
import "../assets/css/Home.css"

const Home = ({ user, setUser }) => {
  return (
    <div className='gradient-background'>
      <MyNavbar user={user} setUser={setUser} />
      <Principal />
      <Servicios />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
