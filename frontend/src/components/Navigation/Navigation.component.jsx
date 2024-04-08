import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">WePediatrics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">Join Us</Nav.Link>
          </Nav>
          <Nav>
            <Link to='/login'><Button className='ms-3'>Log In</Button></Link>
            <Button className='ms-3'>Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;