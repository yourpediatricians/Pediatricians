import Slider from "react-slick"
import AwardCard from "../AwardCard/AwardCard.component"

function MultipleItems() {
  const awards = [
    { image: 'https://placehold.co/400x400', text: 'Best for On-Demand Medical Care' },
    { image: 'https://placehold.co/400x400', text: 'Best Pediatric Telehealth for Kids' },
    { image: 'https://placehold.co/400x400', text: 'First Feeding Friendly Virtual Care Practice' },
    { image: 'https://placehold.co/400x400', text: '#1 for Online Pediatric Care' },
    { image: 'https://placehold.co/400x400', text: 'Favorite Companies from 2019' }
  ]
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container py-4 ps-4">
      <Slider {...settings}>
        {awards.map((award, i) => <AwardCard key={i} image={award.image} text={award.text} />)}
      </Slider>
    </div>
  );
}

export default MultipleItems;
