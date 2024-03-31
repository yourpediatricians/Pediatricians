import { Card } from "react-bootstrap"

function AwardCard({image, text}) {
  return (
    <Card style={{ width: '9rem' }} className='border-0'>
      <Card.Img variant="top" className='rounded-circle' src={image} />
      <Card.Body>
        <Card.Text className='text-center'>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AwardCard