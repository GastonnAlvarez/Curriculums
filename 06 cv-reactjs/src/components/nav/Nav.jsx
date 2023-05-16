import React, { useState } from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { FaUserSecret } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { MdContactPhone } from 'react-icons/md'
import { BsFillFileEarmarkBarGraphFill } from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserSecret /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillFileEarmarkBarGraphFill /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDeveloperMode /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaBook /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /></a>
    </nav>
  )
}

export default Nav