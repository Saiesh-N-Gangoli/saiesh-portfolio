import React, { useRef } from "react";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { sendEmail } from "./EmailService";

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(form.current);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="firstName">Name *</label>
            <input type="text" id="firstName" name="user_name" required />
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
          <button className="submit-button">
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label"><b>Send</b></span>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
