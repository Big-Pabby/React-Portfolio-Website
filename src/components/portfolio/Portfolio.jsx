import React from 'react'
import './portfolio.css'
import Microsoft from '../../assets/images/microsoft.png'
import Ephipany from '../../assets/images/ephiphany.png'
import Greenly from '../../assets/images/greenly.png'
import Bigi from '../../assets/images/Bigi.png'
import Robofriends from '../../assets/images/robofriends.png'
import Coming from '../../assets/images/coming.jpg'

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
            <a href="https://github.com/Big-Pabby/Microsoft-Landing-Page" className="btn" target='_blank'>Source Code</a>
            <a href="https://big-pabby.github.io/Microsoft-Landing-Page/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Ephipany} alt="" />
          </div>
          <h3>Epiphany E-Commerce Web App with Vue JS</h3>
          <p>For this project I created an E-commerce web app with HTML, Sass, Vue JS, Node JS, Express JS and PostgresSQL using <a href="#">Stylocity.net</a> as the UI</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Big-Pabby/stylocity-clone" className="btn" target='_blank'>Source Code</a>
            <a href="https://big-pabby.github.io/stylocity-clone/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Greenly} alt="" />
          </div>
          <h3>Greenly Landing Page</h3>
          <p>For this project I worked with a Product Designer his name is <a href="https://www.linkedin.com/in/micheal-olamide">Michael Olamide</a> he created the UI design for the page and I worked on the landing web page with HTML, CSS and Javascript</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Big-Pabby/Greenly-landing-page" className="btn" target='_blank'>Source Code</a>
            <a href="https://big-pabby.github.io/Greenly-landing-page/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Robofriends} alt="" />
          </div>
          <h3>RoboFriends Web App</h3>
          <p>For this project I created a Robofriends application for filtering different robots using React JS</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Big-Pabby/Microsoft-Landing-Page" className="btn" target='_blank'>Source Code</a>
            <a href="https://big-pabby.github.io/robofriends/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Bigi} alt="" />
          </div>
          <h3>Bigi Landing Page</h3>
          <p>For this project I cloned Bigi Website landing page with HTML, CSS, Bootstrap and Javascript</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Source Code</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Coming} alt="" />
          </div>
          <h3>V-Blogs Website App</h3>
          <p>For this project I'm working on creating a blogging website where various users can come on and blog using React JS, Node JS, Express JS and PostgresSQL</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Big-Pabby/V-blogs" className="btn" target='_blank'>Source Code</a>
            <a href="https://big-pabby.github.io/V-blogs/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio