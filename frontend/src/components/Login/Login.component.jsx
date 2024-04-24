import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Form, Button } from 'react-bootstrap'

function Login() {
  const navigate = useNavigate()
  const { curUser, updateCurUser } = useAuth()

  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, formData, { withCredentials: true })
      updateCurUser(res.data.userInfo)
      navigate('/')
    }
    catch {
      setShowError(true)
    }
  }

  return (
    <div className='flex-fill' style={{ background: '#0d6efd' }}>
      <div className="d-flex h-100 w-100 align-items-center">
        <div className="container">
          <div className="row w-100 mx-0">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
              <Form className='p-5 bg-white rounded-5 shadow-lg' onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='mb-0'>Email:</Form.Label>
                  <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} className='rounded-pill px-4' />
                  {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='mb-0'>Password:</Form.Label>
                  <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} className='rounded-pill px-4' />
                </Form.Group>
                {
                  showError
                    ?
                    <Form.Text className="text-danger ms-3">
                      Invalid username or password
                    </Form.Text>
                    : null
                }
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
                <Button variant="primary" type="submit" className='rounded-pill w-100 mt-3'>
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login