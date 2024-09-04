import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Purchases from "../pages/Purchases";
import Brands from "../pages/Brands";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Products from "../pages/Products";
import Home from "../pages/Home";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />

        <Route path="/stock" element={<PrivateRouter/>}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home/>} />
            <Route path="purchases" element={<Purchases/>} />
            <Route path="brands" element={<Brands/>} />
            <Route path="sales" element={<Sales/>} />
            <Route path="firms" element={<Firms/>} />
            <Route path="products" element={<Products/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
