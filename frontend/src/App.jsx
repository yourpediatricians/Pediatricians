import axios from 'axios'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

import Layout from './components/Layout/Layout.component'
import Home from './components/Home/Home.component'
import Login from './components/Login/Login.component'
import Signup from './components/Signup/Signup.component'
import SignupSuccess from './components/SignupSuccess/SignupSuccess.component'
import VerifyMail from './components/VerifyMail/VerifyMail.component'
import JoinUs from './components/JoinUs/JoinUs.component'

import Prescription from './components/Prescription/Prescription.component'

import './App.css'
import RefundPolicy from './components/Footer/RefundPolicy'
import PrivacyPolicy from './components/Footer/PrivacyPolicy'
import TermsOfUse from './components/Footer/TermsOfUse'

function App() {
  const { curUser, updateCurUser } = useAuth()

  useEffect(() => {
    async function fetchUserInfo() {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/info`, { withCredentials: true })
      if (res.data.success)
        updateCurUser(res.data.userInfo)
    }
    fetchUserInfo()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='join' element={<JoinUs />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signup/success' element={<SignupSuccess />} />
          <Route path='verify' element={<VerifyMail />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='termsofuse' element={<TermsOfUse />} />

          <Route path='prescription' element={<Prescription />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
