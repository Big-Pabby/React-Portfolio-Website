import React from 'react'
import './portfolio.css'
import Microsoft from '../../assets/images/microsoft.png'
import Ephipany from '../../assets/images/ephiphany.png'
import Greenly from '../../assets/images/greenly.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Microsoft} alt="" />
          </div>
          <h3>Microsoft Landing Page</h3>
          <p>For this project I cloned Microsoft Landing Page with HTML, CSS and Javascript</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Source Code</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Greenly} alt="" />
          </div>
          <h3>Greenly Landing Page</h3>
          <p>For this project I worked with a Product Designer his name is <a href="https://linkedIn.com">David</a> and created the landing web page with HTML, CSS and Javascript</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Source Code</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Ephipany} alt="" />
          </div>
          <h3>Epiphany E-Commerce Web App with Vue JS</h3>
          <p>For this project I created an E-commerce web app with HTML, Sass, Vue JS, Node JS, Express JS and PostgresSQL using <a href="#">Stylocity.net</a> as the UI</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Source Code</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio