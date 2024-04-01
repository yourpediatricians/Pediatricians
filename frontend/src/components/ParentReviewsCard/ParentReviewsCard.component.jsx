import Card from 'react-bootstrap/Card'

function ParentReviewsCard({ pic, rating, text, name }) {
  return (
    <Card className='border-0 py-3 px-2 mx-3 rounded-4'>
      <div className="row mt-3">
        <div className="col-8 offset-2">
          <Card.Img variant="top" src={pic} className='rounded-circle mb-3' />
          <div className='text-center'>* * * * *{rating}</div>
        </div>
      </div>
      <Card.Body>
        <Card.Subtitle className="mb-3 text-muted">{text}</Card.Subtitle>
        <Card.Text className='fw-bold' style={{fontSize: '1.1em'}}>- {name}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ParentReviewsCard