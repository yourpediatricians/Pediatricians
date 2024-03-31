import { Button, Image } from "react-bootstrap"

function MainHeader() {
  return (
    <main style={{ backgroundColor: '#f4f2f0' }}>
      <div className="row">
        <div className="col-5 col-lg-6">
          <div className="d-flex align-items-center justify-content-center">
            <div className="py-5">
              <div className="text-primary fw-bold fs-1 mt-5 mb-3">
                <div>Faster Care,</div>
                <div>For Less</div>
              </div>
              <div className="mb-4">
                <div>Unlimited 24/7 pediatric visits.</div>
                <div>Rated #1 for online pediatric care by Verywell.</div>
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
              <div>
                <div>
                  * * * * *
                </div>
                <div>
                  Rated 4.8 by 100,000 happy parents!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 col-lg-5 pe-5 align-self-end">
          <Image src="https://placehold.co/800x800" fluid />
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>
    </main>
  )
}

export default MainHeader