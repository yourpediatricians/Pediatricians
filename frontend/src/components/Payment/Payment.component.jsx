import axios from 'axios'
import { useEffect } from 'react'

const Payment = () => {

  // useEffect(() => {
  //   async function initPayment() {
  //     const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/payment/pay`, {}, { withCredentials: true })
  //     if (res.data.success)
  //       window.location.href = res.data.url
  //     else
  //       console.log(res.data)
  //   }
  //   initPayment()
  // }, [])

  return (
    <div>Payment</div>
  )
}

export default Payment