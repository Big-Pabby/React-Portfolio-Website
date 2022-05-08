import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/victoradekunle" target='_blank'>< BsLinkedin /></a>
        <a href="https://github.com/Big-Pabby" target='_blank'>< FaGithub /></a>
        <a href="https://twitter.com/Big__Pabby" target='_blank'>< BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials