import kitImage from '../../assets/kitImage.png'

import { useState } from 'react'
import { Button, Form, Image } from "react-bootstrap"
import './signupformstep3.styles.css'

function SignupFormStep3({ formData, handleFormDataChange, handleSubmit }) {
  // const [selectedPlan, setSelectedPlan] = useState('plan-monthly')

  const setSelectedPlan = (value) => {
    handleFormDataChange({target: {name: 'plan', value: value}})
  }

  return (
    <Form className='p-4 bg-white rounded-5 shadow-lg'>
      <div className="w-100 d-flex mb-3">
        <div className="mx-auto fs-6">
          <h2 className="text-center mb-3">Select Your Plan </h2>
          <div className="row align-items-center">
            <div className="col-5">
              <Image src={kitImage} fluid />
            </div>
            <div className="col-7">
              <div className="ms-3 mb-2 fw-bold">Included in all plans:</div>
              <div>
                <ul>
                  <li>At-home medical kit</li>
                  <li>24/7 access to a team of Pediatricians</li>
                  <li>Unlimited care for your child with no additional fees or copays</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={(e) => {
        e.preventDefault()
        setSelectedPlan('plan-yearly')
      }}
        className={`d-block w-100 mb-3 rounded-pill border ${formData.plan === 'plan-yearly' ? 'selected' : ''}`}>
        <div>
          Yearly
        </div>
      </button>
      <button onClick={(e) => {
        e.preventDefault()
        setSelectedPlan('plan-monthly')
      }} className={`d-block w-100 mb-3 rounded-pill border ${formData.plan === 'plan-monthly' ? 'selected' : ''}`}>
        <div>
          Monthly
        </div>
      </button>

      <Button variant="primary" type="submit" className='rounded-pill w-100 mt-3' onClick={handleSubmit}>
        Confirm
      </Button>
    </Form>
  )
}

export default SignupFormStep3