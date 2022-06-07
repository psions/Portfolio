import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsChatLeftText} from 'react-icons/bs'
import {BsFillPhoneFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zihp4tp', 'template_7kubed3', form.current, 'Podci22kEPV3l6H4_')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Psionreality@gmail.com</h5>
            <a href="mailto:psionreality@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsChatLeftText className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Direct Text</h5>
            <a href="tel:+18086987416" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsFillPhoneFill className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>U.S Call Rates Apply</h5>
            <a href="tel:+18086987416" target='_blank'>Send a message</a>
          </article>
        </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email"  name='email' placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact