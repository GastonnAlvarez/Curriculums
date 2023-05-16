import React from 'react'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gaston.alvarez.gary@gmail.com</h5>
            <a href="mailto:gaston.alvarez.gary@gmail.com" target='_blank'>Enviame un Email</a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className='contact__option-icon'/>
            <h4>Intagram</h4>
            <h5>gaaro.gaaroo</h5>
            <a href="https://instagram.com" target='_blank'>Ve me por Instagram</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>03518133075</h5>
            <a href="https://api.whatsapp.com/send?phone=3518133075" target='_blank'>Enviame un Whatsapp</a>
          </article>
        </div>
        <form action="https://formsubmit.co/gaston.alvarez.gary@gmail.com" method="POST">
          <input type="text" name='name' placeholder='Nombre de empresa...' required />
          <input type="email" name='email' placeholder='Email de empresa...' required />
          <textarea name="" id="" cols="30" rows="10" placeholder='Tu mensaje...' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact