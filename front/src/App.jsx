import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Verify from './pages/Verify'

// Auth 
import Auth from "./components/Auth"


function App() {

  return (
    <div
      dir="rtl"
    >
      <Header/>

      <div className='pt-16'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
