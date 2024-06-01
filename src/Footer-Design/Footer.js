import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import './Footer.css'

const Footer = () => {
  return (
    <footer className='d-flex footer-comp play-regular'>
      <div className="left-side-of-footer">
        &copy; 2024 Saiesh N Gangoli
      </div>
      <div className="right-side-of-footer">
      <p className='margin-l'><BsGithub/></p>
      <p className='margin-content'><BsInstagram/></p>
      <p className='margin-content'><BsLinkedin/></p>
      <p className='margin-content'><BsWhatsapp/></p>
      </div>
    </footer>
  )
}

export default Footer
