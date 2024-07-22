import mainImage from '../../assets/mainImage.jpg'

import { Link } from 'react-router-dom'
import { Button, Image } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext'
import './mainheader.styles.css'

function MainHeader() {
  const { curUser } = useAuth()

  return (
    <>
      <main style={{ backgroundColor: '#f4f2f0' }} className="main-header">
        <div className="container bg-img pb-5">
          <div className="row me-0 py-5">
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
                        {
                          curUser
                            ?
                            <Link to='/payment'><Button className="px-5 py-2 rounded-pill fs-6 fw-bold">Join Us</Button></Link>
                            :
                            <Link to='/signup'><Button className="px-5 py-2 rounded-pill fs-6 fw-bold">Get Started</Button></Link>
                        }

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
            {/* <div className="col-7 offset-lg-1 col-lg-5 align-self-end">
            <div style={{ maxWidth: '500px' }}>
              <img src={mainImage} style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }} />
            </div>
          </div> */}
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
            <div className='text-white'>Unlimited 24/7 pediatric visits.</div>
            {/* <div>Rated #1 for online pediatric care by Everyone.</div> */}
          </div>
          <div>
            <Button className='px-5 py-2 rounded-pill'>Get Started</Button>
          </div>
          <div style={{ fontSize: '0.8em' }} className='text-white'>
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