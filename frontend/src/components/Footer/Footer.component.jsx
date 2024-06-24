import { Youtube, Facebook, Instagram } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center mb-4">
          <div className='col-12 col-sm-2 mb-3 mb-sm-0'>
            <div className="d-flex justify-content-center align-items-center">
              Wepediatrics
            </div>
          </div>
          <div className='col-12 col-sm-8 mb-3 mb-sm-0 d-flex align-items-center justify-content-evenly'>
            <div>
              <div>How It Works</div>
            </div>
            <div>
              <div>FAQs</div>
            </div>
            <div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className='col-12 col-sm-2 mb-3 mb-sm-0'>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className='mb-2'>Follow Us On</div>
              <div className="d-flex justify-content-between align-items-between">
                <div className='mx-2'>
                  <a href="https://www.facebook.com/profile.php?id=61558286968392&mibextid=ZbWKwL" target='_blank'><Facebook size={25} color='white' /></a>
                </div>
                <div className='mx-2'>
                  <a href="https://youtube.com/@wepediatrics?si=7W3xYISb4KbNMU5l" target='_blank'><Youtube size={25} color='white' /></a>
                </div>
                <div className='mx-2'>
                  <a href="https://www.instagram.com/wepediatrics" target='_blank'><Instagram size={25} color='white' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ fontSize: '0.85em' }}>
          <div className='mb-3'>© 2024 Active Wave Pvt. Ltd.</div>
          <div className='d-flex flex-wrap justify-content-center align-items-center gap-3'>
          <div>
      <Link to="/refund-policy" style={{ color: 'white' }}>Refund Policy</Link>
    </div>
    <div>
      <Link to="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</Link>
    </div>
    <div>
      <Link to="/termsofuse" style={{ color: 'white' }}>Terms Of Use</Link>
    </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer