import { Button } from "react-bootstrap"
import Symptoms from "../Symptoms/Symptoms.component"

function Working() {
  return (
    <section>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col-lg-5 col-xl-6 p-3 mb-5 mb-lg-0">
            <h1 className="mb-4 fw-bold">How Wepediatrics Works</h1>
            <ol className="lh-lg mb-5" style={{ fontSize: '1.1em' }}>
              <li>Open the app & answer a few quick questions about your child's symptoms</li>
              <li>Send your child's relevant vitals, ear exam, or photos/video securely via our app</li>
              <li>Within minutes, you'll speak with a pediatrician! You'll get a diagnosis, prescription (when appropriate) and doctor's note - even if it is the middle of the night.</li>
            </ol>
            <Button className="px-5 py-2 rounded-pill fs-6 fw-bold">Get Started</Button>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="container">
              <Symptoms />
              <div className="w-100 text-center">
                Wepediatrics helps with these symptoms and more!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Working