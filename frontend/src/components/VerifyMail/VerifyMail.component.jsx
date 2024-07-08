import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { useLoading } from "../../contexts/LoadingContext"
import axios from 'axios'

const VerifyMail = () => {
  const { loading, setLoading } = useLoading()
  const [isVerified, setIsVerified] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setLoading(true)
    async function verifyAccount() {
      const token = searchParams.get('token')
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/verify`, {token: token}, { withCredentials: true })
      if (res.data.success) {
        setIsVerified(true)
      }
      setLoading(false)
    }
    verifyAccount()
  }, [])

  return (
    <div className='flex-fill'>
      <div className="d-flex flex-column h-100 w-100 align-items-center justify-content-center">
        {
          loading
            ?
            <div className="fs-2">Verifying...</div>
            :
            isVerified
              ?
              <>
                <div className='fs-2'>Verified Account Successfully!</div>
                <div>Please click <Link to='/login'>here</Link> to login.</div>
                <div><Link to='/'>Go home</Link></div>
              </>
              :
              <>
                <div className='fs-2'>Token Expired!</div>
                <div>Please click <Link to='/'>here</Link> to go home.</div>
              </>
        }
      </div>
    </div>
  )
}

export default VerifyMail