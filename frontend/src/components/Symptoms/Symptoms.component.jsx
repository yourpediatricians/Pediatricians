import {Image} from 'react-bootstrap'

function Symptoms() {
  const images = [
    ['https://placehold.co/500x500', 'https://placehold.co/500x500', 'https://placehold.co/500x500'],
    ['https://placehold.co/500x500', 'https://placehold.co/500x500', 'https://placehold.co/500x500'],
    ['https://placehold.co/500x500', 'https://placehold.co/500x500', 'https://placehold.co/500x500']
  ]

  return (
    <div>
      {
        images.map((image, i) => <div key={i} className='row'>
          {
            image.map((img, j) => <div key={j} className='col-4 p-3'>
              <Image src={img} fluid />
            </div>)
          }
        </div>)
      }
    </div>
  )
}

export default Symptoms