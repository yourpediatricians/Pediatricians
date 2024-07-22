import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const PaymentStatus = () => {
  const { txnId } = useParams()
  const [paymentStatus, setPaymentStatus] = useState('')

  useEffect(() => {
    async function checkPayment() {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/payment/status/${txnId}`, { withCredentials: true })
      if (res.data.success)
        setPaymentStatus(true)
      else
        setPaymentStatus(false)
    }
    checkPayment()
  }, [])

  return (
    <>
      <div>PaymentStatus</div>
      {
        paymentStatus
          ?
          <div>successfull</div>
          :
          <div>failed</div>
      }
    </>
  )
}

export default PaymentStatus