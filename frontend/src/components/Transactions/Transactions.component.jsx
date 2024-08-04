import { useEffect, useState } from "react"
import { ListGroup } from 'react-bootstrap'
import axios from "axios"

const Transactions = () => {
  const [txns, setTxns] = useState([])

  useEffect(() => {
    async function getAllTransactions() {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/payment/status/all`, { withCredentials: true })
      if (res.data.success)
        setTxns(res.data.txns.sort((a, b) => a.date < b.date))
    }
    getAllTransactions()
  }, [])

  return (
    <>
      <div className="w-100 my-3 d-flex justify-content-center">
        <div>Transaction History</div>
      </div>
      <ListGroup>
        {
          txns.map((txn, i) => <ListGroup.Item key={i}>
            <div>Transaction Id: {txn.txnId}</div>
            <div>Amount: ₹ {txn.amount / 100}</div>
            <div>Date: {new Date(txn.date).toLocaleString()}</div>
            {
              txn.code === 'PAYMENT_SUCCESS'
                ?
                <div>Payment Successfull</div>
                :
                <div>Payment failed</div>
            }
          </ListGroup.Item>)
        }
      </ListGroup>
    </>

  )
}

export default Transactions