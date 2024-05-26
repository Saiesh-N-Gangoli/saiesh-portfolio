import React from "react";
import './Contact.css'
import Footer from "../Footer-Design/Footer";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="main-contact-container d-flex mt-5">
        <div className="left-contact-container">
            <h2 className="fw-bold">Contact</h2>
            <p className="fw-light">Looking forword to hear from you</p>
            <p><span className="fw-bold">Phone: </span>
            <span className="fw-light">+91 8197215817</span></p>
            <p><span className="fw-bold">E-mail: </span>
            <span className="fw-light">saieshd3@gmail.com</span></p>
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
