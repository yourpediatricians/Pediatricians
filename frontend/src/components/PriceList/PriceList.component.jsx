import { Image } from 'react-bootstrap'

import price_img from '../../assets/price_img.jpeg'

const PriceList = () => {
  return (
    <div>
      <Image src={price_img} fluid/>
    </div>
  )
}

export default PriceList