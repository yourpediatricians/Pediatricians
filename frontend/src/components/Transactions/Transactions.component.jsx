import { useEffect, useState } from "react"
import { ListGroup } from 'react-bootstrap'
import axios from "axios"

const Transactions = () => {
  const [txns, setTxns] = useState([])

  useEffect(() => {
    async function getAllTransactions() {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/payment/status/all`, { withCredentials: true })
      if (res.data.success)
        setTxns(res.data.txns.sort((a, b) => a.createdAt < b.createdAt))
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
            <div>Transaction Id: {txn._id}</div>
            <div>Amount: ₹ {txn.amount}</div>
            <div>Date: {new Date(txn.createdAt).toLocaleString()}</div>
            {
              txn.status === 'pending'
                ?
                <div>Payment Pending</div>
                :
                txn.status === 'failed'
                  ?
                  <div>Payment failed</div>
                  :
                  <div>Payment Successful</div>
            }
          </ListGroup.Item>)
        }
      </ListGroup>
    </>

  )
}

export default Transactions