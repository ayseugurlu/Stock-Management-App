import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'


const AppRouters = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouters