import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import { useAuth } from '../../contexts/AuthContext'
import { useLoading } from '../../contexts/LoadingContext'

function Signup() {
  const navigate = useNavigate()
  const { curUser, updateCurUser } = useAuth()
  const { setLoading } = useLoading()
  const [validated, setValidated] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showWarning, setShowWarning] = useState(false)

  const handlePasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleFormDataChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    setDisabled(true)
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation()
    } else {
      if (formData.password === confirmPassword) {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, formData, { withCredentials: true })
        updateCurUser(res.data.userInfo)
        navigate('/signup/success')
      } else {
        setShowWarning(true)
      }
    }
    setValidated(true)
    setLoading(false)
    setDisabled(false)
  }

  return (
    <div style={{ background: '#0d6efd' }}>
      <div className="d-flex h-100 w-100 align-items-center">
        <div className="container">
          <div className="row w-100 mx-0">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
              <Form className='py-5 px-4 px-md-5 bg-white rounded-5 shadow-lg my-5' noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="w-100 d-flex mb-3">
                  <h2 className='mx-auto'>Join Wepediatrics</h2>
                </div>
                <ul>
                  <li>A team of Pediatricians available in minutes, 24/7/365</li>
                  <li>Unlimited care for all of your children with no copays, fees, or appointments</li>
                  <li>Wepediatrics' home medical kit</li>
                </ul>

                <Form.Group className="mb-3" controlId="name">
                  <Form.Label className='mb-0'>Name:</Form.Label>
                  <Form.Control className='rounded-pill px-4' name='name' value={formData.name} onChange={handleFormDataChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='mb-0'>Email:</Form.Label>
                  <Form.Control type="email" className='rounded-pill px-4' name='email' value={formData.email} onChange={handleFormDataChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label className='mb-0'>Phone</Form.Label>
                  <Form.Control className='rounded-pill px-4' name='phone' value={formData.phone} onChange={handleFormDataChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='mb-0'>Password:</Form.Label>
                  <Form.Control type="password" className='rounded-pill px-4' name='password' value={formData.password} onChange={handleFormDataChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                  <Form.Label className='mb-0'>Confirm Password:</Form.Label>
                  <Form.Control type="password" className='rounded-pill px-4' value={confirmPassword} onChange={handlePasswordChange} required />
                </Form.Group>
                {
                  showWarning
                    ?
                    <Form.Text className="text-danger ms-3">
                      Password must be same
                    </Form.Text>
                    : null
                }

                <Button variant="primary" type="submit" className='rounded-pill w-100 mt-3' disabled={disabled}>
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

export default Signup