import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( import.meta.env.VITE_APP_EMAILJS_YOUR_SERVICE_ID , import.meta.env.VITE_APP_EMAILJS_YOUR_TEMPLATE_ID , form.current, import.meta.env.VITE_APP_EMAILJS_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ezequiel.abarrera@gmail.com</h5>
            <a href='mailto:ezequiel.abarrera@gmail.com' className='btn' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>Message</h4>
            <h5>Linkedin</h5>
            <a href='https://www.linkedin.com/in/ezequiel-javascript/' className='btn' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>(+54) 9 11 61718034</h5>
            <a href='https://api.whatsapp.com/send?phone=5491161718034' className='btn' target="_blank">Send a message</a>
          </article>
        </div>
        {/*  End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact