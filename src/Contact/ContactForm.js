import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ch54ycl', 'template_gcflpos', form.current, {
          publicKey: 'Naqr6vIdc1BSWKFxi',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success("Message sent",{
                position: "top-center",
                closeButton: false
              });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <React.Fragment>
        <ToastContainer />
       <form className="contact-form" ref={form} onSubmit={sendEmail}>
       <div className="form-group">
        <div className="form-field">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" name="user_name" required/>
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" name="lastName" required/>
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="user_email" required />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field full-width">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button" value="Send">Send</button>
      </div>
    </form>
    </React.Fragment>
  )
}

export default ContactForm
