import axios from "axios"
import React, { useContext, useState, useEffect } from "react"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [curUser, setCurUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const updateCurUser = (user) => {
    // axios.defaults.withCredentials = true;
    // const res = await axios.get(`${import.meta.env.VITE_API}/user`)
    // if (res.data.success) {
    //   setCurUser(res.data.curUser)
    // } else {
    //   setCurUser(null)
    // }
    setCurUser(user)
    setLoading(false)
  }

  useEffect(() => {
    updateCurUser()
  }, [])

  return (
    <AuthContext.Provider value={{ curUser, loading, updateCurUser }}>
      {children}
    </AuthContext.Provider>
  )
}