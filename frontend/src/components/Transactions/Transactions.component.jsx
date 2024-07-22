import { useEffect, useState } from "react"
import axios from "axios"

const Transactions = () => {
  const [txns, setTxns] = useState([])

  useEffect(() => {
    async function getAllTransactions() {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/payment/status/all`, { withCredentials: true })
      if (res.data.success)
        setTxns(res.data.txns)
    }
    getAllTransactions()
  }, [])

  return (
    <>
      <div>Transaction History</div>
      {
        txns.map((txn, i) => <div key={i}>
          <div>Transaction Id: {txn.txnId}</div>
          <div>Amount: {txn.amount / 100}</div>
          <div>Date: {txn.date.toLocaleString()}</div>
          {
            txn.code === 'PAYMENT_SUCCESS'
              ?
              <div>Payment Successfull</div>
              :
              <div>Payment failed</div>
          }
          {/* {
            code: 'PAYMENT_SUCCESS',
          txnId: 'T2407230115162970342548',
          amount: 99900,
          state: 'COMPLETED',
          date: 2024-07-22T19:45:15.965Z
  } */}
        </div>)
      }
    </>

  )
}

export default Transactions