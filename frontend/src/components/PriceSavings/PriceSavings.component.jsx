import React from 'react'

function PriceSavings() {
  return (
    <section>
      <div className="container my-5">
        <h1 className="fw-bold">
          How much can Wepediatrics save my family?
        </h1>
        <div className='mb-3'>
          Families save ₹25,000 per year on average in copays and unexpected bills by becoming Wepediatrics members! That's because with Wepediatrics, there are no visit fees, no after hour fees, and no copays - no kidding! Never worry about whether or not a call with a Pediatrician is going to cost you.
        </div>
        <div className="row align-items-center fs-5 text-center">
          <div className="col-12 col-lg-4 mb-3 mb-lg-0">
            <div style={{ backgroundColor: '#235aff' }} className='text-white rounded-4 p-4 px-5 text-center'>
              <div>Image</div>
              <div className='fs-4'>Wepediatrics</div>
              <div className='fw-bold'>₹0</div>
              <div>per visit</div>
              <div>with or without insurance</div>
            </div>
          </div>
          <div className="col-12 col-lg-2 mb-3 mb-lg-0 fw-bold">
            compared to:
          </div>
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <div className="m-2 p-4 border border-4 border-warning-subtle rounded-4">
              <div>Insurance Provided Telemedicine</div>
              <div className='fw-bold fs-3'>₹20000</div>
              <div>per visit</div>
            </div>
          </div>
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <div className="m-2 p-4 border border-4 border-warning-subtle rounded-4">
              <div>Urgent Care</div>
              <div className='fw-bold fs-3'>₹1500</div>
              <div>per visit</div>
            </div>
          </div>
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <div className="m-2 p-4 border border-4 border-warning-subtle rounded-4">
              <div>Emergency Room</div>
              <div className='fw-bold fs-3'>₹5000</div>
              <div>per visit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceSavings