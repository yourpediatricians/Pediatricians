import { Image } from "react-bootstrap"

import feature1 from '../../assets/whats included/247-support.png'
import feature2 from '../../assets/whats included/pulse-oximeter.png'
import feature3 from '../../assets/whats included/thermometer.jpg'
import mainImg from '../../assets/whats included/included-care-pic.jpg'

function FeaturesIncluded() {
  const features = [
    {
      mainText: 'Unlimited 24/7 care',
      subText: 'Get help with anything, big or small',
      image: feature1
    },
    {
      mainText: 'Pulse oximeter',
      subText: 'Assess heartrate, oxygen, and breathing',
      image: feature2
    },
    {
      mainText: 'Oral thermometer',
      subText: "Quick, and with a flexible tip -just in case you don't have one at home",
      image: feature3
    }
  ]

  return (
    <section>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col-12 col-lg-5 col-xl-6 order-2 order-md-1 p-3">
            <h1 className="mb-4 fw-bold">What's included</h1>
            <div className="fs-5">
              {
                features.map((feature, i) => <div key={i} className="row mb-4">
                  <div className="col-3 col-xl-2"><Image src={feature.image} fluid /></div>
                  <div className="col-9 col-xl-8">
                    <div>{feature.mainText}</div>
                    <div className="fs-6 text-muted">{feature.subText}</div>
                  </div>
                </div>)
              }
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 order-1 order-md-2  mb-5 mb-md-0 align-self-center">
            <div className="container">
              <div className="w-100 text-center">
                <Image src={mainImg} fluid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesIncluded