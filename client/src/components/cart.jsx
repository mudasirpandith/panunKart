import React, { useEffect, useState } from "react";
import ProductCard from "./productCart";
import Product1 from "../images/product1.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
export default function Cart() {
  const navigate = useNavigate();

  var list = [Product1, Product2, Product3];
  const [userData, setUserData] = useState([]);
  // const [total, setTotal] = useState(0);
  const total = 1230;
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
  },[userData.length]);

  return userData.products ? (
    <>
      <p>
        Hello <strong> {userData.userName} </strong> ! Welcome to your Cart{" "}
      </p>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnGap={2} rowGap={2}>
          {userData.products
            .slice()
            .reverse()
            .map((prod, index) => {
              return (
                <>
                  <Grid xs={12} xl={2}>
                    <ProductCard
                      productName={prod.product.productName}
                      productDes={prod.product.productDes}
                      productPrice={prod.product.productPrice}
                      productImage={list[index]}
                    />{" "}
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Box>

      <h1>
        Total Amount : <strong> {total} </strong>
      </h1>
    </>
  ) : (
    "Cart Is loading"
  );
}
