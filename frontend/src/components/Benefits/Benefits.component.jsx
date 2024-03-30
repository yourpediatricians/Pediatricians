import { Image } from "react-bootstrap"

function Benefits() {
  const heading = "It's time for better pediatric care."
  const info = 'Once you join, you can use the service immediately. You’ll also receive a handy at-home medical kit, enabling our pediatricians to diagnose double the issues - saving you time, stress, and urgent care costs.'
  const benefits = [
    {
      heading: 'Long Waits',
      info: 'Get diagnoses, prescriptions, and school notes in minutes from top-rated, board-certified pediatricians.'
    },
    {
      heading: 'Surprise fees',
      info: 'There are no fees, copays, or limits. An entire year of Blueberry is often less than the cost of a single urgent care visit!'
    },
    {
      heading: 'Office closed',
      info: 'As a member you get access to Blueberry 24/7, 365 days of the year. Even on Holidays.'
    },
    {
      heading: 'False promises',
      info: 'If you don’t like Blueberry we’ll refund your membership. We have a 100% satisfaction guarantee policy.'
    }
  ]
  return (
    <section>
      <div className="row">
        <div className="col-7">
          <div>
            <h1>{heading}</h1>
            <p>{info}</p>
          </div>
          <div>
            <Image src="https://placehold.co/400x400" fluid/>
          </div>
        </div>
        <div className="col-5">

        </div>
      </div>
    </section>
  )
}

export default Benefits