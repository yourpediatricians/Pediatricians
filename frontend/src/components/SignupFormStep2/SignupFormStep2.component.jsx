import { Button, Form } from "react-bootstrap"

import oto_img from '../../assets/tools/oto.png'
import o2_img from '../../assets/tools/O2.png'
import therm_img from '../../assets/tools/therm.png'

function SignupFormStep2() {
  return (
    <Form className='p-5 bg-white rounded-5 shadow-lg'>
      <div className="w-100 d-flex mb-3">
        <div className="mx-auto">
          <div className="row text-center fs-6 text-secondary">
            <div className="col-4 p-3">
              <div className="p-3"><img src={oto_img} className="img-fluid" /></div>
              <div>HD Earscope</div>
            </div>
            <div className="col-4 p-3">
              <div><img src={o2_img} className="img-fluid" /></div>
              <div>O2 Monitor</div>
            </div>
            <div className="col-4 p-3">
              <div><img src={therm_img} className="img-fluid" /></div>
              <div>In-mouth Thermometer</div>
            </div>
          </div>
        </div>
      </div>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label className='mb-0'>Phone:</Form.Label>
        <Form.Control type="text" className='rounded-pill px-4' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label className='mb-0'>Address:</Form.Label>
        <Form.Control type="text" className='rounded-pill px-4' />
      </Form.Group>

      <Button variant="primary" type="submit" className='rounded-pill w-100 mt-3'>
        Next
      </Button>
    </Form>
  )
}

export default SignupFormStep2