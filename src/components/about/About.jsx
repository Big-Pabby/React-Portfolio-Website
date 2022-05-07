import React from 'react'
import './about.css'
import AboutMe from '../../assets/images/about2.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt="aboutPic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hi thanks for checking out my portfolio, my name is Victor Adekunle also known as Pabby, I'm a Full Stack Web Developer that is heavy on the Front End part of the Web. I make use of tools like: HTML/CSS, Javascript, PostgresSQL and other included <a href="#experience">frameworks</a>(click on the frameworks to view), I am seeking for an entry-level or part time opportunity where I can continue to learn and grow my skills as a web developer. Feel free to connect with me, my DMs are always open!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About