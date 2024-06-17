import { Link } from "react-router-dom"

const SignupSuccess = () => {
  return (
    <div className='flex-fill'>
      <div className="d-flex flex-column h-100 w-100 align-items-center justify-content-center">
        <div className='fs-2'>Created Account Successfully!</div>
        <div>Please check your email.</div>
        <div>Click on the received link to verify your email.</div>
        <div><Link to='/'>Go home</Link></div>
      </div>
    </div>
  )
}

export default SignupSuccess