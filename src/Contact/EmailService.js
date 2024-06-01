import {PUBLIC_KEY,TEMPLATE_KEY, SERVICE_KEY} from './Constants.js'
import {toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export const sendEmail = (form) => {

    return emailjs
      .sendForm(SERVICE_KEY, TEMPLATE_KEY, form, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Message sent",{
              position: "top-center",
              closeButton: false
            });
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };