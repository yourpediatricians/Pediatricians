import kitImage from '../../assets/kitImage.png'
import { Image } from "react-bootstrap"

import './benefits.styles.css'

function Benefits() {
  const heading = "It's time for better pediatric care."
  const info = 'Once you join, you can use the service immediately. You’ll also receive a handy at-home medical kit, enabling our pediatricians to diagnose double the issues - saving you time, stress, and urgent care costs.'
  const benefits = [
    {
      heading: 'Long waits',
      info: 'Get diagnoses, prescriptions in minutes from top-rated, board-certified pediatricians.'
    },
    {
      heading: 'Surprise fees',
      info: 'There are no fees, copays, or limits. An entire month of Wepediatrics is often less than the cost of a single urgent care visit!'
    },
    {
      heading: 'Office closed',
      info: 'As a member you get access to Wepediatrics 24/7, 365 days of the year. Even on Holidays.'
    },
    {
      heading: 'False promises',
      info: 'If you don’t like Wepediatrics you can claim a refund within 3 days. We have a 100% satisfaction guarantee policy.'
    }
  ]

  return (
    <section style={{ backgroundColor: '#235aff' }} className="text-white">
      <div className="row benefit-lg me-0">
        <div className="col-7 p-5 pb-0 d-flex flex-column justify-content-between">
          <div className="ms-5 ps-5 pt-5">
            <h1 className="fw-bold">{heading}</h1>
            <p className="fs-4">{info}</p>
          </div>
          <div className="row">
            <div className="col-xl-8 col-10 offset-2 pb-5">
              <Image src={kitImage} fluid className='kit-image' />
            </div>
          </div>
        </div>
        <div className="col-5 p-5">
          {
            benefits.map((benefit, i) => <div key={i} className="me-5 mb-5">
              <h2 className="cross">{benefit.heading}</h2>
              <p className="fs-5">{benefit.info}</p>
            </div>)
          }
        </div>
      </div>
      <div className="benefit container text-center p-5 pb-0">
        <div className="mb-5">
          <h1 className="fw-bold">{heading}</h1>
          <p className="fs-4">{info}</p>
        </div>
        <div>
          {
            benefits.map((benefit, i) => <div key={i} className="mb-5">
              <h2 className="cross">{benefit.heading}</h2>
              <p className="fs-5">{benefit.info}</p>
            </div>)
          }
        </div>
        <div>
          <Image src={kitImage} fluid className='kit-image' />
        </div>
      </div>
    </section>
  )
}

export default Benefits