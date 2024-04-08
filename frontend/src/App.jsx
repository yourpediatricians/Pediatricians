import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout.component'
import Home from './components/Home/Home.component'
import Login from './components/Login/Login.component'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
