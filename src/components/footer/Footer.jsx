import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PABBY</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Big-Pabby" target='_blank'><BsGithub /></a>
        <a href="https://twitter.com/Big__Pabby" target='_blank'><BsTwitter /></a>
        <a href="https://linkedin.com/in/victoradekunle" target='_blank'><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>Victor Adekunle &copy;2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer