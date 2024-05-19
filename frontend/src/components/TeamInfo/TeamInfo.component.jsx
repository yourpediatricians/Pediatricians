import Slider from "react-slick"

import { Image } from "react-bootstrap"

import docImg from '../../assets/doc-pic.png'

import TeamInfoCard from "../TeamInfoCard/TeamInfoCard.component"
import './teaminfo.styles.css'

function TeamInfo() {
  const teamMembers = [
    {
      name: 'Dr. Lyndsey Garbi',
      pic: 'https://placehold.co/800x800',
      designation: 'Chief Medical Officer, Mother',
      info: 'Dr. Lyndsey Garbi graduated from Emory University and attended Sackler School of Medicine. Dr. Garbi is board-certified in pediatrics and neonatology, specializing in both. She loves working in medicine, and enjoys running, traveling, and spending time with her husband and three children.'
    },
    {
      name: 'Dr. Makia Powers',
      pic: 'https://placehold.co/800x800',
      designation: 'Chief Medical Officer, Mother',
      info: "Dr. Makia Powers attended Morehouse School of Medicine. She completed her residency training in pediatrics at Boston Children’s Hospital. Following residency, she completed a Master's in Public Health from Harvard. She enjoys spending time with her husband and son. She loves knitting, listening to Audible books, and yoga in her spare time."
    },
    {
      name: 'Dr. Jamilet Alegria',
      pic: 'https://placehold.co/800x800',
      designation: 'Chief Medical Officer, Mother',
      info: 'Dr. Jamilet Alegria attended the University of California, San Francisco School of Medicine. Dr. Alegria is board-certified in pediatrics and is interested in holistic, integrative, and functional Medicine. Dr. Alegria enjoys spending time with her husband and their two children. She loves serving at her church, walking her dog, and traveling with her family.'
    },
    {
      name: 'Dr. Amrit Bhardwaj',
      pic: 'https://placehold.co/800x800',
      designation: 'Chief Medical Officer, Mother',
      info: "Dr. Amrit Bhardway obtained her medical degree from St. George's University School of Medicine. She is board-certified in pediatrics and primary care sports medicine.  She enjoys guiding new parents on the journey of parenthood. She enjoys spending time with her husband, baby boy, and their two small pet birds in her free time."
    },
    {
      name: 'Dr. Lyndsey Garbi',
      pic: 'https://placehold.co/800x800',
      designation: 'Chief Medical Officer, Mother',
      info: 'Dr. Lyndsey Garbi graduated from Emory University and attended Sackler School of Medicine. Dr. Garbi is board-certified in pediatrics and neonatology, specializing in both. She loves working in medicine, and enjoys running, traveling, and spending time with her husband and three children.'
    },
    {
      name: 'Dr. Lyndsey Garbi',
      pic: 'https://placehold.co/800x800',
      designation: 'Chief Medical Officer, Mother',
      info: 'Dr. Lyndsey Garbi graduated from Emory University and attended Sackler School of Medicine. Dr. Garbi is board-certified in pediatrics and neonatology, specializing in both. She loves working in medicine, and enjoys running, traveling, and spending time with her husband and three children.'
    },
  ]

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <div className="container my-5">
        <h1 className='fw-bold pt-5'>Meet Your Team</h1>
        <p className="mb-5" style={{ fontSize: '1.2em' }}>All Wepediatrics pediatricians are board-certified by the Indian medical council and have many years of experience providing medical care for kids, from newborn all the way to 16!</p>

        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-4 mb-3 mb-sm-0">
            <div className="d-flex w-100 h-100 align-items-center justify-content-center">
              <div className="row">
                <div className="col-10 offset-1">
                  <Image src={docImg} roundedCircle fluid/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <h3>Dr. Rahul Sehrawat</h3>
            <h5>Chief Medical Officer, MBBS</h5>
            Compassionate doctor with a successful background in
            diagnosis, treatment and providing comprehensive
            medical care to children from infancy to adolescence.
            Acclaimed for making informed decisions to manage a
            variety of patients ailments. Ensures adherence to
            healthcare guidelines and standard practice.
          </div>
        </div>

        {/* <div className="slider-container">
          <Slider {...settings}>
            {
              teamMembers.map((member, i) => <div key={i}>
                <TeamInfoCard name={member.name} pic={member.pic} designation={member.designation} info={member.info} />
              </div>)
            }
          </Slider>
        </div> */}
      </div>
    </section>
  )
}

export default TeamInfo