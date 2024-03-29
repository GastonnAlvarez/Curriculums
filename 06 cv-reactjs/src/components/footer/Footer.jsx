import React from 'react'
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="$" className='footer__logo'>GARO</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook"><BsFacebook /></a>
        <a href="https://instagram"><FiInstagram /></a>
        <a href="https://github"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; GARO curriculum</small>
      </div>
    </footer>
  )
}

export default Footer