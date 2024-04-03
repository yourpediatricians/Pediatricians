import Card from 'react-bootstrap/Card'

function TeamInfoCard({ name, pic, designation, info }) {
  return (
    <Card className='border-0 p-3'>
      <div className="row">
        <div className="col-7">
          <Card.Img variant="top" src={pic} className='rounded-circle' />
        </div>
      </div>
      <Card.Body>
        <Card.Title className='fw-bold'>{name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{designation}</Card.Subtitle>
        <Card.Text className='text-muted'>{info}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TeamInfoCard