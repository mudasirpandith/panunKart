import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import Cart from "./components/Pages/cart";
import Login from "./components/user Cred/login";
import Register from "./components/user Cred/register";
import Admin from "./components/admin/admin";
require('./App.css')
export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>{" "}
    </>
  );
}
