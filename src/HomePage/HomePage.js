import React from 'react'
import './HomePage.css'
import { Container } from 'react-bootstrap'
import Typed from 'typed.js';
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import image1 from '../Images/logo.png'
import { githubURL, instagramURL, linkedinURL, whatsappURL } from '../Contact/Constants';

const HomePage = () => {


  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' Passionate Web Developer', 
      ' Information Science Graduate', 
      'Associate Developer @ GalaxE'],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleClick = (url) =>{
    window.open(url, '_blank');
  }
  

  return (
    <React.Fragment>
      <Container className='main-home-container'>
      <div className="right-home-container">
        <p>Hi, I am <span className='name-home-page'>Saiesh N Gangoli</span></p>
        <p>And I am a     
        <span ref={el} className='span-moving-tag'></span> </p>
        <div className='social-media-icons'>
        <p
      onClick={()=>{handleClick(githubURL)}}>
        <BsGithub className='icon-color icon-color-github'/></p>
      <p
      onClick={()=>{handleClick(instagramURL)}}
      ><BsInstagram className='icon-color icon-color-instagram'/></p> 
      <p 
      onClick={()=>{handleClick(linkedinURL)}}
      ><BsLinkedin className='icon-color icon-color-linkedin'/></p>
      <p 
      onClick={()=>{handleClick(whatsappURL)}}
      ><BsWhatsapp className='icon-color icon-color-whatsapp'/></p>
        </div>
      </div>
      <div className="left-home-container">
      <img src={image1} alt="" />
      
      </div>
      </Container>
    </React.Fragment>
  )
}

export default HomePage
