import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "../assets/slide1.jpg"
import "./Slideshow.css"
const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  const containerStyle = {
    width: '100%', // Adjust the width as needed
    margin: '0' // Center the container horizontally
  };
  
  
  return (
    <>
    <div style={containerStyle}>
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Image 1" />
        </div>
        <div>
          <img src={slide1} alt="Image 2" />
        </div>
        <div>
          <img src={slide1} alt="Image 3" />
        </div>
      </Slider>
    </div>

        

    
    </>
  );
};

export default Slideshow;
