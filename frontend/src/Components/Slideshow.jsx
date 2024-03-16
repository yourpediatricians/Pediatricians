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
    <div style={containerStyle}> {/* Apply the container style */}
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
        {/* Add more slides as needed */}
      </Slider>
    </div>
     <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First column with photo and text */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="mb-4">
            <img src={slide1} alt="Photo" className="w-48 h-48 object-cover rounded-full" />
          </div>
        </div>
        
        {/* Second column with text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">How we Works</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc eget risus mattis lacinia. Proin ultricies justo ut arcu congue, nec commodo sapien eleifend.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Slideshow;
