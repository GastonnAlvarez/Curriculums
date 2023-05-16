import React from 'react'
import ME from '../../assets/img01.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { MdFolderSpecial } from 'react-icons/md'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>1+ Practicando y haciendo proyectos</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <MdFolderSpecial className='about__icon' />
              <h5>Projects</h5>
              <small>10+ proyectos</small>
            </article>
          </div>

          <div className="about__paragraph">
            <p>
              Hola, mi nombre es Gaston Alejandro Álvarez, tengo 25 años, estudie
              algunos años en la universidad y actualidad soy autodidacta.
              Diariamente estudio por diferentes medios.
            </p>
            <p>Hace un largo tiempo que vengo estudiando por mi cuenta, aprendiendo
              las Skills necesarias para ser un buen Desarrollador Web FullStack.Se que no se todo pero estoy dispuesto aprender lo que necesite para estar en una empresa y volverme un Senior.</p>
          </div>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About