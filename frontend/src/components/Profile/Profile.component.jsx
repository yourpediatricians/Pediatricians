import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const Profile = () => {
  return (
    <>
      <Link to='/transactions/all'><Button className='ms-3'>View all transactions</Button></Link>
    </>
  )
}

export default Profile