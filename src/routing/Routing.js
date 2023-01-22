import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Countries from '../components/Countries'
import Error from '../components/Error'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Countries />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default Routing