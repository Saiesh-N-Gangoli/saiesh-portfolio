import React from 'react'
import './Contact.css'

const ContactForm = () => {
  return (
    <React.Fragment>
       <form className="contact-form">
       <div className="form-group">
        <div className="form-field">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" name="firstName" required/>
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" name="lastName" required/>
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field full-width">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">Send</button>
      </div>
    </form>
    </React.Fragment>
  )
}

export default ContactForm
