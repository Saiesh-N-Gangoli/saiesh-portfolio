import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { useNavigate } from 'react-router';

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" className="navigation-bar w-100">
    <Container className="justify-content-between">
      <Nav className="mx-auto">
        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
        <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
        <Nav.Link onClick={() => navigate('/skills')}>Skills</Nav.Link>
        <Nav.Link onClick={() => navigate('/projects')}>Projects</Nav.Link>
        <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar
