import React, { useState } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/navbar/Navbar'
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
  <>
    {showLogin?<LoginPopup/>:<></>}  
    <div className="app">
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path = '/order' element = {<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App