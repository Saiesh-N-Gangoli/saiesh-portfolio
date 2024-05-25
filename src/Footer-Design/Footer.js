import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import './Footer.css'

const Footer = () => {
  return (
    <footer className='d-flex footer-comp'>
      <div className="left-side-of-footer">
        &copy; 2024 Saiesh N Gangoli
      </div>
      <div className="right-side-of-footer">
      <p><BsGithub/></p>
      <p><BsInstagram/></p>
      <p><BsLinkedin/></p>
      <p><BsWhatsapp/></p>
      </div>
    </footer>
  )
}

export default Footer
