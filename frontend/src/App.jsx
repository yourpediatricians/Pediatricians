import Navbar from "./Components/Navbar"
import Slideshow from "./Components/Slideshow"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
function App() {
  return <>
    {/* <div className="underline">App</div> */}
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      {/* <Route path='login' element={<Login />} /> */}
    </Routes>
  </>
}

export default App