import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import './Footer.css'

const Footer = () => {

  const handleClick = (url) =>{
    window.open(url, '_blank');
  }

  return (
    <footer className='d-flex footer-comp play-regular'>
      <div className="left-side-of-footer">
        &copy; 2024 Saiesh N Gangoli
      </div>
      <div className="right-side-of-footer">
      <p
      onClick={()=>{handleClick('https://github.com/Saiesh-N-Gangoli')}}><BsGithub/></p>
      <p
      onClick={()=>{handleClick('https://www.instagram.com/saiesxx.777')}}
      ><BsInstagram/></p> 
      <p 
      onClick={()=>{handleClick('https://www.linkedin.com/in/saiesh-n-gangoli-8858a5199')}}
      ><BsLinkedin/></p>
      <p 
      onClick={()=>{handleClick('https://wa.me/+918197215817')}}
      ><BsWhatsapp/></p>
      </div>
    </footer>
  )
}

export default Footer
