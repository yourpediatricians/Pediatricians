import { Button } from 'react-bootstrap'

import './mainheader.styles.css'

function MainHeader() {
  return (
    <main>
      <div className='container text-center py-5'>
        <div className='text-primary mb-4'>
          <h1>Faster Care,</h1>
          <h1>For Less.</h1>
        </div>
        <div className='my-3'>
          <div>Unlimited 24/7 pediatric visits.</div>
          <div>Rated #1 for online pediatric care by Everyone.</div>
        </div>
        <div>
          <Button className='px-5 py-2 rounded-pill'>Get Started</Button>
        </div>
        <div style={{ fontSize: '0.8em' }}>
          Risk Free. Cancel Anytime
        </div>
        <div className='mt-3'>
          <div>* * * * *</div>
          <div style={{ fontSize: '0.9em' }}>Rated 5.0 by 100,000 happy parents!</div>
        </div>
      </div>
    </main>
  )
}

export default MainHeader