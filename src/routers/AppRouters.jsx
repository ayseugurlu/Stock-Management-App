import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from '../pages/Login'


const AppRouters = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouters