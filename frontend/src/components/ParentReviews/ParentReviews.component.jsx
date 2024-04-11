import Slider from "react-slick"

import ParentReviewsCard from "../ParentReviewsCard/ParentReviewsCard.component"

function ParentReviews() {
  const reviews = [
    {
      pic: 'https://placehold.co/500x500',
      rating: 4,
      text: "We have a high deductible plan through our insurance. So it's saved us so much money!!",
      name: 'Nadia'
    },
    {
      pic: 'https://placehold.co/500x500',
      rating: 4,
      text: "Sometimes it can be difficult to get in touch with my daughter's pediatrician, so this is a really convenient option!",
      name: 'Carel Ashley Collier-Griffin'
    },
    {
      pic: 'https://placehold.co/500x500',
      rating: 4,
      text: "I cannot tell you how many times it has saved us from sitting in doctor's offices. When your little one doesn't feel good that's the last place they want to be.",
      name: 'Alexandria Caporale'
    },
    {
      pic: 'https://placehold.co/500x500',
      rating: 4,
      text: "We have a high deductible plan through our insurance. So it's saved us so much money!!",
      name: 'Nadia'
    },
    {
      pic: 'https://placehold.co/500x500',
      rating: 4,
      text: "We have a high deductible plan through our insurance. So it's saved us so much money!!",
      name: 'Nadia'
    },
  ]

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section className='text-white' style={{ backgroundColor: '#235aff' }}>
      <div className="container py-5">
        <h1 className='fw-bold'>Why Parents Love Wepediatrics</h1>
        <div className='fs-5'>* * * * * 4.5</div>
        <div className="slider-container my-5">
          <Slider {...settings} >
            {
              reviews.map((review, i) => <div key={i} className="mb-3" >
                <ParentReviewsCard pic={review.pic} text={review.text} rating={review.rating} name={review.name} />
              </div>)
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ParentReviews