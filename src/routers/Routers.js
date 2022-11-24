import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/shop/:id" element={<ProductDetail />} />
               <Route path="/cart" element={<Cart />} />
               <Route
                    path="/checkOut"
                    element={
                         <ProtectedRoute>
                              <Checkout />
                         </ProtectedRoute>
                    }
               />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/login" element={<Login />} />
          </Routes>
     );
};

export default Routers;
