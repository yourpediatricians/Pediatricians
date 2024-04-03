import { Accordion } from 'react-bootstrap'

import './faqs.styles.css'

function Faqs() {
  const questions = [
    {
      ques: 'How much does WePediatrics Cost?',
      ans: "WePediatrics's membership costs ₹999 per month or ₹8500 per year, plus a one-time fee for your at-home medical kit (₹800). There are no per-visit fees or copays regardless of your insurance coverage; no matter how much you use WePediatrics or how many children you have, you'll never be charged any additional fees."
    },
    {
      ques: 'Can I cancel my WePediatrics membership?',
      ans: 'While we would be sad to see you go, you can easily cancel your membership online at any time via your account page. There are no complicated hoops to jump through or phone calls you have to make.'
    }
  ]

  return (
    <section>
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div className="bg-primary text-white rounded-circle" style={{ width: '10em', height: '10em' }}>
            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
              <div className='fs-1'>FAQs</div>
              <div>&#x25BC;</div>
            </div>
          </div>
        </div>
        <div>
          <Accordion flush>
            {
              questions.map((question, i) => <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>{question.ques}</Accordion.Header>
                <Accordion.Body>{question.ans}</Accordion.Body>
              </Accordion.Item>)
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faqs