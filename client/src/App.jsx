import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import Cart from "./components/Pages/cart";
import Login from "./components/user Cred/login";
import Register from "./components/user Cred/register";
import Admin from "./components/admin/admin";
import SingleProduct from "./components/Pages/productDetail";
import MyOrders from "./components/Pages/myorders";
require("./App.css");
export default function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/productDetail/:productName" element={<SingleProduct />} />
        <Route path="*" element={<Home />} />
      </Routes>{" "}
    </>
  );
}
