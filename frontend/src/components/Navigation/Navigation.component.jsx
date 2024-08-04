import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

import { useAuth } from '../../contexts/AuthContext'
import { useLoading } from '../../contexts/LoadingContext'

import profile_icon from '../../assets/svgs/person-circle.svg'
import logo from '/logo.png'

function Navigation() {
  const navigate = useNavigate()
  const { curUser, updateCurUser } = useAuth()
  const { setLoading } = useLoading()
  const [expanded, setExpanded] = useState(false)
  let expiry

  if (curUser) {
    let Difference_In_Time = new Date(curUser.expiry).getTime() - new Date().getTime()
    expiry = Math.round(Difference_In_Time / (1000 * 3600 * 24))
  }

  const logout = async () => {
    setLoading(true)
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, null, { withCredentials: true })
    if (res.data.success) {
      updateCurUser(null)
      setLoading(false)
      navigate('/')
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" expanded={expanded} style={{ backgroundColor: '#eaeaea' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={logo}
            width="37"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Wepediatrics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" onClick={() => setExpanded(false)}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/* <Nav.Link href="/signup">Join Us</Nav.Link> */}
          </Nav>
          <Nav>
            {
              curUser
                ?
                <>
                  {
                    curUser.plan === 'NA'
                      ?
                      <>
                        <span className='my-md-auto mb-2'>Welcome back, {curUser.name}</span>
                        <Link to='/join'><Button className='ms-3 mb-2 mb-lg-0'>Join Us</Button></Link>
                      </>
                      :
                      <span className='my-md-auto mb-2'>{expiry} Days left!</span>
                  }
                  <Link to='/profile'><Button className='ms-3 mb-2 mb-lg-0'>Profile</Button></Link>
                  <Link><Button className='ms-3' onClick={logout}>Log Out</Button></Link>
                </>
                :
                <>
                  <Link to='/login'><Button className='ms-3 mb-2 mb-lg-0'>Log In</Button></Link>
                  <Link to='/signup'><Button className='ms-3'>Get Started</Button></Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation