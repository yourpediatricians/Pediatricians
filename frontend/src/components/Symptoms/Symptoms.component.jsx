import allergies from '../../assets/symptoms/allergies.png'
import cold_fever from '../../assets/symptoms/cold_fever.png'
import cuts_scratches from '../../assets/symptoms/cuts_scratches.png'
import ear_infection from '../../assets/symptoms/ear_infection.png'
import eye_irritation from '../../assets/symptoms/eye_irritation.png'
import rashes from '../../assets/symptoms/rashes.png'
import sleep_issues from '../../assets/symptoms/sleep_issues.png'
import stings_bites from '../../assets/symptoms/stings_bites.png'
import stomach_upset from '../../assets/symptoms/stomach_upset.png'

import { Image } from 'react-bootstrap'

function Symptoms() {
  const types = [
    [{ type: 'Allergies', img: allergies }, { type: 'Cold & Fever', img: cold_fever }, { type: 'Cuts & Scratches', img: cuts_scratches }],
    [{ type: 'Ear Infection', img: ear_infection }, { type: 'Eye Irritation', img: eye_irritation }, { type: 'Rashes', img: rashes }],
    [{ type: 'Sleep Issues', img: sleep_issues }, { type: 'Stings & Bites', img: stings_bites }, { type: 'Stomach Upset', img: stomach_upset }]
  ]

  return (
    <div>
      {
        types.map((type, i) => <div key={i} className='row'>
          {
            type.map((info, j) => <div key={j} className='col-4 p-3'>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                  <div className="col-8 offset-2">
                    <div><Image src={info.img} fluid /></div>
                  </div>
                </div>
                <div>{info.type}</div>
              </div>
            </div>)
          }
        </div>)
      }
    </div>
  )
}

export default Symptoms