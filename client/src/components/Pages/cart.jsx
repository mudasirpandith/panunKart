import React, { useEffect, useState } from "react";
import ProductsInCartCard from "../partials/productsInCartCard";
import Product1 from "../images/product1.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import LockIcon from "@mui/icons-material/Lock";
import Navbar from '../partials/navbar'
require("./cart.css");
export default function Cart() {
  var tot = 0;
  const navigate = useNavigate();

  var list = [Product1, Product2, Product3];
  const [userData, setUserData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
 
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnGap={2} rowGap={2}>
          {userData.products
            .slice()
            .reverse()
            .map((prod, index) => {
              return (
                <>
                  <Grid xs={12} xl={2}>
                    <ProductsInCartCard
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
      <footer>
        <h1>
          {userData.products.map((prod) => {
            tot = tot + prod.product.productPrice;
          })}
          <Button variant="contained" color="success" startIcon={<LockIcon />}>
            {" "}
            Proceed and Pay Rs. {tot}
          </Button>
        </h1>
      </footer>
    </>
  ) : (
    <center>
      <Navbar item={0} />
      <h1>Loading Please wait</h1>
    </center>
  );
}
