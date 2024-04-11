import { Form, Button } from 'react-bootstrap'

function SignupFormStep1() {
  return (
    <Form className='p-5 bg-white rounded-5 shadow-lg'>
      <div className="w-100 d-flex mb-3">
        <h2 className='mx-auto'>Join Wepediatrics</h2>
      </div>
      <ul>
        <li>A team of Pediatricians available in minutes, 24/7/365</li>
        <li>Unlimited care for all of your children with no copays, fees, or appointments</li>
        <li>Wepediatrics' home medical kit</li>
      </ul>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='mb-0'>Email:</Form.Label>
        <Form.Control type="email" className='rounded-pill px-4' />
        {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='mb-0'>Password:</Form.Label>
        <Form.Control type="password" className='rounded-pill px-4' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label className='mb-0'>Confirm Password:</Form.Label>
        <Form.Control type="password2" className='rounded-pill px-4' />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
      <Button variant="primary" type="submit" className='rounded-pill w-100 mt-3'>
        Confirm
      </Button>
    </Form>
  )
}

export default SignupFormStep1