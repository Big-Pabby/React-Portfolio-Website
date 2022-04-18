import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/images/avt1.png'

const data = [
  {
    avatar: Avt1,
    name: 'John Doe',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id soluta natus nesciunt, cum similique illum sunt aut, eum suscipit quibusdam, maxime labore fuga. Ipsum voluptatibus ut nobis ullam fugit.'
  },
  {
    avatar: Avt1,
    name: 'Ernest Achiever',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id soluta natus nesciunt, cum similique illum sunt aut, eum suscipit quibusdam, maxime labore fuga. Ipsum voluptatibus ut nobis ullam fugit.'
  },
  {
    avatar: Avt1,
    name: 'John Doe',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id soluta natus nesciunt, cum similique illum sunt aut, eum suscipit quibusdam, maxime labore fuga. Ipsum voluptatibus ut nobis ullam fugit.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials