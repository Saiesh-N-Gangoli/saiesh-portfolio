import React from "react";
import './Contact.css'
import Footer from "../Footer-Design/Footer";
import ContactForm from "./ContactForm";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="main-contact-container d-flex mt-5 play-regular">
        <div className="left-contact-container">
           <div className="underline-hover">
            <h2 className="fw-bold">Let's Talk</h2>
            </div>
            <p className="fw-light mt-2">Looking forword to hear from you</p>
            <p><span className="fw-bold"><MdLocalPhone className="aqua-color"/> </span>
            <span className="fw-light">+91 8197215817</span></p>
            <p><span className="fw-bold"><MdEmail className="aqua-color"/> </span>
            <span className="fw-light">saieshd3@gmail.com</span></p>
            <p><span className="fw-bold"><MdLocationPin className="aqua-color"/> </span>
            <span className="fw-light">Bangalore</span></p>
        </div>
        <div className="right-contact-container">
        <ContactForm/>
        </div>
      </div>
     <div className='mt-4'>
     <Footer/>
     </div>
    </div>
  );
};

export default Contact;
