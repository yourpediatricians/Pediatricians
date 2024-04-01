import React from 'react'

function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center mb-4">
          <div className='col-12 col-sm-2 mb-3 mb-sm-0'>
            <div className="d-flex justify-content-center align-items-center">
              WePediatrics
            </div>
          </div>
          <div className='col-12 col-sm-8 mb-3 mb-sm-0 d-flex align-items-center justify-content-evenly'>
            <div>
              <div>How It Works</div>
              <div>How It Works</div>
              <div>How It Works</div>
              <div>How It Works</div>
            </div>
            <div>
              <div>FAQs</div>
              <div>FAQs</div>
              <div>FAQs</div>
              <div>FAQs</div>
            </div>
            <div>
              <div>Contact Us</div>
              <div>Contact Us</div>
              <div>Contact Us</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className='col-12 col-sm-2 mb-3 mb-sm-0'>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>Follow Us On</div>
              <div>fb insta ssf</div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ fontSize: '0.85em' }}>
          <div className='mb-3'>© 2023 sparkMD Inc.</div>
          <div className='d-flex flex-wrap justify-content-center align-items-center gap-3'>
            <div>For Health Plans</div>
            <div>For Employers</div>
            <div>For Doctors</div>
            <div>Refund Policy</div>
            <div>Privacy Practices</div>
            <div>Telehealth Policy</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer