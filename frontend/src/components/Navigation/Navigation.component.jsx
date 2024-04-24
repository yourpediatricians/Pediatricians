import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function Navigation() {
  const navigate = useNavigate()
  const { curUser, updateCurUser } = useAuth()

  const logout = async () => {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/logout`)
    if (res.data.success) {
      updateCurUser(null)
      navigate('/')
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">WePediatrics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
                    curUser.plan === ''
                      ?
                      <Link to='/join'><Button className='ms-3'>Join Us</Button></Link>
                      :
                      null
                  }
                  <Link><Button className='ms-3' onClick={logout}>Log Out</Button></Link>
                </>
                :
                <>
                  <Link to='/login'><Button className='ms-3'>Log In</Button></Link>
                  <Link to='/signup'><Button className='ms-3'>Get Started</Button></Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;