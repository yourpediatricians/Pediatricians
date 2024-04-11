import SignupFormStep1 from "../SignupFormStep1/SignupFormStep1.component"
import SignupFormStep2 from "../SignupFormStep2/SignupFormStep2.component"
import SignupFormStep3 from "../SignupFormStep3/SignupFormStep3.component"

function Signup() {
  return (
    <div className='flex-fill' style={{ background: '#0d6efd' }}>
      <div className="d-flex h-100 w-100 align-items-center">
        <div className="container">
          <div className="row w-100 mx-0">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
              {/* <SignupFormStep1 /> */}
              {/* <SignupFormStep2 /> */}
              <SignupFormStep3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup