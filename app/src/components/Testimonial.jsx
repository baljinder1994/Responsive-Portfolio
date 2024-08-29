import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Testimonial = () => {

  const  reviews=[
    {
      quote:"This developer is fantastic!",
      name:"ABC",
      designation:"Frontend Developer"
    },
    {
      quote:"This developer is fantastic!",
      name:"ABC",
      designation:"Frontend Developer"
    },
    {
      quote:"This developer is fantastic!",
      name:"ABC",
      designation:"Frontend Developer"
    },
  ]
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000,
  }
  
  return (
    <div className="testnimonial-section" id="testnimonial">
      <h2 className="section-title">Testnimonials</h2>
      <Slider {...settings} className="testnimonial-slider">
         {reviews.map((test,index) =>(
          <div className='testnimonial-card' key={index}>
            <p className='testnimonial-quote'>{test.quote}</p>
            <p className='testnimonial-name'>{test.name}</p>
            <p className='testnimonial-designation'>{test.designation}</p>
          </div>
         ))}
      </Slider>
    </div>
  )
}

export default Testimonial
