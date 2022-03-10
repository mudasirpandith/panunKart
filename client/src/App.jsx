import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuAppBar from "./components/appbar";
import Home from "./components/home";
import Cart from "./components/cart";
import Login from "./components/user Cred/login";
import Register from "./components/user Cred/register";
export default function App() {
  return (
    <>
      {/* <MenuAppBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>{" "}
    </>
  );
}
