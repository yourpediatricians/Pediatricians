import mainImg from '../../assets/mainImg.png'

import { Button, Image } from "react-bootstrap"
import './mainheader.styles.css'

function MainHeader() {
  return (
    <>
      <main style={{ backgroundColor: '#f4f2f0' }} className="main-header">
        <div className="row me-0">
          <div className="col-5 col-lg-6">
            <div className="d-flex align-items-center justify-content-center">
              <div className="py-5">
                <div className="text-primary fw-bold fs-1 mt-5 mb-3">
                  <div>Faster Care,</div>
                  <div>For Less</div>
                </div>
                <div className="mb-4">
                  <div>Unlimited 24/7 pediatric visits.</div>
                  {/* <div>Rated #1 for online pediatric care by Verywell.</div> */}
                </div>
                <div className="d-flex mb-3">
                  <div className="d-flex flex-column align-items-center">
                    <div>
                      <Button className="px-5 py-2 rounded-pill fs-6 fw-bold">Get Started</Button>
                    </div>
                    <div style={{ fontSize: '0.8em' }}>
                      Risk Free. Cancel Anytime.
                    </div>
                  </div>
                </div>
                {/* <div>
                  <div>
                    * * * * *
                  </div>
                  <div>
                    Rated 4.8 by 100,000 happy parents!
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-7 offset-lg-1 col-lg-5 align-self-end">
            <Image src='https://placehold.co/400x400' fluid />
          </div>
        </div>
      </main>
      <main className="main-header-mobile">
        <div className='container text-center py-5'>
          <div className='text-primary mb-4'>
            <h1>Faster Care,</h1>
            <h1>For Less.</h1>
          </div>
          <div className='my-3'>
            <div>Unlimited 24/7 pediatric visits.</div>
            {/* <div>Rated #1 for online pediatric care by Everyone.</div> */}
          </div>
          <div>
            <Button className='px-5 py-2 rounded-pill'>Get Started</Button>
          </div>
          <div style={{ fontSize: '0.8em' }}>
            Risk Free. Cancel Anytime
          </div>
          {/* <div className='mt-3'>
            <div>* * * * *</div>
            <div style={{ fontSize: '0.9em' }}>Rated 5.0 by 100,000 happy parents!</div>
          </div> */}
        </div>
      </main>
    </>
  )
}

export default MainHeader