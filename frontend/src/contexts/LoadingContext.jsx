import React, { useContext, useState } from "react"
import LoadingBar from "../components/LoadingBar/LoadingBar.component"

const LoadingContext = React.createContext()

export function useLoading() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {
        loading
          ?
          <LoadingBar />
          : null
      }
      {children}
    </LoadingContext.Provider>
  )
}