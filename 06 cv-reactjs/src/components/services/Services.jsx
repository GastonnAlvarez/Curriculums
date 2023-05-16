import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <div className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tengo un perfil mas FronEnd con HTML,CSS,JS, tambien se usar Bootstrap</p>
            </li>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <div className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrolle algunas paginas Web, tambien hice CRUD con React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tengo conocimientos en GitHub</p>
            </li>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <div className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>El Backend es algo que me gusta mucho, estoy adentrandome a Node.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tengo conocimientos en Bases de Datos MySQL</p>
            </li>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services