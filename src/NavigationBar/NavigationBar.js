import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { useLocation, useNavigate } from 'react-router';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Navbar className="navigation-bar play-regular">
    <Container className="justify-content-between">
      <Nav className="mx-auto" >
        <Nav.Link className='color-navigation-font' onClick={() => navigate('/')}
        active={location.pathname === '/'}>Home</Nav.Link>
        <Nav.Link className='color-navigation-font' onClick={() => navigate('/about')}
        active={location.pathname === '/about'}>About</Nav.Link>
        <Nav.Link className='color-navigation-font' onClick={() => navigate('/skills')}
        active={location.pathname === '/skills'}>Skills</Nav.Link>
        <Nav.Link className='color-navigation-font' onClick={() => navigate('/projects')}
        active={location.pathname === '/projects'}>Projects</Nav.Link>
        <Nav.Link className='color-navigation-font' onClick={() => navigate('/contact')} 
        active={location.pathname === '/contact'}>Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar
