import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import Orders from './Orders'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/orders' element={<Orders />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App