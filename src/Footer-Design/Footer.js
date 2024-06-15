import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import './Footer.css'
import { githubURL, instagramURL, linkedinURL, whatsappURL } from '../Contact/Constants';

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
      onClick={()=>{handleClick(githubURL)}}><BsGithub/></p>
      <p
      onClick={()=>{handleClick(instagramURL)}}
      ><BsInstagram/></p> 
      <p 
      onClick={()=>{handleClick(linkedinURL)}}
      ><BsLinkedin/></p>
      <p 
      onClick={()=>{handleClick(whatsappURL)}}
      ><BsWhatsapp/></p>
      </div>
    </footer>
  )
}

export default Footer
