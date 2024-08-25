import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path = '/order' element = {<PlaceOrder/>}/>
      </Routes>

    </div>
  )
}

export default App

