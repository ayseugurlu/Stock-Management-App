import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import Dashboard from '../pages/Dashboard'


const AppRouters = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>

          {/* <Route path="/stock" element={<PrivateRouter/>}> */}
              <Route path="/" element={<Dashboard/>} />
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouters