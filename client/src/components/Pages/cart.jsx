import React, { useEffect, useState } from "react";
import ProductsInCartCard from "../partials/productsInCartCard";
import Product1 from "../images/product1.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import LockIcon from "@mui/icons-material/Lock";
import Navbar from "../partials/navbar";

require("./cart.css");
export default function Cart() {
  const navigate = useNavigate();

  var list = [Product1, Product2, Product3];
  const [userData, setUserData] = useState([]);
  var tot = 0;
  async function displayRazorpay() {
    const body = {
      Checkamount: tot,
      CheckoutUser: userData.userName,
    };

    const data = await fetch("/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: process.env.rzp_test_XHtwvNxWUEJOoH,
      currency: data.currency,
      amount: tot,
      name: "KaeshurKart",
      description: userData.userName,
      order_id: data.id,
      handler: function (response) {
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
      },
      prefill: {
        name: userData.userName,
        email: "anirudh@gmail.com",
        contact: userData.userPhone,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
          window.alert("error in loading...");
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

  return userData.products ? (
    <>
      {" "}
      <Navbar items={userData.products.length} />
      <p>
        Hello <strong> {userData.userName} </strong> ! Welcome to your Cart{" "}
      </p>
      {userData.products.length > 0 ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columnGap={2} rowGap={2}>
              {userData.products
                .slice()
                .reverse()
                .map((prod, index) => {
                  var url = "/productDetail/" + prod.product.productName;
                  return (
                    <>
                      <Grid xs={12} xl={2}>
                        <NavLink className="navlink" to={url}>
                          <ProductsInCartCard
                            productName={prod.product.productName.slice(0, 27)}
                            productDes={prod.product.productDes.slice(0, 27)}
                            productPrice={prod.product.productPrice}
                            productImage={list[index]}
                          />{" "}
                        </NavLink>
                      </Grid>
                    </>
                  );
                })}
            </Grid>
          </Box>
          <footer>
            <h1>
              {userData.products.map((prod) => {
                tot = tot + prod.product.productPrice;
              })}
              <Button
                onClick={displayRazorpay}
                variant="contained"
                color="success"
                startIcon={<LockIcon />}
              >
                {" "}
                Proceed and Pay Rs. {tot}
              </Button>
            </h1>
          </footer>
        </>
      ) : (
        <>
          <center>
            <h3>Cart is Empty</h3>
          </center>
        </>
      )}
    </>
  ) : (
    <center>
      <Navbar item={0} />
      <h1>Loading Please wait</h1>
    </center>
  );
}
