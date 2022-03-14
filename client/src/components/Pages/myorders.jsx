import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../partials/navbar";
export default function MyOrders() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getUserData() {
      try {
        const res = await fetch(`/auth`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        if (!res.status === 200) {
          navigate("/login");
        } else {
          setUserData(data);
        }
      } catch (err) {
        navigate("/login");
      }
    }
    getUserData();
  }, [userData.length]);

  return userData.userName ? (
    <>
      {" "}
      <Navbar />
      My Orders
      {userData.myorders.length === 0 ? (
        <>
          <h3>No Order Placed</h3>
        </>
      ) : (
        <>
          <table style={{ width: "100%" }}>
            <tr>
              <th>user</th>
              <th>Price</th>
              <th>Receipt No</th>
              <th>Order Id</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
            {userData.myorders
              .slice()
              .reverse()
              .map((order) => {
                return (
                  <>
                    {" "}
                    <tr>
                      <th>{userData.userName}</th>
                      <th> ₹ {order.myorder.CheckoutPrice}</th>
                      <th>{order.myorder.receipt}</th>
                      <th>{order.myorder.orderId}</th>
                      <th>{order.myorder.status}</th>
                      <th>{order.myorder.date}</th>
                    </tr>
                  </>
                );
              })}
          </table>
        </>
      )}
    </>
  ) : (
    <>
      {" "}
      <Navbar />
      <center>Please wait</center>
    </>
  );
}
