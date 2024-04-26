import kitImage from '../../assets/kitImage.png'

import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, Form, Image } from "react-bootstrap"

import './joinus.styles.css'

function SignupFormStep3() {
  const navigate = useNavigate()
  const { curUser, updateCurUser } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState('plan-monthly')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/info`, { plan: selectedPlan }, { withCredentials: true })
    if (res.data.success) {
      updateCurUser(res.data.userInfo)
      navigate('/')
    }
  }

  return (
    <div className='flex-fill' style={{ background: '#0d6efd' }}>
      <div className="d-flex h-100 w-100 align-items-center">
        <div className="container">
          <div className="row w-100 mx-0">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
              <Form className='p-4 bg-white rounded-5 shadow-lg' onSubmit={handleSubmit}>
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
                  className={`d-block w-100 mb-3 rounded-pill border ${selectedPlan === 'plan-yearly' ? 'selected' : ''}`}>
                  <div>
                    Yearly
                  </div>
                </button>
                <button onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlan('plan-monthly')
                }} className={`d-block w-100 mb-3 rounded-pill border ${selectedPlan === 'plan-monthly' ? 'selected' : ''}`}>
                  <div>
                    Monthly
                  </div>
                </button>

                <Button variant="primary" type="submit" className='rounded-pill w-100 mt-3'>
                  Confirm
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignupFormStep3